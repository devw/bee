import React from "react";
import { Chatbot } from "./chatbot";
import classes from "./main.module.css";

export const Main = () => (
    <div className={classes.main}>
        <div>dashboard</div>
        <Chatbot></Chatbot>
    </div>
);
