import React from 'react';
import './App.css';
import Example from './components/examples/example';
import Hovered from './components/Hovered';
import MountA from './components/MountA';
import UpdateA from './components/UpdateA';
// composition

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }


  static getDerivedStateFromError = (error) => {
    this.setState({
      error:true
    })
  }

  componentDidCatch(error, info){
    console.log("ERRRRR", error)
    console.log("INNNFO", info)
  }

  render() {


    if(this.state.error){
      return(<h1>Something is wrong</h1>)
    }

    return (
      <div className="App">
        {/* <Example text="Hello World"/>
      <Hovered/> */}
        <UpdateA></UpdateA>
      </div>
    );
  }
}

export default App;
