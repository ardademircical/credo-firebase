import React, { useState } from 'react';
import "./BrowseCampaign.css";
import { Avatar } from '@material-ui/core';
import { useStateValue } from "./StateProvider";
import CampaignSidebar from './CampaignSidebar';
import CampaignsFeed from './CampaignsFeed';
import db from "./firebase";
import firebase from "firebase";

function BrowseCampaign() {
    return (
       <div className = "browseCampaign">
           <CampaignSidebar />
           <CampaignsFeed />
       </div>
    )
}

export default BrowseCampaign
