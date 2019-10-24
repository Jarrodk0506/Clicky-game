import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2 className="title">Clicky Game</h2></li>
            <li id="score">Score: {props.score}</li>
            <li id="Topscore">Top Score: {props.topScore}</li>
        </ul>
    </div>
)

export default Header;