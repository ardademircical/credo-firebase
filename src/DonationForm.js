import React, { useState } from 'react';
import "./DonationForm.css";
import { Button } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';



function DonationForm() {

    const [{ user }, dispatch] = useStateValue();
    const [amount, setAmount] = useState("");
    const [donationDescription, setDonationDescription] = useState("");
    

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("donations").add({
            username: user.displayName,
            amount: amount,
            description: donationDescription,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            uid: user.uid,
            profilePic: user.photoURL, 
        });

        setAmount("");
        setDonationDescription("");
    };
    
    return (
        <div className = "donationForm">

            <div className = "donationFormLeft">
                < AccountBalanceWalletIcon
                    fontSize = "large"
                    style = {{fontSize: 400}}
                />
                <h3>Support other campaigns!</h3> 
                <p>Donate with Credo now</p>
            </div>
            <div className = "donationFormRight">
                <form>

                    <input
                        type = "number"
                        name = "amount"
                        value = {amount}
                        onChange = {e => setAmount(e.target.value)}
                        className = "donationAmount"
                        placeholder = {"Your Donation Amount in US Dollars"}
                    />

                    <input
                        type = "text"
                        name = "description"
                        value = {donationDescription}
                        onChange = {e => setDonationDescription(e.target.value)}
                        className = "donationDescription"
                        placeholder = {"Donation Description"}
                    />
                    </form>
                    <Button onClick = {handleSubmit} type = "submit">
                        Donate
                    </Button>
            </div>
        </div>
    )
}

export default DonationForm;
