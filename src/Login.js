import React from 'react';
import './Login.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return ( 
    <div className = "login">
        <div className = "login_container">
            <WhatsAppIcon/>
           <div className="login_text">
             <h2>Sign in to Whatsapp</h2>
           </div>
           <Button variant="contained" color="primary" onClick={signIn}>Sign in With Google</Button>
        </div > 
 
    </div>
    )
}

export default Login