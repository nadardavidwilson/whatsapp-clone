import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Sidebarchat from "./Sidebarchat";
import {useStateValue} from './StateProvider';


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    
    return (
        
        <div className="sidebar">
            <div className="sidebar_header">
                
                <Avatar src= {user?.photoURL} />
                <div className="sidebar_headerright ">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
                

            </div>
               <div className="sidebar_chats">
                    <Sidebarchat/>
                    <Sidebarchat/>
                    <Sidebarchat/>
                    <Sidebarchat/>
                    <Sidebarchat/>
                    <Sidebarchat/>

                </div> 
        </div>
    )
    
}

export default Sidebar;
