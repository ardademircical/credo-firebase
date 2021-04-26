import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import './Organize.css';
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import OrganizeAid from "./OrganizeAid";
import Header from './Header';


function Organize() {
    const [specifics, setSpecifics] = useState([]);
    useEffect(() => {
        db.collection('campaigns-full2').where("title", "==", "BLM Campaign").onSnapshot((snapshot) =>  
            setSpecifics(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className = "organize">
            <Header />
            {specifics.map(specific => (
            <OrganizeAid
                title = {specific.data.title} 
                target = {specific.data.target}
                // collected = {specific.data.collected}
            />
            ))}
        </div>
    )
}

export default Organize
