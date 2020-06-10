import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="header">BPER Logo</div>
            <div className="main">
                <div className="card dashboard">dashboard</div>
                <div className="card chatbox">chatbox</div>
            </div>
            <div className="footer">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
        </div>
    );
}

export default App;
