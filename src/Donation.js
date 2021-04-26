import React from 'react';
import "./Donation.css";
import { Avatar } from '@material-ui/core';


function Donation({profilePic, username, timestamp, description, amount, campID}) {
    return (
        <div className = "donation">
            <div className = "donationTop">
                <Avatar src = {profilePic} className = "postAvatar" />
                <div className = "donationTopInfo">
                    <h3> {username} </h3>
                    <p>{new Date().toUTCString()}</p>
                </div>
            </div>
        
            <div className  = "donationBottom">
                <h3> Donated: ${amount} </h3>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default Donation
