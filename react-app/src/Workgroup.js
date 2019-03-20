import React, { Component } from 'react';

class Workgroup extends Component {
  render() {
    return (
      <div>
        <h1>Workgroup</h1>
        <div>
          <h2>Hardware</h2>
          <div id="sensor-modules-wrapper">
            <div id="sensor-modules-container">
              Sensor modules go here.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workgroup;
