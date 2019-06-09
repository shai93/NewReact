import React from 'react'
import Higher from './Higher';


class Hovered extends React.Component {
    
    render() {
        return (
            <h2 onMouseOver={this.props.handleCount}>Hovered {this.props.count}  times!!!!</h2>
            )
    }
}


export default Higher(Hovered)