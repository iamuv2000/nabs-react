import React from 'react';
import './Signup.css';
import NABS from '../../assets/nabs.png';

class Signup extends React.Component{
    render(){
        return(
            <div id="signup_page">
                <div id="logo_container_left">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="signup_page_content">
                    <div id="signup_page_form">
                        <h1>Sign up</h1>
                        <input type = "email" placeholder="Email"/>
                        <input type = "password" placeholder="Password"/>
                        <input type = "password" placeholder="Confrim password"/>
                        <br />
                        <a href="#">Forgot password?</a>
                        <button>Sign up</button>
                        <div id="auth_or">
                            <hr class="line"></hr>
                            <strong>OR</strong>
                            <hr class="line"></hr>
                        </div>   
                        <div id="auth_options_container">
                            <a href="/" className="auth_options">Home</a>
                            <strong>OR</strong>
                            <a href="/login" className="auth_options">Login</a>
                    </div>          
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup