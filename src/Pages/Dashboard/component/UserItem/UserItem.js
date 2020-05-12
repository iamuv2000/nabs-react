import React from 'react';
import './UserItem.css'

const UserItem = () => {
    return(
        <tr>
            <td>
                <div id="user_item">
                    <div id="img_content"></div>
                    <h2 id="user_item_label">Samsung S10</h2>
                    <div id="interaction_icon_container">
                        DELETE
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserItem