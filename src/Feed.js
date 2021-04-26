import React, { useEffect, useState } from "react";
import MessageSender from './MessageSender.js';
import Post from "./Post.js";
import db from "./firebase";
import Poll from "./Poll"

function Feed() {

    const [posts, setPosts] = useState([]);
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        db.collection('polls').orderBy("timestamp", "desc").onSnapshot((snapshot) =>  
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return <div className = "feed">
        {/* <MessageSender /> */}

        {posts.map(poll => (
            <Poll
                key = {poll.id}
                username = {poll.data.username}
                profilePic = {poll.data.profilePic}
                question = {poll.data.question}
                ans1 = {poll.data.answer1}
                ans2 = {poll.data.answer2}
                ans3 = {poll.data.answer3}
                ans4 = {poll.data.answer4}
            />

        ))} 
    </div>
}

export default Feed; 