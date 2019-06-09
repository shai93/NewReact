import React from 'react';
import Higher from '../Higher';

class Example extends React.Component {

    render() {
        console.log("in example", this.props)
        const {text, handleCount } = this.props
        return (
            <React.Fragment>
                    <h2>{text}}</h2>
                    <button onClick={this.props.handleCount}>Clicked {this.props.count}  times!!!!</button>
            </React.Fragment>
        )
    }
}

export default Higher(Example)


