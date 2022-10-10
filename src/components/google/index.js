import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import GoogleFrontendAuth from "../../containers/google/frontend-auth";
import GoogleBackendAuth from "../../containers/google/backend-auth-simulator";

const GoogleAuth = () => {
  
  return (

  <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
    <div className="container">
        <h1 className="display-4">Google Login</h1>
        <GoogleFrontendAuth/>
        <GoogleBackendAuth/>
    </div>
  </div>

  );
}

export default GoogleAuth;