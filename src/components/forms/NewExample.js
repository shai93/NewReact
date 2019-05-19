import React,{Component} from 'react'


class NewExample extends Component{
    constructor(props){
        super(props)
            this.state={
                'value':"Address: "
            }
    }

    onAddressChange=(event)=>{
        this.setState({
                'value':event.target.value
            }
        )
        console.log(this.state.value)
    }

    onSubmitBtnClick=()=>{
        alert(this.state.value)
    }


    render(){
        return(
            <form>
                <textarea value={this.state.value} onChange={this.onAddressChange}></textarea>
                <input type="button" value="Submit" onClick={this.onSubmitBtnClick}></input>
            </form>
        )
    }
}

export default NewExample;