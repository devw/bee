import React from "react";
import "./App.css";
import { Chatbox } from "./components/chatbox";

function App() {
    return (
        <div className="container">
            <div className="header">BPER Logo</div>
            <div className="main">
                <div className="card dashboard">dashboard</div>
                <Chatbox></Chatbox>
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
