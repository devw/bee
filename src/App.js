import React from "react";
import "./App.css";
import { Chatbot } from "./components/chatbot";

function App() {
    return (
        <div className="container">
            <div className="header">BPER Logo</div>
            <div className="main">
                <div className="card dashboard">dashboard</div>
                <Chatbot></Chatbot>
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
