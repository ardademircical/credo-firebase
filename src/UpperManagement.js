import React from 'react';
import MainPage from './MainPage';
import CampaignCreation from './CampaignCreation';
import Wallet from "./Wallet";
import CampaignManager from "./CampaignManager";
import { BrowserRouter, Route } from 'react-router-dom';
import Organize from './Organize';
import DonationFull from "./DonationFull";
import FullPoll from "./FullPoll";


function UpperManagement() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path = "/" component = {MainPage} />
                <Route path = "/create-campaign" component = {CampaignCreation} />
                <Route path = "/campaign-manager" component = {CampaignManager} />
                <Route path = "/wallet" component = {Wallet} />
                <Route path = "/organize" component = {Organize} />
                <Route path = "/donate" component = {DonationFull} />
                <Route path = "/launchpoll" component = {FullPoll} />
            </BrowserRouter>
        </div>
    )
}

export default UpperManagement
