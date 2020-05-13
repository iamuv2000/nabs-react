import React from 'react';
import './Signup.css';
import NABS from '../../assets/nabs.png';
import { Button } from '@material-ui/core';
import googleIcon from '../../assets/icons8-google.svg';
import firebase from '../../utils/firebase';
import cookie from 'react-cookies';
import dotenv from 'dotenv'
dotenv.config()


class Signup extends React.Component{

    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            loaded: false
        };
    }


     //Create account with email and password
     newAccount=()=>{
        this.setState({loading:true})
        //Firebase auth
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data)=>{
    
            //Call Rest API
            fetch(`${process.env.REACT_APP_URL}/user/create`,{
                method: "post",
                headers: {
                    'Content-type':'application/json',
                    'Authorization': "Bearer "+data.user.uid
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email
                })
            }).then((data1)=>{
                return data1.json();
            }).then((data1)=>{
                if (data1.statusCode !== 200) {
                    this.setState({loading:false})
                    alert(data1.payload.msg)
                } else {
                    window.alert("Account created!")
                    window.location.href="/dashboard"
                    cookie.save('NABS',{uid: data.user.uid, email: data.user.email},{path:'/'});
                }
            })
        })
        .catch(function(error) {
            console.log(this.state.TeacherError)
            this.setState({TeacherError: "User already exists!"})
        }.bind(this));
    }


    //Set states!
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
            <div id="signup_page">
                <div id="logo_container_left">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="signup_page_content">
                    <div id="signup_page_form">
                        <h1 id="signup_heading">Sign up</h1>
                        <input type = "text" placeholder="Name" className="signup_input" onChange={this.handleChange('name')}/>
                        <input type = "email" placeholder="Email" className="signup_input" onChange={this.handleChange('email')}/>
                        <input type = "password" placeholder="Password" className="signup_input" onChange={this.handleChange('password')}/>
                        <input type = "password" placeholder="Confrim password" className="signup_input" onChange={this.handleChange('confirmPassword')}/>
                        <div id="signup_forgot_password_container">
                            <a href="#" id="signup_forgot_password">Forgot password?</a>
                        </div>
                        <br />
                        <br />
                        <button id="signup_page_signup_button" onClick={this.newAccount} >Sign up</button>
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
                            <a href="/login" className="auth_options">Login</a>
                    </div>          
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup