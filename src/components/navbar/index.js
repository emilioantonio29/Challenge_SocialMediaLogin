import React from "react";
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav style={{height: "10vh"}} className="navbar bg-secondary">
            <div className="container">
                <img style={{height: "9vh", marginLeft: "-22px"}} src={logo} className="App-logo" alt="logo" />
            </div>
        </nav>
    </>
  );
}

export default NavBar;