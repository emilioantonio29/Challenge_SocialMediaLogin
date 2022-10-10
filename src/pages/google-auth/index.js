import React from "react";
import GoogleAuth from "../../components/google";


function GoogleAuthPage() {
  return (
    <>
        <div style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
          <GoogleAuth/>
        </div>
    </>
  );
}

export default GoogleAuthPage;