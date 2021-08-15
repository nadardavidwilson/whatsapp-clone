import React from 'react';
import "./sidebarchat.css";
import { Avatar } from '@material-ui/core';

function Sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat_info">
                <h1>Room name</h1>
                <p>This is last message</p>
            </div>
        </div>
    )
}

export default Sidebarchat;
