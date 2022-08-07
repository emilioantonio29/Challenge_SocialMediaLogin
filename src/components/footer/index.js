import React from "react";
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <footer style={{marginTop: "auto", minHeight: "5vh"}} className="bg-secondary d-flex align-items-center justify-content-center" >
            <div>
                <div>
                    <p style={{color: "white", marginTop: "10px"}}>© 2022 | about me: <a 
                        href="https://www.linkedin.com/in/emilio-martinez-gonzalez-0b0195165/" 
                        target="_blank" rel="noreferrer"
                        style={{fontWeight: "bold", color: "white"}}
                        >Emilio Martinez</a>
                    </p>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;