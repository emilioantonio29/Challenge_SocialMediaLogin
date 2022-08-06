import React from "react";
import logo from '../../logo.svg';

const NavBar = () => {
  return (
    <>
        <nav style={{height: "10vh"}} class="navbar bg-secondary">
            <div className="container">
                <img style={{height: "9vh", marginLeft: "-22px"}} src={logo} className="App-logo" alt="logo" />
            </div>
        </nav>
    </>
  );
}

export default NavBar;