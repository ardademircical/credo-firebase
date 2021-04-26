import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LogoWhiteSmoke from './images/credo-logo-white.png';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from './reducer';
import { BrowserRouter, Route, } from 'react-router-dom'
// import SvgIcon from "@material-ui/core/SvgIcon";
// import AddIcon from '@material-ui/icons/Add';
// import ForumIcon from '@material-ui/icons/Forum';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    const [{ user }, dispatch] = useStateValue();


    const history = useHistory();

    const handleSubmitHome = e => {
        e.preventDefault();
        history.replace("/");
    };

    const handleSubmitCampaign = e => {
        e.preventDefault();
        history.push("/campaign-manager");
    };

    const handleSubmitWallet = e => {
        e.preventDefault();
        history.push("/wallet");
    };

    return (
        <div className = "header">
            <div className = "header_left">
                <img 
                src = {LogoWhiteSmoke}
                alt = ""
                />

                <div className = "header_input">
                    <SearchIcon /> 
                    <input placeholder = "Search Credo" type = "text" />
                    
                </div>
            </div>

            <div className = "header_middle">
                <div className = "header_option header_option--active">
                    <IconButton onClick = {handleSubmitHome}>
                        <HomeIcon fontSize = "large"/>
                    </IconButton>
                </div>

                <div className = "header_option">
                    <IconButton onClick = {handleSubmitCampaign}>
                        <SupervisedUserCircleIcon fontSize = "large"/>
                    </IconButton>
                </div>

                <div className = "header_option">
                    <IconButton onClick = {handleSubmitWallet}>
                        <AccountBalanceWalletIcon fontSize = "large"/>
                    </IconButton>
                </div>

            </div>

            <div className = "header_right">
                <div className = "header_info">
                    <Avatar src = {user.photoURL}/>
                    <h4 style = {{fontFamily: "sans-serif"}}>{user.displayName}</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;
