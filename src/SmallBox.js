import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import "./SmallBox.css";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import OrganizeAid from "./OrganizeAid";
import Organize from "./Organize";


function SmallBox({title, location, timestamp, target, key}) {

    const history = useHistory();

    const keyPass = ({key}) => {
        <Organize
            keyID = {key}
        />
    }
    
    const handleSubmitOrganize = e => {
        e.preventDefault();
        history.replace("/organize");
        keyPass({key});
    };
    return (
        <div className = "smallBox">
            <h2>{title}</h2>
            <p className = 'target'> <MonetizationOnIcon style = {{ color: "green" }} fontSize = "inherit" /> {target} dollars left until target</p>
            <p className = "location"> <LocationOnIcon style = {{ color: "red" }} fontSize = "inherit" />{location} </p>

            <Button onClick = {handleSubmitOrganize}> Manage </Button>
        </div>
    )
}

export default SmallBox
