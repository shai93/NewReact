import React, { Component } from 'react';
import './Table.css';

import Tbody from './Tbody';
import Thead from './Thead';

class Table extends Component {

    render() {

        let custombody = this.props.custombody;
        let headObj = this.props.headObj;
        let { handleAction } = this.props;


        return (
            <table>
                <Thead headObj={headObj} />
                <Tbody custombody={custombody} handleAction={handleAction} />
            </table>
        )
    }
}


export default Table;