import React, { Component } from "react";
import axios from "axios";
import Module from "./containers/Module";

class Hardware extends Component {

  renderModules = () => {
    const { handleChange, groupId, modules } = this.props
    const modArr = [];
    
    Object.keys(modules[groupId]).map(modId => {
      modArr.push(<Module id={modId} groupId={groupId} handleChange={handleChange} key={modules[groupId][modId].id} Module={modules[groupId][modId]} />);
    })
    return modArr;
  };

  render() {
    const { handleSelectAll } = this.props
    return (
      <div>
        <h2>Hardware</h2>
        <div id="sensor-modules-wrapper">
          <div id="sensor-modules-container">
          <button onClick={() => handleSelectAll('group1')}>Select All</button>
            Sensor modules go here.
            {this.renderModules()}
          </div>
        </div>
      </div>
    );
  }
}

export default Hardware;
