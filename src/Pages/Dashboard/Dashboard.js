import React from 'react';
import './Dashboard.css';
import NABS from '../../assets/nabs.png';

//Component Imports
import Item from './component/Item/Item';
import UserItem from './component/UserItem/UserItem';

class Dashboard extends React.Component{
    
    render(){
        return(
            <div id="dashboard_page">
                <div id="logo_container_nav">
                    <img src={NABS} alt="nabs" height="70px" width="auto"/>
                    <button>CHAT!</button>
                    <button id="location_button">LOCATION!</button>
                    <button>LOG OUT!</button>
                </div>
                
                <div id= "content_screen">
                    <div id = "item_list">
                        <Item />
                    </div>
                    <div id = "user_item_list">
                        <table>
                            <th id="list_header">
                                MY LIST <span>+</span>
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