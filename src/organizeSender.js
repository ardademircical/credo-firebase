import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import "./organizeSender.css";
import { useHistory } from "react-router-dom";
import PollIcon from '@material-ui/icons/Poll';
import Emotion from "@material-ui/icons/EmojiEmotions";
import { Button } from '@material-ui/core';



function OrganizeSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const history = useHistory();

    const handleSubmitStatus = e => {
        e.preventDefault();
    }

    const handleSubmitPoll = e => {
        e.preventDefault();
        history.replace("/launchpoll");

        // db.collection("campPosts").add({
        //     message: input,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //     profilePic: user.photoURL,
        //     username: user.displayName, 
        //     image: imageUrl,
        // });

        // setInput("");
        // setImageUrl("");
    }

    return (
        <div className = "organizeSender">
            <div className = "organizeSenderTop">
                <Avatar src = {user.photoURL}/>
                <form>
                    <input
                        value = {input}
                        onChange = {e => setInput(e.target.value)}
                        className = "organizeSenderInput"
                        placeholder = {"What's on your mind?"}     
                    />

                    <input
                        value = {imageUrl}
                        onChange = {e => setImageUrl(e.target.value)}
                        className = "organizeSenderImage"
                        placeholder = {"Image URL (Optional)"} />

                    <button onClick = {handleSubmitStatus} type = "submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className = "organizeSenderBottom">
                <div className = "organizeSender_option">
                    <Button onClick = {handleSubmitPoll} type = "submit">
                        <PollIcon style = {{ color: "green" }}/>
                    </Button>
                    <h3> Launch a poll </h3>
                </div>

                <div className = "organizeSender_option">
                    <Emotion style = {{color: "orange"}} />
                    <h3> Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default OrganizeSender
