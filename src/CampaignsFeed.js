import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CampaignBox from './CampaignBox';
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';
import "./CampaignsFeed.css";
import db from "./firebase";

function CampaignsFeed() {

    const history = useHistory();

    const handleSubmitNewCampaign = e => {
        e.preventDefault();
        history.push("/create-campaign");
    }

    const [{user} , dispatch] = useStateValue();

    const [otherCamps, setOtherCamps] = useState([]);

    useEffect(() => { 
        db.collection("campaigns-full2").where("uid", "!=", user.uid).onSnapshot(snapshot => {
          const lists = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
          setOtherCamps(lists)
        })
    }, []);

    return (
        <div className = "campaignsFeed">
            <h1>Campaigns Near You </h1>
            
            {otherCamps.map(otherCamp => (
                <CampaignBox
                    key = {otherCamp.id}
                    username = {otherCamp.data.username}
                    title = {otherCamp.data.title}
                    location = {otherCamp.data.location}
                    target = {otherCamp.data.target}
                    description = {otherCamp.data.description}
                    image = {otherCamp.data.image}
                    collected = {otherCamp.data.collected}
                    profilePic = {otherCamp.data.collected}
                    donors = {otherCamp.data.donors}
                />
            ))} 
        </div>
    )
}

export default CampaignsFeed
