import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import { Comment, ShareSharp, ThumbUp } from '@material-ui/icons';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className = "post">
            <div className = "postTop">
                <Avatar src = {profilePic} className = "postAvatar" />

                <div className = "postTopInfo">
                    <h3> {username} </h3>
                    {/* <p> {timestamp} </p> */}
                    <p>{new Date().toUTCString()}</p>
                </div>
            </div>
        
            <div className  = "postBottom">
                <p> {message} </p>
            </div>

            <div className = "postImage">
                <img src = {image} alt = "" />
            </div>

            <div className = "postOptions">
                <div className = "postOption">
                    <ThumbUp />
                    <p> Like</p>
                </div>

                <div className = "postOption">
                    <Comment />
                    <p> Comment </p>
                </div>

                <div className = "postOption">
                    <ShareSharp />
                    <p> Share </p>
                </div>
            </div>
        </div>
    )
}

export default Post
