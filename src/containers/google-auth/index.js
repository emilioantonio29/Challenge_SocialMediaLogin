import React from "react";

const GoogleAuth = () => {
  return (
    <>
        <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
            <div className="container">
                <h1 className="display-4">Google Login!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>FRONTEND AUTH:</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                <hr className="my-4"/>
                <p>BACKEND SIMULATOR:</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                <br/>
                <br/>
            </div>
        </div>
    </>
  );
}

export default GoogleAuth;