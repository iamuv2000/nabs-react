import React from 'react';
import './LoginPage.css';
import NABS from '../../assets/nabs.png';

class Signup extends React.Component{
    render(){
        return(
            <div id="login_page">
                <div id="logo_container_right">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="login_page_content">
                    <div id="login_page_form">
                        <h1>Sign up</h1>
                        <input type = "email" placeholder="Email"/>
                        <input type = "password" placeholder="Password"/>
                        <br />
                        <a href="#">Forgot password?</a>
                        <button>Login</button>
                        <div id="auth_or">
                            <hr class="line"></hr>
                            <strong>OR</strong>
                            <hr class="line"></hr>
                        </div>   
                        <div id="auth_options_container">
                            <a href="/" className="auth_options">Home</a>
                            <strong>OR</strong>
                            <a href="/signup" className="auth_options">Sign Up</a>
                    </div>          
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup