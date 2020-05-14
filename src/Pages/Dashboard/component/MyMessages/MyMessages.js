import React from 'react'
import './MyMessages.css';
import MessageItem from '../MessageItem/MessageItem'
import cookie from 'react-cookies';
import CROSS from '../../../../assets/cross.png';
import dotenv from 'dotenv'
dotenv.config()

export default class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            messages: [
                {
                    name: "",
                    email: "",
                    content: "",
                    itemName: ""
                }
            ]
        };
    }
    
    //Handle input changes
    handleChange=prop=>event=>{
        this.setState({[prop]: event.target.value });
    }

    componentWillMount = () => {
        console.log(cookie.load('NABS').uid)
        fetch(`${process.env.REACT_APP_URL}/user/myMessages`,{
            method: "post",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                uid :  cookie.load('NABS').uid
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState(
                { messages : data.payload.data }
            )

            console.log(this.state.messages)
        })
    }

    render(){
        return (
            <div>
                <div className="background-blur"></div>
                <div className="my_message_modal">
                    <h1>My Message</h1>
                    <img src={CROSS} id="add_item_close" onClick={this.props.closeModal} height="40px" width="40px"></img>
                    <div id= "my_message_form">
                    {
                        this.state.messages.map(item =>
                            <MessageItem 
                                name = {item.name}
                                email = {item.email}
                                content = {item.content}
                                itemName = {item.itemName}
                            />)
                    }
                    </div>
                </div>
            </div>
        )
    }
}
