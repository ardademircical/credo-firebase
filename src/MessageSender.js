import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoIcon from "@material-ui/icons/Photo";
import Emotion from "@material-ui/icons/EmojiEmotions";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName, 
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    }; 


    return (
        <div className = "messageSender">
            <div className = "messageSenderTop">
                <Avatar src = {user.photoURL}/>
                <form>
                    <input
                        value = {input}
                        onChange = {e => setInput(e.target.value)}
                        className = "messageSenderInput"
                        placeholder = {"What's on your mind?"}     
                    />

                    <input
                        value = {imageUrl}
                        onChange = {e => setImageUrl(e.target.value)}
                        className = "messageSenderImage"
                        placeholder = {"Image URL (Optional)"} />

                    <button onClick = {handleSubmit} type = "submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className = "messageSenderBottom">
                <div className = "messageSender_option">
                    <VideocamIcon style = {{ color: "red" }}/>
                    <h3> Live Video </h3>
                </div>

                <div className = "messageSender_option">
                    <PhotoIcon style = {{color: "green"}} />
                    <h3> Photo/Video</h3>
                </div>

                <div className = "messageSender_option">
                    <Emotion style = {{color: "orange"}} />
                    <h3> Feeling/Activity</h3>
                </div>


            </div>
        </div>
    )
}

export default MessageSender;
