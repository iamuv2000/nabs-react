import React from 'react';
import './LoginPage.css';
import NABS from '../../assets/nabs.png';
import { Button } from '@material-ui/core';
import googleIcon from '../../assets/icons8-google.svg';


class Signup extends React.Component{
    render(){
        return(
            <div id="login_page">
                <div id="logo_container_right">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="login_page_content">
                    <div id="login_page_form">
                        <h1 id="signup_heading">Log in</h1>
                        <input type = "email" placeholder="Email" className="signup_input"/>
                        <input type = "password" placeholder="Password" className="signup_input"/>
                        <br />
                        <div id="signup_forgot_password_container">
                            <a href="#" id="signup_forgot_password">Forgot password?</a>
                        </div>
                        <br />
                        <br />
                        <button id="signup_page_signup_button">Login</button>
                        <Button variant="outlined" className="googleButton" style={{borderWidth:2, borderColor:"black", borderRadius:5}}>
                            <img src={googleIcon} alt="gicon" className="gicon" height="24" width="24"/>
                            Continue with Google
                        </Button> 
                        <div id="auth_or">
                            <hr class="line"></hr>
                            <strong>OR</strong>
                            <hr class="line"></hr>
                        </div>   
                        <div id="auth_options_container">
                            <a href="/" className="auth_options">Home</a>
                            <strong>|</strong>
                            <a href="/signup" className="auth_options">Sign Up</a>
                    </div>          
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup