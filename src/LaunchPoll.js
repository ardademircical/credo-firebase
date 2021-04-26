import React, { useState } from 'react';
import db from "./firebase";
import "./LaunchPoll.css";
import PollIcon from '@material-ui/icons/Poll';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import { useStateValue } from "./StateProvider";




function LaunchPoll({campID}) {

    const [{ user }, dispatch] = useStateValue();
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    

    const handleSubmit = e => {
        e.preventDefault();

        db.collection("polls").add({
            username: user.displayName,
            question: question,
            answer1: answer1,
            answer2: answer2,
            answer3: answer3,
            answer4: answer4,

            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            uid: user.uid,
            profilePic: user.photoURL, 
            // campID: campID,
        });

        setQuestion("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        setAnswer4("");

    };

    return (
        <div className = "launchPoll">
            <div className = "launchPollLeft">
                <PollIcon 
                    fontSize = "large"
                    style = {{fontSize: 400}}
                />
                <h3>Keep your stakeholders in the loop!</h3> 
                <p>Launch a poll with your campaign</p>
            </div>
            <div className = "launchPollRight">
                <form>
                    <input
                        type = "text"
                        name =  "question"
                        value = {question}
                        onChange = {e => setQuestion(e.target.value)}
                        className = "question"
                        placeholder = {"Question for your Poll"}
                        />
                    <input
                        type = "text"
                        name = "answer1"
                        value = {answer1}
                        onChange = {e => setAnswer1(e.target.value)}
                        className = "answer1"
                        placeholder = {"Answer 1 (Up to 4)"}
                    />
                    <input
                        type = "text"
                        name = "answer2"
                        value = {answer2}
                        onChange = {e => setAnswer2(e.target.value)}
                        className = "answer2"
                        placeholder = {"Answer 2 (Up to 4)"}
                    />
                    <input
                        type = "text"
                        name = "answer3"
                        value = {answer3}
                        onChange = {e => setAnswer3(e.target.value)}
                        className = "answer3"
                        placeholder = {"Answer 3 (Up to 4)"}
                    />
                    <input
                        type = "text"
                        name = "answer4"
                        value = {answer4}
                        onChange = {e => setAnswer4(e.target.value)}
                        className = "answer4"
                        placeholder = {"Answer 4 (Up to 4)"}
                    />
                    </form>
                    <Button onClick = {handleSubmit} type = "submit">
                        LaunchPoll
                    </Button>
            </div>
        </div>
    )
}

export default LaunchPoll
