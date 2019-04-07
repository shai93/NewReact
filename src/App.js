import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


// import Table from './Table';
// import Custom from './Custom';

import LifeCycleHooks from './lifeCycleHooks';



class App extends Component {


  state = {
    "customData": [
      // {
      //   "name": "Rahul",
      //   "age": "25"
      // },
      // {
      //   "name": "Vishal",
      //   "age": "15"
      // },
      // {
      //   "name": "Rohini",
      //   "age": "35"
      // },
      // {
      //   "name": "Akshay",
      //   "age": "45"
      // }
    ]
  }


  handleDelete = (index) => {
    this.setState({
      "customData": this.state.customData.filter((item, i) => {
        return i !== index;
      })
    })
  }

  alertName = (name) => {
    alert(name);
  }


  handleSubmit = (character) => {

    //rest operator
    //x = [1,3,5]
    this.setState({
      customData: [...this.state.customData, character]
    })
  }


  render() {

    let headObj = {
      "name": "Name",
      "age": "AGE",
      "no": "Mobile No",
      "action": "Action",
      "action2": "Action2"
    }

    let { customData } = this.state;

    return (
      <div className="App">
        {/* <Table custombody={customData} headObj={headObj} handleAction={this.handleDelete} alertName={this.alertName} />
        <Custom handleSubmit={this.handleSubmit} /> */}
        <LifeCycleHooks></LifeCycleHooks>
      </div>
    );
  }
}

export default App;
