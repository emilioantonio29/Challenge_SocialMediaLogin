import React from "react";
import FacebookAuth from "../../components/facebook";


function FacebookAuthPage() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
        <FacebookAuth/>
      </div>
    </>
  );
}

export default FacebookAuthPage;