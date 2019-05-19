import React from 'react';

// context - pass data directly to the child in component tree


const MyContext = React.createContext()

//Provider and consumer

const Child = (props) => {
    return <Subchild />
}



const Subchild = (props) => {
    return (
        <MyContext.Consumer>
            {
                (context) => (
                    <button onClick={()=>{context()}}>Add Counter</button>
                )

            }
        </MyContext.Consumer>
    )
}


class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'counter': 0
        }
    }

    handleCounter = (event) => {
        this.setState({
            'counter': this.state.counter + 1
        })
    }

    render() {
        return (
            <MyContext.Provider value={this.handleCounter}>
                <p>Counter is: - {this.state.counter}</p>
                <Child />
            </MyContext.Provider>
        )
    }

}

export default Example;