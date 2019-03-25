import React, { Component } from 'react';
import Header from './Header/Header'
import StepsViewer from './StepsViewer/StepsViewer';

class App extends Component {
  state = {
    currentBuilding: null
  }

  initModelBuilder = (modelID) => {
    if (!modelID) return false;

    const self = this;

    this.requestModelInfoByAPI(modelID).then(modelOptions => {
      self.setInitialState(modelOptions);
    })
  }

  requestModelInfoByAPI = (modelID) => {
    const API_PATH = 'https://next.json-generator.com/api/json/get/';

    return fetch(API_PATH + modelID).then((res) => res.json()).then(res => {
      return res.data;
    });
  }

  setInitialState = (modelData) => {
    const initialState = {
      currentBuilding: {
        steps: [
          {type: 'color', selected: false, ...modelData.color},
          {type: 'engine', selected: false, ...modelData.engine},
          {type: 'wheels', selected: false, ...modelData.wheels}
        ],
        results: {
          ...modelData.results
        },
        initialPrice: modelData.price,
        currentStep: null
      }
    };

    initialState.currentBuilding.currentStep = this.getUnselectedStep(initialState.currentBuilding.steps);

    this.setState(initialState);
  }

  getUnselectedStep = (steps) => {
    return steps.find((step) => step.selected === false )
  }

  renderStepsViewer = () => {
    const { currentBuilding } = this.state;

    if (!currentBuilding) {
      return <h1>Capa</h1>
    } else {
      return <StepsViewer currentStep={currentBuilding.currentStep} />
    }
  }

  render() {
    return (
      <div>
        <Header chooseModelHandler={this.initModelBuilder} />
        {
          this.renderStepsViewer()
        }
      </div>
    );
  }
}

export default App;
