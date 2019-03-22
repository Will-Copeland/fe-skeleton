import React, { Component } from "react";
import ModuleStatus from "../components/ModuleStatus";
import axios from "axios";
import ModuleAPI from "../util/ModuleAPI";

class Module extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      localState: null
    };
  }

  handleUpdate = async () => {
    const {
      groupId,
      id
    } = this.props;
    console.log(id);
    
    const newState = await ModuleAPI.updateModuleState(groupId, id);
    console.log('NESTATE', newState);
    
    this.setState({ localState: newState });
  };

   callPatchAPI  = (state) => {
    const {
      id,
      groupId
    } = this.props;
    const newState = state === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    console.log('To Be state', newState);
    
     ModuleAPI.setModuleState(groupId, id, newState)
    // I'm out of time.....
    setTimeout(() => {
      this.handleUpdate();
    }, 500)

  }


  handleSelect = () => {
    const { handleChange, Module } = this.props;

    this.setState({ selected: true });
    handleChange("select", Module.id);
  };

  render() {
    const { localState } = this.state;
    const { Module } = this.props;
    // console.log(localState);
    
    return (
      <div>
        <img src={Module.thumbnailUrl} alt="module pic" />
        <ModuleStatus state={localState ? localState : Module.moduleState } handleUpdate={this.handleUpdate} callPatchAPI={this.callPatchAPI} module={Module} />
        <button onClick={() => this.handleSelect()}>SELECT</button>
      </div>
    );
  }
}

export default Module;
