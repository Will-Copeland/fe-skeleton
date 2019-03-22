import React, { Component } from 'react';
import Hardware from './Hardware';

class Workgroup extends Component {
  render() {
    const { handleChange, handleSelectAll, modules, groupId } = this.props
    return (
      <div>
        <h1>Workgroup</h1>
          <h3>Group Id: {groupId}</h3>
        <Hardware groupId={groupId} modules={modules} handleSelectAll={handleSelectAll} handleChange={handleChange}/>
      </div>
    );
  }
}

export default Workgroup;
