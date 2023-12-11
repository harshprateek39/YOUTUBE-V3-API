import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const options = {
      playerVars: {
        autoplay: 1,
      },
    };
    const onReady = (event) => {
      setPlayer(event.target);
    };
    const onEnd = () => {
      console.log('Video ended');
    };
    if (player) {
      player.addEventListener('onReady', onReady);
      player.addEventListener('onEnd', onEnd);
    }

    return () => {
      if (player) {
        player.removeEventListener('onReady', onReady);
        player.removeEventListener('onEnd', onEnd);
      }
    };
  }, [player]);

  return (
    <div style={{ borderRadius:"30px"}}  className="video-player-container ">
      <YouTube videoId={videoId} className="video-player" />
    </div>
  );
};

export default VideoPlayer;