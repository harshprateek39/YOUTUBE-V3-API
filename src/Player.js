// src/VideoPlayer.js
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyC3rmd7R0IDaZl1xe00HskdX657xIM5imc`
        );
        setVideoDetails(response.data.items[0].snippet);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId]); 

  return (
    <div >
      {videoDetails && (
        <div>
          <h2>{videoDetails.title}</h2>
          
          <YouTube videoId={videoId} />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
