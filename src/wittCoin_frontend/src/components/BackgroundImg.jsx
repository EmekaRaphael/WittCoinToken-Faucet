import React from 'react';
import App from './App';

const BackgroundImg = () => {
  const backgroundImageUrl = 'url("bg_img.png")'; // Replace with the actual path to your image

  const containerStyle = {
    // Set other styles as needed
    width: '100%',
    height: '100%', // Adjust height as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: backgroundImageUrl,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color on top of the background
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <App />
    </div>
  );
};


export default BackgroundImg;