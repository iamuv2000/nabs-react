import React,{useState} from 'react'
import './AddItem.css';
import { Button } from '@material-ui/core';

import CROSS from '../../../../assets/cross.png';

export default function AddItem(props) {

    function closeModal(){
        props.closeModal()
    }
    
    return (
        <div>
            <div className="background-blur"></div>
            <div className="add_item_modal">
                <h1>Add item</h1>
                <img src={CROSS} id="add_item_close" onClick={closeModal} height="40px" width="40px"></img>
                <div id="add_content">
                    <div id="add_content_img_container">
                        <div id="image_content"></div>
                    </div>
                    <div id="add_item_input">
                        <h1>Write description</h1>
                        <textarea id="add_item_description"></textarea>
                    </div>
                </div>
                <Button variant="outlined" id="add_button">Add</Button> 
            </div>
        </div>
    )
}
