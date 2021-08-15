import React, {useState} from 'react';
import "./chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
import {useStateValue} from './StateProvider';


function Chat({message}) {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const timestamp =  Date().toLocaleString();

        const sendName = async (e) =>{
            e.preventDefault();
        }
        const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new",{
            message: input,
            name: user?.displayName,
            timestamp: timestamp,
            received: true,

        });
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>

                     
            <div className="chat_header_info">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div> 
            <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
            </div> 

            </div>

            <div className="chat_body">
                {message.map(mess => (
                    
                <p className={`chat_message ${mess.received  && "chat_reciver" }`}>
                   
                    <span className="chat_name">{mess.name}</span> 
                    {mess.message}
                    <span className="chat_timestamp">{mess.timestamp}</span>
                    
                </p>

                ))}
               

            </div> 
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input 
                    value = {input}
                    onChange = { (e) =>
                         setInput(e.target.value)
                                }
                    
                    placeholder="Type a message" type="text"/>
                    
                    <button onClick = {sendMessage} type="submit">Send a message</button>
                    
                    
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat;
