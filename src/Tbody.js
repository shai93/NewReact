import React from 'react';


let Tbody = (props) => {

    let custombody = props.custombody;
// ()=>{ props.handleAction(index)}
    let rows = custombody.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>{props.handleAction(index)}}>Delete</button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>

}


export default Tbody;