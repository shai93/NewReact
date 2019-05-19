import React from 'react';
import Loginuser from './Loginuser';
import Guestuser from './Guestuser';
import LogoutButton from '../loginbuttons/logoutbutton';
import LoginButton from '../loginbuttons/loginbutton';
import './Islogged.css'


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
            let classValue1 = "loginheader1"
            let classValue2 = "loginheader2"
            return (
            <div>
              
                {
                // 5>4 &&  <h1 className={classValue1}>Login Action</h1>
                5>4? <h1 className={classValue1}>Login Action</h1>:<h1 className={classValue2}>Login Action</h1>
                }



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



// forms,fragments,childrens,higher order components,ref