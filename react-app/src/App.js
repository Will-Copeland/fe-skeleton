import React, { Component } from 'react';
import Workgroup from './Workgroup';
import TopBar from './TopBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Workgroup />
      </div>
    );
  }
}

export default App;
