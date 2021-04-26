import React from 'react';
import "./Login.css";
import LogoPurple from "./images/credo-logo-purple.png";
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in..
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message));
    };
    return (
        <div className = "login">
            <div className = "loginLogo">
            <img 
                src = {LogoPurple}
                // src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt = ""
            />
            </div>
            <Button type = "submit" onClick = {signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
