import React from "react";
import './App.css';
import Login from "./Login.js"
import { useStateValue } from "./StateProvider";
import UpperManagement from "./UpperManagement";


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login /> 
      ): (
        <>
          <UpperManagement />
        </>
        )}    

    </div> 
  );
}

export default App;
