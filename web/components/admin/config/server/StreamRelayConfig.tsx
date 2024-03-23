import React from 'react';
import EditStreamRelay from './EditStreamRelay';

// eslint-disable-next-line react/function-component-definition
export default function ConfigStreamRelayInfo() {
  return (
    <>
      <p className="description">
        Owncast supports using a RTMP Relay and HLS Playback for remote transcoding. Learn more
        about this by visiting our{' '}
        <a
          href="https://owncast.online/docs/storage/?source=admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stream Relay Documentation
        </a>
        .
      </p>
      <EditStreamRelay />
    </>
  );
}
