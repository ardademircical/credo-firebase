import React from 'react';
import "./Poll.css"
import { Avatar } from '@material-ui/core';
import { Comment, ShareSharp, ThumbUp } from '@material-ui/icons';


function Poll({profilePic, username, question, ans1, ans2, ans3, ans4}) {
    return (
        <div className = 'poll'>
            <div className = "pollTop">
                <Avatar src = {profilePic} className = "pollAvatar" />

                <div className = "pollTopInfo">
                    <h3> {username} </h3>
                    {/* <p> {timestamp} </p> */}
                    <p>{new Date().toUTCString()}</p>
                </div>
            </div>
            <div className  = "pollBottom">
                <h3> {question} </h3>
                <p>                
                    <input type="radio" name="AppSource" value = {ans1} />
                    {ans1}
                </p>
                <p> 
                    <input type="radio" name="AppSource" value = {ans2} />
                    {ans2} 
                </p>
                <p>
                    <input type="radio" name="AppSource" value = {ans3} />
                    {ans3} 
                </p>
                <p>
                    <input type="radio" name="AppSource" value = {ans4} />
                    {ans4} 
                </p> 
                </div>
            <div className = "pollOptions">
                <div className = "pollOption">
                    <ThumbUp />
                    <p> Like</p>
                </div>

                <div className = "pollOption">
                    <Comment />
                    <p> Comment </p>
                </div>

                <div className = "pollOption">
                    <ShareSharp />
                    <p> Share </p>
                </div>
            </div>
        </div>
    )
}

export default Poll
