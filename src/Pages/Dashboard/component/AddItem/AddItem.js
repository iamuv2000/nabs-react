import React,{useState} from 'react'
import './AddItem.css';
import { Button } from '@material-ui/core';
import cookie from 'react-cookies';
import CROSS from '../../../../assets/cross.png';
import dotenv from 'dotenv'
dotenv.config()

export default class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            file: '',
            imagePreviewUrl: false,
            itemName: '',
            location: '',
			itemDesc: '',
			expectedPrice: '',
			category: ''
        };
    }

    onSubmit = () => {
        var uid = cookie.load('NABS').uid
        console.log(uid);
        let formData = new FormData();
        formData.append('uid', uid);
        formData.append('img_file', this.state.file,this.state.file.name);
        formData.append('itemName',this.state.itemName)   
        formData.append('location',this.state.location)   
		formData.append('itemDesc',this.state.itemDesc)   
		formData.append('expectedPrice',this.state.expectedPrice)   
		formData.append('category',this.state.category)   

        fetch(`${process.env.REACT_APP_URL}/item/create`,{
            method: "post",
            body:formData
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log(data)
            window.alert("Successfully submitted item for barter!")
        })
    }

    //Handle Image upload
    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }


       //Handle input changes
        handleChange=prop=>event=>{
            this.setState({[prop]: event.target.value });
        }


      render(){
        return (
            <div>
                <div className="background-blur"></div>
                <div className="add_item_modal">
                    <h1>Add item</h1>
                    <img src={CROSS} id="add_item_close" onClick={this.props.closeModal} height="40px" width="40px"></img>
                    <div id="add_content">
                        <div id="add_content_img_container">
                            {
                                this.state.imagePreviewUrl
                                ?
                                <img src={this.state.imagePreviewUrl} id="image_content"></img>
                                :
                                <div id="image_content_none">No Image to display</div>

                            }
                            <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)}/>
                        </div>
                        <div id="add_item_input">
                            <h1>Fill Item details</h1>
                            <input id="add_item_field" onChange={this.handleChange("itemName")} type="text" placeholder="Item Name"/>
                            <input id="add_item_field" onChange={this.handleChange("location")} type="text"  placeholder="Location"/>
							<br/>
							<input id="add_item_field" onChange={this.handleChange("expectedPrice")} type="text" placeholder="Expected Price"/>
							<input id="add_item_field" onChange={this.handleChange("category")} type="text" placeholder="Categories (Comma seperated)"/>
                            <textarea onChange={this.handleChange("itemDesc")} id="add_item_description"></textarea>
                        </div>
                    </div>
                    <Button variant="outlined" id="add_button" onClick={this.onSubmit}>Add</Button> 
                </div>
            </div>
        )
      }
}
