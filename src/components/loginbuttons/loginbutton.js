import React from 'react';


let LoginButton = (props) => {
    return <button onClick={()=>{props.onClick()}}>Log In</button>
}



export default LoginButton;