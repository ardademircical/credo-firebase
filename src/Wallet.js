import React from 'react';
import "./Wallet.css";
import Header from './Header';
import { useHistory } from "react-router-dom";


function Wallet() {

    const history = useHistory();

    return (
        <div className = "wallet">
            <Header />
            <div className = "transactions">
            </div>
        </div>
    )
}

export default Wallet
