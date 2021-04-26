import React from 'react';
import Header from './Header';
import CampaignSidebar from './CampaignSidebar';
import CampaignsFeed from './CampaignsFeed';
import './CampaignManager.css';
import BrowseCampaign from './BrowseCampaign';

function CampaignManager() {
    return (
        <div className = "campaignManager">
            <Header/>
            <BrowseCampaign />
        </div>
    )
}

export default CampaignManager
