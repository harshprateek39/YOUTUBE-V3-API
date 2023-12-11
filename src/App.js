// src/App.js
import React, { useState } from 'react';
import VideoPlayer from './Player';
import './App.css';

const App = () => {
  const [videoId, setVideoId] = useState('aV9gfuUhegE');

  const handleInputChange = (e) => {
    setVideoId(e.target.value);
  };

  return (
    <div className='App'>
      <h1 style={{ color:"white" , paddingTop:"50px"}}>YouTube Video Player</h1>
      <label style={{ color:'white', fontWeight:"bold"}}>
        Enter YouTube Video ID:
        <input type="text input" value={videoId} onChange={handleInputChange} />
      </label>
      <VideoPlayer  videoId={videoId} />
    </div>
  );
};

export default App;
