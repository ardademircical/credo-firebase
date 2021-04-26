import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import './OrganizeAid.css';
import Donation from "./Donation"
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import PollIcon from '@material-ui/icons/Poll';
import OrganizeSender from './organizeSender';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';



function OrganizeAid({title, target, collected, key}) {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        db.collection('donations').onSnapshot((snapshot) =>  
            setDonations(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return (
        <div className = "organizeAid">
            
            <h1> {title} </h1>
            <h2> Target: ${target} </h2>
            <h2> Collected: ${collected}</h2>

            <OrganizeSender />

            <div className = "Donations">
                <h1> Donations </h1>
                {donations.map(donation => (
                    <Donation
                    key = {donation.id}
                    username = {donation.data.username}
                    profilePic = {donation.data.profilePic}
                    description = {donation.data.description}
                    amount = {donation.data.amount}
                    timestamp = {new Date().toUTCString()}      
                />
                ))}
            </div>
            
                

        </div>
    )
}

export default OrganizeAid
