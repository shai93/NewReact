import React from 'react';
import Loginuser from './Loginuser';
import Guestuser from './Guestuser';
import LogoutButton from '../loginbuttons/logoutbutton'
import LoginButton from '../loginbuttons/loginbutton'

class Islogged extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            "isLoggedIn": false
        }
    }   

     userLogIn = () => {
        this.setState({
            "isLoggedIn": !this.state.isLoggedIn
        })
    }


    userLoggedOut = () => {
        this.setState({

            "isLoggedIn": !this.state.isLoggedIn
        })
    }

    render() {
        if (this.state.isLoggedIn) {

            return (<div>
                <Loginuser></Loginuser>
                <LogoutButton onClick={this.userLogIn}></LogoutButton>
            </div>
            )
        }

        return (
            <div>
                <Guestuser></Guestuser>
                <LoginButton onClick={this.userLoggedOut}></LoginButton>
            </div >
        )
    }

}

export default Islogged;