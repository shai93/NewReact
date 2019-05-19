import React from 'react';


class Example extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "name":"Hello",
            "comment":"Happy Sunday",
            "dropdown":"Orange"
        }

    }
    

    handleChange = (event)=>{
        let elname = event.target.name
        let elvalue = event.target.value

        if( event.target.value
            )
       
        if(event.target.type == 'select-one'){
            console.log('sss')
        }


        this.setState({
            [elname]:elvalue
        })
    }

    handleSubmit = (event)=>{
        
    }

    render(){
        return (
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>Comment:</label>
                <textarea value={this.state.comment} name="comment" onChange={this.handleChange}></textarea>
                <label>Dropdown:</label>
                <select value={this.state.dropdown} onChange={this.handleChange} name="dropdown">
                    <option value="Orange">Orange</option>
                    <option value="Mango">Mango</option>
                    <option value="Banana">Banana</option>
                </select>
                <input type="button" value="Submit" onClick={this.handleSubmit}/>
            </form>
        )
    }
    
}


export default Example;