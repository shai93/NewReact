import React from 'react';
import Axios from 'axios';

class UpdateA extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            userId:"",
            title:""
        }
        console.log('constructor')
    }

    handleChange=(event) => {
        this.setState({
        userId: event.target.value
        })
      }

      handleChange1=(event) => {
        this.setState({
            title: event.target.value
        })
      }


      handleSubmit=()=>{
          console.log('this.state', this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(response=>{

         console.log(response)
        }).catch(error=>{
            console.log(error)
        })
      }

    
    render(){
        return (
            <form>
                <label>UserId: </label>
                <input type="text" name="userId"  onChange={this.handleChange} />
                <label>Title: </label>
                <input type="text" name="title" onChange={this.handleChange1} />
                <input type="button" value="Submit" onClick={this.handleSubmit} />
            </form>
            

        )
    }
    
}


export default UpdateA;