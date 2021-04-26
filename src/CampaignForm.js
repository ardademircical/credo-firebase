import React, { useState } from 'react';
import "./CampaignForm.css";
import { Button } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import MainPage from "./MainPage";



function CampaignForm() {

    const [{ user }, dispatch] = useStateValue();
    const [campaignTitle, setTitle] = useState("");
    const [campaignLocation, setLocation] = useState("");
    const [donationTarget, setDonation] = useState("");
    const [campaignDescription, setDescription] = useState("");
    const [campaignImage, setImage] = useState("");
    const [collected, setCollected] = useState("");
    const [donors, setDonors] = useState([]);

    

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("campaigns-full2").add({
            username: user.displayName,
            title: campaignTitle,
            location: campaignLocation,
            target: donationTarget,
            description: campaignDescription,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            uid: user.uid,
            image: campaignImage,
            donors: donors,
            collected: 0,
            profilePic: user.photoURL, 
        });

        setTitle("");
        setLocation("");
        setDonation("");
        setDescription("");
        setImage("");
        setCollected("");
        setDonors("");
    };
    
    return (
        <div className = "campaign">

            <div className = "campaignFormLeft">
                <SupervisedUserCircleIcon 
                    fontSize = "large"
                    style = {{fontSize: 400}}
                />
                <h3>Make change happen!</h3> 
                <p>Create your campaign with Credo now</p>
            </div>
            <div className = "campaignFormRight">
                <form>
                    <input
                        type = "text"
                        name =  "title"
                        value = {campaignTitle}
                        onChange = {e => setTitle(e.target.value)}
                        className = "formTitle"
                        placeholder = {"Title of Your Campaign"}
                        />
                    <input
                        type = "text"
                        name = "location"
                        value = {campaignLocation}
                        onChange = {e => setLocation(e.target.value)}
                        className = "formLocation"
                        placeholder = {"Campaign Location"}
                    />
                    <input
                        type = "number"
                        name = "target donation"
                        value = {donationTarget}
                        onChange = {e => setDonation(e.target.value)}
                        className = "formCampaignTarget"
                        placeholder = {"Your Donation Target in US Dollars"}
                    />
                    <input
                        type = "text"
                        name = "image"
                        value = {campaignImage}
                        onChange = {e => setImage(e.target.value)}
                        className = "formImage"
                        placeholder = {"Image URL for Campaign"}
                    />
                    <input
                        type = "text"
                        name = "description"
                        value = {campaignDescription}
                        onChange = {e => setDescription(e.target.value)}
                        className = "formDescription"
                        placeholder = {"Campaign Description"}
                    />
                    </form>
                    <Button onClick = {handleSubmit} type = "submit">
                        Start Campaign
                    </Button>
            </div>
        </div>
    )
}

export default CampaignForm;
