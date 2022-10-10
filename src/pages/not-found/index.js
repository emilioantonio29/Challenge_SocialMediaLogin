import React from "react";
import { NavLink } from "react-router-dom";


function NotFound() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
        <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
          <div className="container">
              <h1 className="display-4" style={{textAlign: "center"}}>Not Found</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;