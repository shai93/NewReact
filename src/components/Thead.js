import React from 'react';

let Thead = (props) => {
    let headObj=props.headObj;
    return (

        <thead>
            <th>{headObj.name}</th>
            <th>{headObj.age}</th>
            <th>{headObj.no}</th>
            <th>{headObj.action}</th>
            <th>{headObj.action2}</th>
        </thead>
    );

}
export default Thead;