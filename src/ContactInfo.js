import React, { Component } from 'react';

class ContactInfo extends Component {
    constructor(props) {
        super(props)

        this.initialValue = {
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
    
    handleSubmit = (mobno) => {
        console.log("inside contactinfo", this.state)
        this.props.handleNo(this.state);
        this.setState(this.initialValue)
      }
    
    render() {
        const { no } = this.state;
        return (
            <div>
                <label>Mobile No:</label>
                <input type="text" name="no" value={no} onChange={this.handleChange} />
                <input type="button" value="submit2" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default ContactInfo;