import React,{useState} from 'react'
import './AddItem.css'

export default function AddItem(props) {

    function closeModal(){
        props.closeModal()
    }
    
    return (
        <div>
            <div className="background-blur"></div>
            <div className="add_item_modal">
                <h1>Add item</h1>
                <span id="add_item_close" onClick={closeModal}>CROSS</span>
                <div id="add_content">
                    <div id="add_content_img_container">
                        <div id="image_content"></div>
                    </div>
                    <div id="add_item_input">
                        <h1>Write description</h1>
                        <textarea id="add_item_description"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
