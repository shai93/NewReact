import React from 'react';

let Thead = (props) => {
    let headObj=props.headObj;
    return (

        <thead>
            <th>{headObj.name}</th>
            <th>{headObj.age}</th>
            <th>{headObj.action}</th>
        </thead>
    );

}
export default Thead;