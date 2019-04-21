import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

class Custom extends Component {

  constructor(props) {
    super(props)

    this.initialValue = {
      "name": "",
      "age": "",
      "no": ""
    }

    this.state = this.initialValue;

  }



  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialValue)
  }


  handleNo = (mobno) => {
    this.setState(mobno)

    console.log("custom state", this.state)
  }

  render() {
    const { name, age } = this.state;
    return (
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>age:</label>
        <input type="text" name="age" value={age} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.handleSubmit} />
        <ContactInfo handleNo={this.handleNo}></ContactInfo>
      </form>
    )
  }
}

export default Custom;