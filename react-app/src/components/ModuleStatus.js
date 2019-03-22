import React, { Component } from "react";
import ModuleAPI from "../util/ModuleAPI";

class ModuleStatus extends Component {
  
  render() {
    const {
      module: { modelId, name, vendor },
      handleUpdate,
      callPatchAPI,
      state
    } = this.props;
    console.log('state', state);
    
    return (
      <div>
        <div>
          <h1 id="module-title">{name}</h1>
          <h4 id="vendor-title">{vendor}</h4>
          <h4 id="model-title">{modelId}</h4>
        </div>
        <h3 id="module-status">{state}</h3>
        <button onClick={() => handleUpdate()}>REFRESH STATE</button>

        <button onClick={() => callPatchAPI(state)}>
          Set to {state === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'}
        </button>
      </div>
    );
  }
}

export default ModuleStatus;
