import React from 'react';
import './Item.css';
import Heart from '../../../../assets/icons8-heart-64.png';
import Chat from '../../../../assets/chat_icon.png';

const Item = (props) => {
    return(
        <div id= "item">
            <h4 id="name">Yuvraj</h4>
            <img src={"data:image/png;base64, " + props.file} id="img_placeholder"></img>
            <div id="item_content">
                <h1 id="item_title">{props.itemName}</h1>
                {props.itemDesc}
            </div>
            <div id="interact_icons_container">
                <span id="interact_icons"><img src={Heart} alt="Like" height="40px" width="40px"/>  <img src={Chat} alt="Like" height="40px" width="40px"/> </span>
            </div>
        </div>
    )
}

export default Item