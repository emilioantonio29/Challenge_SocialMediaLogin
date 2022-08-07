import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

const GoogleFrontendAuth = () => {
  
  const [clientId, setClientId] = useState("");
  const [renderEffect, setRenderEffect] = useState(false);
  const [display, setDisplay] = useState("none");
  const [JWT, setJWT] = useState("");
  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');
  

  function copyToClipboard(e) {
    navigator.clipboard.writeText(JWT)
    setCopySuccess("Copied")
  };
  
  const renderFunction = () => {

    if(clientId == ""){
      Swal.fire('Put your google client id to test the login')
    }else{
      setRenderEffect(value => !value);
      setDisplay("")
    }

  }

  const handleCallbackResponse = (response) => {
    if(response.credential){
      console.log("JWT ID TOKEN: ", response.credential)
      setJWT(response.credential)
    }
  }

  useEffect(()=>{

      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCallbackResponse
      })
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      )

  }, [renderEffect])

  return (

    <div>
        <div>
            <hr className="my-4"/>
            <p>FRONTEND AUTH:</p>
            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span style={{minWidth: "20vh"}} className="input-group-text" id="inputGroup-sizing-default">Google Client Id</span>
                </div>
                <input 
                  onChange={(e)=> setClientId(e.target.value)} value={clientId}
                  placeholder="Put your google client id to test the login. Do not worry, this app will not keep your client id." 
                  type="text" className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-append">
                  <button style={{minWidth: "20vh"}} onClick={renderFunction} className="btn btn-outline-secondary" type="button">Deploy Google Button</button>
                </div>
            </div>

            {clientId ? 
              <div style={{width: "100%"}} className="d-flex justify-content-center">
                  <div style={{width: "", display: display}}>
                      <div id="signInDiv"></div>
                  </div>
              </div>
              :
              <></>
            }
            
            {JWT !== "" ? 
              <div  className="input-group mb-3" style={{marginTop: "15px"}}>
                  <div className="input-group-prepend">
                  <span style={{minWidth: "20vh"}} className="input-group-text" id="inputGroup-sizing-default">JWT Id Token</span>
                  </div>
                  <input 
                    disabled
                    value={JWT}
                    placeholder="This is your JWT: use this to validate the user in the backend" 
                    type="text" className="form-control" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default"/>
                  <div className="input-group-append">
                    <button style={{minWidth: "20vh"}} onClick={copyToClipboard} className="btn btn-outline-secondary" type="button">{copySuccess}</button>
                  </div>
              </div>
              :
              <></>
            }

        </div>
    </div>

  );
}

export default GoogleFrontendAuth;