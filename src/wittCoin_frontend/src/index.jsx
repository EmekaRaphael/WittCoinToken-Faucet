import ReactDOM from 'react-dom'
import React from 'react'
import BackgroundImageComponent from './components/BackgroundImageComponent';

const init = async () => { 
  ReactDOM.render(<BackgroundImageComponent />, document.getElementById("root"));
}

init();


