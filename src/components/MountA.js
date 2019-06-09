import React from 'react';
import Axios from 'axios';


class MountA extends React.Component{

 
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{

            this.setState({
                data:response.data,
            })

        }).catch(error=>{
            console.log(error)
        })
    
    }

    render(){
        return (
            <table>
                <thead>
                    <th>User Id</th>
                    <th>Title</th>
                </thead>
                <tbody>
                    {
                        this.state.data.map(item=>{
                            return (
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
    
}



export default MountA;