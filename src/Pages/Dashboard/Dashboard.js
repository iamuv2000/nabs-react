import React from 'react';
import './Dashboard.css';
import NABS from '../../assets/nabs.png';
import cookie from 'react-cookies';

//Component Imports
import Item from './component/Item/Item';
import UserItem from './component/UserItem/UserItem';
import AddItem from './component/AddItem/AddItem';

//Import assets
import MessageIcon from '../../assets/chat_icon.png';
import LocationIcon from '../../assets/location_icon.png';
import AddButton from '../../assets/add_item.png';
import dotenv from 'dotenv'
dotenv.config()
class Dashboard extends React.Component{

    constructor(){
        super();
        this.state={
            showAddItem: false,
            items: [{
                file: "",
                itemDesc: "",
                itemId: "",
                itemName: "",
                location: ""
            }]
        };
    }
    
    componentWillMount() {
        fetch(`${process.env.REACT_APP_URL}/user/allItems`,{
            method: "post",
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                location : 'Pune'
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                items : data.payload.data
            })
            console.log(this.state.items)
        })
    }


    render(){


        return(
            <div id="dashboard_page">
                {this.state.showAddItem && <AddItem closeModal = {()=>this.setState({showAddItem:false})}/>}
                <div id="logo_container_nav">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                    <button id="message_button"><img src = {MessageIcon} alt="Message icon" height="20px" width="20px"/></button>
                    <button id="location_button"><img src = {LocationIcon} alt="Location icon" height="20px" width="20px"/> <span id="location_label">Location</span></button>
                    <button id="logout_button">Log out</button>
                </div>
                
                <div id= "content_screen">
                    <div id = "item_list">
                        {
                            this.state.items.map(item =>
                                <Item 
                                    itemName = {item.itemName}
                                    itemDesc = {item.itemDesc}
                                    file = {item.file}
                                />)
                        }
                    </div>
                    <div id = "user_item_list">
                        <table>
                            <th id="list_header">
                                MY LIST <span onClick={()=>this.setState({showAddItem: true})}><img src={AddButton} alt="add button" height="30px" width="30px"/></span>
                            </th>
                            <tbody>
                                <UserItem />
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard