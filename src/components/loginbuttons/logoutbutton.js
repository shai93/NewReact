import React from 'react';

let LogoutButton = (props) => {
    return <button onClick={()=>{props.onClick()}}>Log Out</button>
}



export default LogoutButton;