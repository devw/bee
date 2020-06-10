import React from "react";
import "./App.css";
import { Chatbot } from "./components/chatbot";
import { Footer } from "./components/footer";

function App() {
    return (
        <div className="container">
            <div className="header">BPER Logo</div>
            <div className="main">
                <div className="card dashboard">dashboard</div>
                <Chatbot></Chatbot>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
