import React from 'react';
import './Item.css';
import Heart from '../../../../assets/icons8-heart-64.png';
import Chat from '../../../../assets/chat_icon.png';

const Item = () => {
    return(
        <div id= "item">
            <h4 id="name">Yuvraj</h4>
            <div id="img_placeholder"></div>
            <div id="item_content">
                <h1 id="item_title">iPhone 6s</h1>
                iPhone 6s Rose gold, 64GB, Brand new condition! Barter for a smasung phone ONLY!
            </div>
            <div id="interact_icons_container">
                <span id="interact_icons"><img src={Heart} alt="Like" height="40px" width="40px"/>  <img src={Chat} alt="Like" height="40px" width="40px"/> </span>
            </div>
        </div>
    )
}

export default Item