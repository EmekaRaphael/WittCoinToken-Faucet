import React from 'react';
import App from './App';

const BackgroundImg = (props) => {
  const backgroundImageUrl = 'url("bg_img.png")';

  const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: backgroundImageUrl,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '20px',
    border: '6px double white',
    borderRadius: '8px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    marginTop: '3em',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {props.loggedInPrincipal ? (
          <>
            <span>Welcome User, Copy Id:</span>
            <br />
            <div style={{ display: 'inline-block' }}>
              {`${props.loggedInPrincipal}`}
            </div>
          </>
        ) : (
          'Welcome Guest'
        )}
      </div>
      <App />
    </div>
  );
};

export default BackgroundImg;

