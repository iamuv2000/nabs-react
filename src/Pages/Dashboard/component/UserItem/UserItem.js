import React from 'react';
import './UserItem.css';
import DELETE from '../../../../assets/icons8-delete-bin-64.png';

const UserItem = (props) => {
    return(
        <tr>
            <td>
                <div id="user_item">
                    <img src={"data:image/png;base64, " + props.file} id="img_content"></img>
                    <h2 id="user_item_label">{props.itemName}</h2>
                    <div id="interaction_icon_container">
                        <img src={DELETE} alt="delete" height="20px"/>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserItem