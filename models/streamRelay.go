package models

// Stream Relay configuration.
type StreamRelay struct {
	RtmpUrl        string `json:"rtmpUrl,omitempty"`
	RtmpStreamName string `json:"rtmpStreamName,omitempty"`
	HlsUrl         string `json:"hlsUrl,omitempty"`
	Enabled        bool   `json:"enabled"`
}
