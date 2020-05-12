import React from 'react';
import './LandingPage.css';
import NABS from '../../assets/nabs.png';

class LandingPage extends React.Component{
    toSignUp=()=>{
        window.location.href='/signup'
    }

    toLogin=()=>{
        window.location.href='/login'
    }


    render(){
        return(
            <div id="landing_page">
                <div id="logo_container_left">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                </div>
                <div id="landing_page_content">
                    <div id="landing_page_left">
        
                    </div>
                    <div id="landing_page_right">
                        <h1 id="landing_page_title">New Age Barter System</h1>
                        <p id="landing_page_text">
                            A one stop Platform for all your <br />
                            needs. Just login and start <br />
                            exchanging with people around you. <br/>
                            All you gotta do is maintain a list. <br />
                            Doesn't matter what you keep who is <br/>
                            judging.
                        </p>

                        <div id="landing_page_button_container">
                            <button className="login_buttons" onClick={this.toSignUp}>Sign Up</button>
                            <button className="login_buttons" onClick={this.toLogin}>Login</button>
                        </div>
                    </div>
                </div>
                <div id="landing_page_footer">
                    <div id="landing_page_footer_left">
                    
                    </div>
                    <div id="landing_page_footer_right">

                    </div>
                </div>
            </div>
        )
    }
}


export default LandingPage