package transcoder

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"path"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/grafov/m3u8"
	"github.com/owncast/owncast/config"
	"github.com/owncast/owncast/core/data"
	"github.com/owncast/owncast/models"
	log "github.com/sirupsen/logrus"
)

var (
	_stop           chan struct{}
	_outputSettings []models.StreamOutputVariant
)

// StopHLSPuller stops the HLS puller routine
func StopHLSPuller() {
	log.Infoln("StopHLSPuller")
	if _stop != nil {
		close(_stop)
	}
}

// StartHLSPuller starts the HLS puller routine
func StartHLSPuller(broadCastOutputSettings []models.StreamOutputVariant) {
	_outputSettings = broadCastOutputSettings
	if data.GetStreamRelayConfig().Enabled {
		_stop = make(chan struct{})
		go pollRemoteTranscoder(_stop)
	}
}

// Poll the remote transcoder for HLS segments and playlists
func pollRemoteTranscoder(stop <-chan struct{}) {
	ticker := time.NewTicker(2 * time.Second) // Poll every 2 seconds
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			// Poll the remote URL until it returns a response
			log.Info("Polling the stream relay service for HLS segments...")

			port := config.InternalHLSListenerPort
			localListenerAddress := "http://127.0.0.1:" + port

			streamName := data.GetStreamRelayConfig().RtmpStreamName
			playlistURL := fmt.Sprintf("%s/%s.m3u8", data.GetStreamRelayConfig().HlsUrl, streamName)
			relayHLSPlaylist(playlistURL, localListenerAddress, -1)
		case <-stop:
			log.Info("Received stop signal. Exiting polling routine.")
			return
		}
	}
}

// Get the matching variants between the manifest and the HLS variants supplied
func getMatchingVariants(manifestVariant models.StreamOutputVariant, hlsVariants []*m3u8.Variant) []*m3u8.Variant {
	var matchingVariants []*m3u8.Variant

	for _, hlsVariant := range hlsVariants {
		log.Info(fmt.Sprintf("  [getMatchingVariants]  H = %s  W= %s   R = %s", manifestVariant.ScaledWidth, manifestVariant.ScaledHeight, hlsVariant.Resolution))
		// Compare attributes to determine if they match
		if fmt.Sprintf("%dx%d", manifestVariant.ScaledWidth, manifestVariant.ScaledHeight) == hlsVariant.Resolution {
			// Add to matching variants
			matchingVariants = append(matchingVariants, hlsVariant)
		}
	}

	return matchingVariants
}

// Relay the HLS playlist and segments to the destination
func relayHLSPlaylist(playlistURL string, destinationURL string, variantIndex int) {
	playListContents, err := fetchHLSPlaylist(playlistURL)
	if err != nil {
		log.Error(fmt.Sprintf("Unable to retrieve the HLS playlist.  Are you sure the endpoint is running and accessible?  It might take a few seconds for the relay to recieve segments.  Error: %v", err))
		return
	}

	// make sure the playlist is not empty or a blank string
	if len(strings.TrimSpace(playListContents)) == 0 {
		log.Warn("Playlist is empty.  Nothing to relay.")
		return
	}
	p, listType, err := m3u8.DecodeWith(bytes.NewBufferString(playListContents), true, nil)
	if err != nil {
		log.Error(fmt.Sprintf("Error parsing playlist during relaying.  Error: %v", err))
		return
	}

	switch listType {
	case m3u8.MEDIA:
		// if the media playlist has segments, relay them
		mediapl := p.(*m3u8.MediaPlaylist)
		hlsEndpoint := data.GetStreamRelayConfig().HlsUrl
		finalDestinationURL := fmt.Sprintf("%s/%d/stream.m3u8", destinationURL, variantIndex)

		newPlaylist, err := rewriteMediaPlaylistURIs(mediapl)
		if err != nil {
			log.Error(fmt.Errorf("error rewriting the media HLS playlist. Error: %v", err))
			return
		}

		// loop over the segments and relay them
		for i := uint(0); i < mediapl.Count(); i++ {
			item := mediapl.Segments[i]
			if item == nil {
				continue
			}
			segmentURL := item.URI

			// make sure path is empty
			if strings.HasPrefix(item.URI, "/") {
				hlsParsed, err := url.Parse(hlsEndpoint)
				if err != nil {
					log.Error(fmt.Sprintf("Error parsing HlsUrl while updating segment URIs.  Error: %v", err))
					return
				}
				hlsParsed.Path = ""
				hlsURLWithoutPath := hlsParsed.String()
				segmentURL = fmt.Sprintf("%s%s", hlsURLWithoutPath, item.URI)
			}
			segmentDestinationURL := fmt.Sprintf("%s/%d/%d.ts", destinationURL, variantIndex, item.SeqId)
			log.Info(fmt.Sprintf("Relaying segment from: %s to destination: %s", segmentURL, segmentDestinationURL))
			err = relaySegmentToDestination(segmentURL, segmentDestinationURL)
			if err != nil {
				log.Error(fmt.Errorf("error relaying the segment to its destination. Error: %v", err))
			}
		}
		//now that the segments are relayed, relay the playlist so the segements are accessible
		err = relayPlaylistToDestination(newPlaylist, finalDestinationURL)
		if err != nil {
			log.Error(fmt.Errorf("error relaying the media HLS playlist. Error: %v", err))
			return
		}
	case m3u8.MASTER:
		masterpl := p.(*m3u8.MasterPlaylist)
		finalDestinationURL := fmt.Sprintf("%s/stream.m3u8", destinationURL)
		//TODO: (MZ) this part needs to follow the conventions in Owncast see utils.go (createVariantDirectories)
		if len(masterpl.Variants) != 0 {
			for index := range masterpl.Variants {
				if err := os.MkdirAll(path.Join(config.HLSStoragePath, strconv.Itoa(index)), 0o750); err != nil {
					log.Fatalln(err)
				}
			}
		}
		newMasterPlaylist, err := rewriteMasterPlaylistURIs(masterpl, masterpl.Variants)

		if err != nil {
			log.Error(fmt.Errorf("error rewriting the master HLS playlist. Error: %v", err))
			return
		}
		err = relayPlaylistToDestination(newMasterPlaylist, finalDestinationURL)
		if err != nil {
			log.Error(fmt.Errorf("error relaying the master HLS playlist. Error: %v", err))
			return
		}

		// loop over matching variants and get relay the variant playlist
		for variantIndex, variant := range masterpl.Variants {
			log.Info(fmt.Sprintf(" matching variants ...  current variant: %s", variant.URI))

			mediaPlaylistURL := fmt.Sprintf("%s/%s", data.GetStreamRelayConfig().HlsUrl, variant.URI)
			relayHLSPlaylist(mediaPlaylistURL, destinationURL, variantIndex)
		}
	}
}

