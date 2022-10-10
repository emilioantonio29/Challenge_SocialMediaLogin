import React from "react";


function HomePage() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
        <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
          <div className="container">
              <h1 className="display-4">Welcome</h1>
              <br/>
              <p><i className="bi bi-dot"></i> This web app will help you test some social media auth services.</p>
              <p><i className="bi bi-dot"></i> The idea is that you can see every step in the auth process.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;