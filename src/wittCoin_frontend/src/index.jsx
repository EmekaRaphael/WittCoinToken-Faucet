import ReactDOM from 'react-dom'
import React from 'react'
import BackgroundImg from './components/BackgroundImg';

const init = async () => { 
  ReactDOM.render(<BackgroundImg />, document.getElementById("root"));
}

init();


