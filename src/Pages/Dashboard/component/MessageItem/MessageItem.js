import React from 'react';
import './MessageItem.css';
import Heart from '../../../../assets/icons8-heart-64.png';
import SendMessage from '../SendMessage/SendMessage';
import Chat from '../../../../assets/chat_icon.png';

class Item extends React.Component {

    constructor(props){
        super(props);
        this.state={
            showSendMessage: false
        };
    }
    

    render(){
        return(
            <div id= "item">
                <h4 id="name">{this.props.name} {this.props.email}</h4>
                <div id="item_content">
                    <h1 id="item_title">{this.props.itemName}</h1>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Item