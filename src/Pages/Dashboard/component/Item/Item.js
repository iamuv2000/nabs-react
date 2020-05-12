import React from 'react';
import './Item.css'

const Item = () => {
    return(
        <div id= "item">
            <h4 id="name">Yuvraj</h4>
            <div id="img_placeholder"></div>
            <div id="item_content">
                <h1>iPhone 6s</h1>
                iPhone 6s Rose gold, 64GB, Brand new condition! Barter for a smasung phone ONLY!
            </div>
            <div id="interact_icons_container">
                <span id="interact_icons">HEART  CHAT</span>
            </div>
        </div>
    )
}

export default Item