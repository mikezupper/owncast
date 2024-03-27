package transcoder

import (
	"path/filepath"
	"testing"

	"github.com/owncast/owncast/config"
)

func TestStreamRelayCommand(t *testing.T) {
	transcoder := new(Transcoder)
	transcoder.ffmpegPath = filepath.Join("fake", "path", "ffmpeg")
	transcoder.SetInput("fakecontent.flv")
	transcoder.streamRelaySettings = config.GetDefaults().StreamRelay
	transcoder.streamRelaySettings.Enabled = true

	cmd := transcoder.getString()

	expectedLogPath := filepath.Join("data", "logs", "transcoder.log")
	expected := `FFREPORT=file="` + expectedLogPath + `":level=32 ` + transcoder.ffmpegPath + ` -hide_banner -loglevel warning -i ` + transcoder.input + ` -f flv -c copy '` + transcoder.streamRelaySettings.RtmpUrl + `/` + transcoder.streamRelaySettings.RtmpStreamName + `'`

	if cmd != expected {
		t.Errorf("ffmpeg command does not match expected.\nGot %s\n, want: %s", cmd, expected)
	}
}
