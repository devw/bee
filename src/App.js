import React from "react";
import "./App.css";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

function App() {
    return (
        <div className="container">
            <div className="header">BPER Logo</div>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
