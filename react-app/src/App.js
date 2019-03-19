import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="top-part">
          <small>Sensors are all on</small>
        </div>
        <div id="sensor-modules-wrapper">
          <div id="sensor-modules-container">
            Sensor modules go here.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
