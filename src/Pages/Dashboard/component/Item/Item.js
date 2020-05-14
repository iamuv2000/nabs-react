import React from 'react';
import './Item.css';
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
                {this.state.showSendMessage && <SendMessage itemId = {this.props.itemId} closeModal={()=>this.setState({showSendMessage : false})} />}
                <h4 id="name">Yuvraj</h4>
                <img src={"data:image/png;base64, " + this.props.file} id="img_placeholder"></img>
                <div id="item_content">
                    <h1 id="item_title">{this.props.itemName}</h1>
                    {this.props.itemDesc}
                </div>
                <div id="interact_icons_container">
                    <span id="interact_icons"><img onClick = {()=>this.setState({showSendMessage: true})} src={Chat} alt="Like" height="40px" width="40px"/> </span>
                </div>
            </div>
        )
    }
}

export default Item