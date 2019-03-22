import axios from "axios";

class ModuleAPI {
  constructor() {
    this.modules = {};
  }

  async _getAllModules(groupId) {
    await axios
      .get("http://sensors.modecollab.com/api/sensorModules", {
        params: {
          groupId: groupId
        }
      })
      .then(data => {          
        this.modules[groupId] = {};
        for (let i=0; i < data.data.length; i++) {
            this.modules[groupId][data.data[i].id] = {
                name: data.data[i].name,
                model: data.data[i].modelId,
                thumbnailUrl: data.data[i].thumbnailUrl
              };
        }
        this._getAllModuleState(groupId);
      });
  }

   async _getAllModuleState(groupId) {
     await axios
      .get("http://sensors.modecollab.com/api/sensorModuleStates", {
        params: {
          groupId: groupId
        }
      })
      .then(data => {
        for (let i=0; i < data.data.length; i++) {
            this.modules[groupId][data.data[i].moduleId]['moduleState'] = data.data[i].moduleState
        }
        
        return this.modules[groupId]
      });
  }

   async getModulesAndStateCache(groupId) {
    if (this.modules[groupId]) {
        return this.modules[groupId];
    }

    await this._getAllModules(groupId);
    await this._getAllModuleState(groupId);


     return this.modules;
  }

  updateModuleState(groupId, id) {
    axios
      .get(`http://sensors.modecollab.com/api/sensorModuleStates/${id}`)
      .then(data => {
        this.modules[groupId][id]["moduleState"] =
          data.data.moduleState
      });      
      
      const state = this.modules[groupId][id]["moduleState"]
      return state;
  }

  setModuleState(groupId, id, newState,) {
    //   Checks for out-of-sync module states
    if (newState === this.updateModuleState(groupId, id)) {
      throw new Error("State Conflict");
    }
    axios
      .patch(`http://sensors.modecollab.com/api/sensorModuleStates/${id}`, {
        state: newState
      })
      .then(data => {
        return this.updateModuleState(groupId, id);
      })
      .catch(e => {
        alert(e);
      });
  }

  async loadModules(groupId) {
    await this._getAllModules(groupId);
    await this._getAllModuleState(groupId);

    return this.modules;
  }
}

export default new ModuleAPI();