import React from 'react'
import "./Header.css"
import logo from "./img/logo.png"
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="" />  
            </div>
            <div className="header-right" id="topnav">
                <button className="login">Log In</button>
                <button class="register">Register</button>
            </div>
        </div>
    );
}

export default Header;
