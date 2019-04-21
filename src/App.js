import React, { Component } from 'react';
import './App.css';
import Islogged from './components/login/Islogged';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Islogged></Islogged>
      </div>
    );
  }
}

export default App;
