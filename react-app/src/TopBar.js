import React, { Component } from 'react';

class TopBar extends Component {

  
  render() {
    const { selectedModules, totalModules } = this.props
    return (
      <div id="top-part">
        <small>Number of sensors selected: {selectedModules.length}/{totalModules.length}</small>
      </div>
    );
  }
}

export default TopBar;