// filters playlist to only the variants of interest and rewrites playlist variant URIs to the expect path as determined by vairant indexes
func rewriteMediaPlaylistURIs(sourcePlaylist *m3u8.MediaPlaylist) (string, error) {
	mediaPlaylist, _, err := m3u8.DecodeWith(bytes.NewBufferString(sourcePlaylist.String()), true, nil)
	if err != nil {
		return "", fmt.Errorf("unable to load media playlist for rewriting.  Error: %v", err)
	}
	mediapl := mediaPlaylist.(*m3u8.MediaPlaylist)
	mediapl.Segments = updateSegmentPaths(mediapl.Segments)
	log.Info(fmt.Sprintf("new playlist %s", mediaPlaylist.String()))
	return mediaPlaylist.String(), nil
}

// rewrite playlists paths so that the paths point to the correct variants by index
func updateSegmentPaths(segments []*m3u8.MediaSegment) []*m3u8.MediaSegment {
	newSegments := []*m3u8.MediaSegment{}
	for _, segment := range segments {
		if segment == nil {
			continue
		}
		newSegment := copySegment(*segment)
		newSegment.URI = filepath.Base(segment.URI)
		newSegments = append(newSegments, &newSegment)
	}
	return newSegments
}

// filters playlist to only the variants of interest and rewrites playlist variant URIs to the expect path as determined by vairant indexes
func rewriteMasterPlaylistURIs(sourcePlaylist *m3u8.MasterPlaylist, matchingVariants []*m3u8.Variant) (string, error) {
	masterPlaylist := m3u8.NewMasterPlaylist()
	if err := masterPlaylist.DecodeFrom(bytes.NewBufferString(sourcePlaylist.String()), false); err != nil {
		return "", fmt.Errorf("unable to load master playlist for rewriting.  Error: %v", err)
	}
	masterPlaylist.Variants = updateVariantPaths(sourcePlaylist.Variants)
	log.Info(fmt.Sprintf("new playlist %s", masterPlaylist.String()))
	return masterPlaylist.String(), nil
}

// rewrite playlists paths so that the paths point to the correct variants by index
func updateVariantPaths(playlistVariants []*m3u8.Variant) []*m3u8.Variant {
	newVariants := []*m3u8.Variant{}
	for variantIndex, variant := range playlistVariants {
		// for _, matchingVariant := range matchingVariants {
		// if variant == matchingVariant {
		newVariant := copyVariant(*variant)
		// variantIndex := getMatchingVariantIndex(variant)
		newVariant.URI = fmt.Sprintf("%d/stream.m3u8", variantIndex)
		newVariants = append(newVariants, &newVariant)
		// break
		// }
		// }
	}
	return newVariants
}

