import React, { useEffect, useState } from "react";
import "./CampaignSidebar.css";
import Header from './Header';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Avatar, IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import CampaignBox from "./CampaignBox.js";
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';
import SmallBox from './SmallBox';
import db from "./firebase";


function CampaignSidebar() {

    const history = useHistory();

    const handleSubmitNewCampaign = e => {
        e.preventDefault();
        history.push("/create-campaign");
    }

    const [{user} , dispatch] = useStateValue();

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => { 
        db.collection("campaigns-full2").where("uid", "==", user.uid).onSnapshot(snapshot => {
          const lists = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
          setCampaigns(lists)
        })
    }, []);

    return (
        <div className = "campaignSidebar">

            <div className = "Title">
                <h1>Your Campaigns</h1>
            </div>

            <div className = "createCampaign">
                {/* <IconButton onClick = {handleSubmitNewCampaign}>
                    <AddCircleIcon fontSize = "large" />
                </IconButton> */}
                <Button onClick = {handleSubmitNewCampaign}>
                    + Create New Campaign
                </Button>
            </div>

            <div className = "existingCampaigns">
                {campaigns.map(campaign => (
                    <SmallBox
                        key = {campaign.id}
                        title = {campaign.data.title}
                        location = {campaign.data.location}
                        target = {campaign.data.target - campaign.data.collected}
                    />
                ))} 
                {/* <SmallBox 
                    title = "Test"
                    location = "Oakland, CA"
                    timestamp = {new Date().toUTCString()}
                /> */}
            </div>
        </div>
    )
}

export default CampaignSidebar;
