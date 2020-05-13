import React from 'react';
import './LoginPage.css';
import NABS from '../../assets/nabs.png';
import { Button } from '@material-ui/core';
import googleIcon from '../../assets/icons8-google.svg';
import firebase from '../../utils/firebase';
import cookie from 'react-cookies';
import dotenv from 'dotenv'
dotenv.config()

class Login extends React.Component{
    
    //Constructor
    constructor(){
        super();
        this.state = {
            loaded: false,
            error: '',
            email: '',
            password: '',
        }
    }

    //Log in with email
    login=()=>{
        //Signing in user using firebase auth
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((data)=>{
            //Cookie settings
            const expires = new Date();
            expires.setDate(Date.now() + 1000 * 60 * 60 * 1);
            cookie.save('NABS',{uid: data.user.uid, email: data.user.email},{path:'/'});
            window.location.href = "/dashboard";
        })
        .catch((e)=>{
            console.log(e)
            //Invalid credentials!
            this.setState({error:"Invalid credentials!"})
       });
    }

    //Handle input changes
    handleChange=prop=>event=>{
        this.setState({[prop]: event.target.value });
    }

    //Google signup
    signIn = async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'en';
        var that = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
            that.setState({loaded:false})
            if (result.credential) {
            
            }
            // The signed-in user info.
            var user = result.user;
            console.log(result)
            fetch(`${process.env.REACT_APP_URL}/user/create`,{
                method: "post",
                headers: {
                    'Content-type':'application/json',
                    'Authorization': "Bearer "+user.uid
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                })
            })
            .then(response => response.json())
            .then(data => {
                const expires = new Date()
                expires.setDate(Date.now() + 1000 * 60 * 60 * 1)
                cookie.save('NABS',{uid: user.uid, email: user.email},{path:'/'});
            })
            .then(() => {
                window.location.href = "/dashboard";
                that.setState({loaded:true})
            })
            .catch(e => {
                that.setState({loaded:true})
            });
          }).catch(function(error) {
              console.log(error)
            that.setState({loaded:true})
          }.bind(this));
    }

    render(){
        return(
            <div id="login_page">
                <div id="logo_container_right">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="login_page_content">
                    <div id="login_page_form">
                        <h1 id="signup_heading">Log in</h1>
                        <input type = "email" onChange={this.handleChange('email')} placeholder="Email" className="signup_input"/>
                        <input type = "password" onChange={this.handleChange('password')} placeholder="Password" className="signup_input"/>
                        <br />
                        <div id="signup_forgot_password_container">
                            <a href="#" id="signup_forgot_password">Forgot password?</a>
                        </div>
                        <br />
                        <br />
                        <button id="signup_page_signup_button" onClick={this.login}>Login</button>
                        <Button onClick={this.signIn} variant="outlined" className="googleButton" style={{borderWidth:2, borderColor:"black", borderRadius:5}}>
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


export default Login