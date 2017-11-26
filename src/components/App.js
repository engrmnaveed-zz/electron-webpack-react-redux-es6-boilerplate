import '../assets/css/App.css';
import React, { Component } from 'react';
const WebView = require('react-electron-web-view');


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Boiler Plate!</h1>
        <ul>
          <li>Electron</li>
          <li>WebPack</li>
          <li>React</li>
          <li>Redux</li>
          <li>ES6</li>  
        </ul>
      </div>
    );
  }
}

export default App;
