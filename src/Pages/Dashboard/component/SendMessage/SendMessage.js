import React from 'react'
import './SendMessage.css';
import { Button } from '@material-ui/core';
import cookie from 'react-cookies';
import CROSS from '../../../../assets/cross.png';
import dotenv from 'dotenv'
dotenv.config()

export default class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            content: ""
        };
    }
    
    //Handle input changes
    handleChange=prop=>event=>{
        this.setState({[prop]: event.target.value });
    }

    onSubmit = () => {
        fetch(`${process.env.REACT_APP_URL}/user/sendMessage`,{
            method: "post",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                content: this.state.content,
                uid_sender : cookie.load('NABS').uid,
                itemId : this.props.itemId
            })
        })
        .then(response => response.json())
        .then(data => {

        })
    }

    render(){
        return (
            <div>
                <div className="background-blur"></div>
                <div className="send_message_modal">
                    <h1>Send Message</h1>
                    <img src={CROSS} id="add_item_close" onClick={this.props.closeModal} height="40px" width="40px"></img>
                    <div id= "send_message_form">
                    <label className="input_labels">Your Name</label>
                    <input onChange={this.handleChange("name")} className="input_message" type="text"/>
                    <label className="input_labels">Your Email Id</label>
                    <input onChange={this.handleChange("email")} className="input_message" type="email"/>
                    <label className="input_labels">Additional Comments</label>
                    <textarea onChange={this.handleChange("content")} className="input_message" type="text"/>
                    <Button variant="outlined" id="send_message_button" onClick={this.onSubmit}>Send Message</Button> 
                    </div>
                </div>
            </div>
        )
    }
}
