import React from 'react';
import './UserItem.css';
import DELETE from '../../../../assets/icons8-delete-bin-64.png';

const UserItem = () => {
    return(
        <tr>
            <td>
                <div id="user_item">
                    <div id="img_content"></div>
                    <h2 id="user_item_label">Samsung S10</h2>
                    <div id="interaction_icon_container">
                        <img src={DELETE} alt="delete" height="20px"/>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserItem