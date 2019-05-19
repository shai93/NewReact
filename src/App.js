import React  from 'react';
import './App.css';
import Example from './components/examples/example';
// composition

class App extends React.Component {

  render() {
    
    return (
      <div className="App">
      <Example/>
      </div>
    );
  }
}

export default App;
