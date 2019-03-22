import React, { Component } from 'react';
import Workgroup from './Workgroup';
import TopBar from './TopBar';
import './App.scss';
import ModuleAPI from './util/ModuleAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modules: undefined,
      groupId: 'group1',
      selectedModules: []
    }
  }

  async componentDidMount() {
    const { groupId } = this.state;
    const mods = await ModuleAPI.getModulesAndStateCache(groupId);
    console.log(mods);
    
    this.setState({modules: mods });    
  }


  handleSelectAll = (groupId) => {
    const { modules } = this.state;
    this.setState({ selectedModules: Object.keys(modules[groupId]) });
  }

  handleChange = (type, input) => {
    if (type === 'select') {
      this.setState(prevState => ({selectedModules: [...prevState.selectedModules, [input]] }))

    }
  }
  render() {
    const { selectedModules, modules, groupId } = this.state
    console.log(modules);
    
    return (
      <div className="App">
        {modules !== undefined ? (
          <React.Fragment>
                 <TopBar  selectedModules={selectedModules} totalModules={ modules ? Object.keys(modules[groupId]): null} />
        <Workgroup groupId={groupId} modules={modules} handleSelectAll={this.handleSelectAll} handleChange={this.handleChange}/>
          </React.Fragment>
   
        ):
        <h1>Loading Spinner</h1>}
       
      </div>
    );
  }
}

export default App;
