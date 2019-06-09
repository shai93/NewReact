import React from 'react';



const Higher = (Originalcomponent)=>{

    return (class NewComponent extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                counter: 0
            }
        }
    
        handleChange = (e) => {
            this.setState({
                counter : this.state.counter +1,
            })
        }

        render(){
            return <Originalcomponent count={this.state.counter} handleCount={this.handleChange} {...this.props}></Originalcomponent>
        }
    })

}


export default Higher;