// returns the index of the variant in the list of variants
func getMatchingVariantIndex(variant *m3u8.Variant) int {
	log.Info(fmt.Sprintf(" getMatchingVariantIndex ... current variant: %s", variant))
	//TODO: add support for stream relay resolution settings....for now just write everything to data/hls/0
	// if len(data.GetStreamOutputVariants()) != 0 {
	// 	for index, outputVariant := range data.GetStreamOutputVariants() {
	// 		if fmt.Sprintf("%dx%d", outputVariant.ScaledWidth, outputVariant.ScaledHeight) == variant.Resolution {
	// 			return index
	// 		}
	// 	}
	// }
	return 0
}

// Create a new Variant and copy the values from the original
func copyVariant(original m3u8.Variant) m3u8.Variant {
	return m3u8.Variant{
		URI:           original.URI,
		Chunklist:     original.Chunklist,
		VariantParams: original.VariantParams,
	}
}

// Create a new Variant and copy the values from the original
func copySegment(original m3u8.MediaSegment) m3u8.MediaSegment {
	return m3u8.MediaSegment{
		SeqId:           original.SeqId,
		Title:           original.Title,
		URI:             original.URI,
		Duration:        original.Duration,
		Limit:           original.Limit,
		Offset:          original.Offset,
		Key:             original.Key,
		Map:             original.Map,
		Discontinuity:   original.Discontinuity,
		SCTE:            original.SCTE,
		ProgramDateTime: original.ProgramDateTime,
		Custom:          original.Custom,
	}
}

// Make an HTTP GET request to fetch the HLS playlist
func fetchHLSPlaylist(playlistURL string) (string, error) {

	resp, err := http.Get(playlistURL)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("error reading playlist body. Error: %v", err)
	} else if len(bodyBytes) == 0 {
		return "", fmt.Errorf("empty playlist body")
	}

	log.Info(fmt.Sprintf("Fetched HLS playlist from: %s", playlistURL))
	return string(bodyBytes), nil
}

// post the playlist to the destination HTTP address
func relayPlaylistToDestination(playlist string, destinationURL string) error {

	log.Info(fmt.Sprintf("Relaying playlist to destination: %s", destinationURL))

	client := &http.Client{}
	req, err := http.NewRequest(http.MethodPut, destinationURL, strings.NewReader(playlist))
	req.Header.Set("Content-Type", "application/x-mpegURL")
	if err != nil {
		return fmt.Errorf("unable to create request to send the playlist to the destination. Error: %v", err)
	}
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("unable to send the playlist to the destination. Error: %v", err)
	}
	defer resp.Body.Close()
	//make sure we get a 200 status code
	if resp.StatusCode != http.StatusOK {
		// print response body
		bodyBytes, err := io.ReadAll(resp.Body)
		if err != nil {
			return fmt.Errorf("unexpected error when reading the response from the relay request. Status code: %d. Error: %v", resp.StatusCode, err)
		}
		return fmt.Errorf("unexpected status code when relaying the playlist: %d - %s", resp.StatusCode, bodyBytes)
	}
	log.Info(fmt.Sprintf("Playlist successfully relayed to destination: %s", destinationURL))
	return err
}

// Download the content from the source URL and send it to the destination URL
func relaySegmentToDestination(segmentURL string, destinationURL string) error {

	log.Info(fmt.Sprintf("Relaying segment from: %s to destination: %s", segmentURL, destinationURL))
	resp, err := http.Get(segmentURL)
	if err != nil {
		return fmt.Errorf("error retrieving segment from source URL. Error: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status code when retrieving the segment: %d", resp.StatusCode)
	}
	// Read response body into a buffer
	buf := new(bytes.Buffer)
	_, err = buf.ReadFrom(resp.Body)
	if err != nil {
		return fmt.Errorf("error reading response body into buffer. Error: %v", err)
	}
	log.Info(fmt.Sprintf("Retrieved segment from source URL: %s", segmentURL))

	err = sendSegmentToDestination(destinationURL, buf)
	if err != nil {
		return fmt.Errorf("error relaying the segment to destination. Error: %v", err)
	}

	log.Info(fmt.Sprintf("Segment successfully relayed to destination: %s", destinationURL))
	return nil
}

func sendSegmentToDestination(destinationURL string, buf *bytes.Buffer) error {

	// Send the content to the destination HTTP address
	client := &http.Client{}
	putReq, err := http.NewRequest(http.MethodPut, destinationURL, buf)
	if err != nil {
		return fmt.Errorf("error preparing to relay the segment to destination. Error: %v", err)
	}
	putReq.Header.Set("Content-Type", "application/octet-stream")
	putResp, err := client.Do(putReq)
	if err != nil {
		return fmt.Errorf("error relaying the segment to destination. Error: %v", err)
	}
	defer putResp.Body.Close()

	if putResp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status code when relaying the segment: %d", putResp.StatusCode)
	}
	return nil
}
