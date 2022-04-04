import React from "react";
import Logo from "./icons8-frog-face-100.png"

function Header(){
    return(
        <div className="header-container">
            <nav className="logo-container">
            <img src={Logo}/>
            <span className="logo-text">Meme Generator</span>
            </nav>
            <span className="project-name">React Course - Project 3</span>

        </div>
    )
}
export default Header