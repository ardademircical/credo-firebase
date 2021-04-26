import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react';
import "./CampaignBox.css";
import { useHistory } from "react-router-dom";


function CampaignBox({profilePic, username, timestamp, title, target, location, description, image, collected}) {

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push("/donate");
    }

    return (
        <div className = "campaignBox">
            <div class = "boxTop">
            <Avatar src = {profilePic} className = "campaignAvatar" />
                <div className = "boxTopInfo">
                        <h3> {username} </h3>
                        <p className = "location"> <LocationOnIcon style = {{ color: "red" }} fontSize = "inherit" />{location} </p>
                </div>
                    
                <div className = "money">
                    <h3> Target: ${target} </h3>
                    <h3>Collected: ${collected}</h3>
                </div>
            </div>

            <div className = "boxBottom">
                <h2> {title} </h2>
            </div>
 

            <div className = "boxImage">
                <img src = {image} alt = "" />
            </div>

            <div className = "boxDescription">
                <p>{description}</p>
            </div>

            <div className = "boxDonate">
                <Button onClick = {handleSubmit}> Donate </Button>
                <Button className = "anonymous"> Donate Anonymously</Button>
            </div>
        </div>
    )
}

export default CampaignBox
