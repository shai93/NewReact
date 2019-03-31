import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Table from './Table';
import Custom from './Custom';




class App extends Component {


  state = {
    "customData": [
      {
        "name": "Rahul",
        "age": "25"
      },
      {
        "name": "Vishal",
        "age": "15"
      },
      {
        "name": "Rohini",
        "age": "35"
      },
      {
        "name": "Akshay",
        "age": "45"
      }
    ]
  }


  handleDelete = (index) => {
    this.setState({
      "customData": this.state.customData.filter((item, i) => {
        return i !== index;
      })
    })
  }


  render() {

    let headObj = {
      "name": "Name",
      "age": "AGE",
      "action": "Action"
    }

    let { customData } = this.state;

    return (
      <div className="App">
        <Table custombody={customData} headObj={headObj} handleAction={this.handleDelete}/>
        <Custom />
      </div>
    );
  }
}

export default App;
