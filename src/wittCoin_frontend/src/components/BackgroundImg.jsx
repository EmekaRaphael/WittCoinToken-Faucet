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
    flexDirection: 'column', // Change to column layout
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color on top of the background
    textAlign: 'center',
    position: 'relative', // Add position relative to the container
  };

  const textStyle = {
    // Adjust text styles as needed
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {props.loggedInPrincipal ? `Welcome, ${props.loggedInPrincipal}` : 'Welcome Guest'}
      </div>
      <App />
    </div>
  );
};

export default BackgroundImg;


// import React from 'react';
// import App from './App';

// const BackgroundImg = (props) => {
//   const backgroundImageUrl = 'url("bg_img.png")'; // Replace with the actual path to your image

//   const containerStyle = {
//     // Set other styles as needed
//     width: '100%',
//     height: '100%', // Adjust height as needed
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundImage: backgroundImageUrl,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white', // Text color on top of the background
//     textAlign: 'center',
//     position: 'relative', // Add position relative to the container
//   };

//   const textStyle = {
//     // Adjust text styles as needed
//     fontSize: '24px',
//     fontWeight: 'bold',
//     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={textStyle}>
//         User id "{props.userPrincipal}".
//       </div>
//       <App />
//     </div>
//   );
// };

// export default BackgroundImg;


// import React from 'react';
// import App from './App';

// const BackgroundImg = (props) => {
//   const backgroundImageUrl = 'url("bg_img.png")'; // Replace with the actual path to your image

//   const containerStyle = {
//     // Set other styles as needed
//     width: '100%',
//     height: '100%', // Adjust height as needed
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundImage: backgroundImageUrl,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white', // Text color on top of the background
//     textAlign: 'center',
//   };

//   return (
//     <div style={containerStyle}>
//       <App userPrincipal={props.loggedInPrincipal}/>
//     </div>
//   );
// };


// export default BackgroundImg;