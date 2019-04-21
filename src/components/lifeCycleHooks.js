import React, { Component } from 'react';



class LifeCycleHooks extends Component {



    constructor(props) {
        super(props);
        console.log("constructor")

        this.state = {
            "text": "world"
        }
    }


    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        //api respose data
        //this.setstate(data)
        console.log("componentDidMount")
    }


    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentShouldUpdate() {
        return true;
    }

    handleSubmit = () => {
        this.setState({
            "text": "Aptech"
        })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.text}</h1>
                <input type="button" value="Click here" onClick={this.handleSubmit} />
            </div>
        )
    }
}


export default LifeCycleHooks;