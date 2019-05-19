import React,{Component} from 'react'


class SelectExample extends Component{
    constructor(props){
        super(props)
        this.state={
            'value':'Mango'
        }
    }

    onOptionChange=(event)=>{
        this.setState({
            'value':event.target.value
        })
    }

    onOptionClick=()=>{
        alert(this.state.value)
    }

    render(){
        return(
            <form>
                <select value={this.state.value} onChange={this.onOptionChange}>
                    <option value="Orange">Orange</option>
                    <option value="Mango">Mango</option>
                    <option value="Banana">Banana</option>
                </select>
                <input type="button" value="Submit" onClick={this.onOptionClick}></input>
            </form>
        )
    }
}

export default SelectExample;