import './App.css';
import Sidebar from './sidebar';
import Chat from './Chat';
import React, {useState, useEffect} from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import Login from './Login';
import {useStateValue} from './StateProvider';



function App() {
 
  const [message, setMessagees] = useState([]);
 // const [user, setUser] = useState(null);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    axios.get("/messages/sync").then(response => {
      setMessagees(response.data);
    })

  },[])

useEffect(()=>{
  const pusher = new Pusher('c9ccd92294a46b5688ef', {
    cluster: 'ap2',
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data) => {
    
    setMessagees([...message,data])
  });
  return () =>{
    channel.unbind_all();
    channel.unsubscribe();
  }

},[message]);
  
  console.log(message);
  return (

    <div className="app">
      {! user ? (
        <Login/>
      ) : (
        <div className="app_body">
        <Sidebar />
        <Chat message={message}/>
     </div>

      )}
  
   
    </div>
  );
}


export default App;
