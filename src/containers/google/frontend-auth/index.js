import React, {useEffect, useState} from "react";
import axios from "axios"; // i will figure how to validate if a Google Client Id es Valid.
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";

/*
  THIS IS WHERE GOOGLE CLIENT ID IS VALIDATED:
  GET
	https://accounts.google.com/gsi/button?theme=outline&size=large&client_id=YOURCLIENTID&iframe_id=gsi_719113_24778&as=cozfla9pwAIIqHSez+vuPA
*/

const GoogleFrontendAuth = () => {
  
  const [clientId, setClientId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [renderEffect, setRenderEffect] = useState(false);
  const [display, setDisplay] = useState("none");
  const [JWT, setJWT] = useState("");
  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');
  const [decodedJWT, setDecodedJWT] = useState("");

  function copyToClipboard(e) {
    navigator.clipboard.writeText(JWT)
    setCopySuccess("Copied")
    setTimeout(() => {
      setCopySuccess('Copy to clipboard');
    }, 4000);
  };
  
  const renderFunction = () => {

    if(clientId == ""){
      // Swal.fire('Put your google client id to test the login')
      setInputValue("You are using our Google Client Id")
      setClientId("1006891058495-q2copgdqnt882cggc8uuusrfppb6pacv.apps.googleusercontent.com")
      setRenderEffect(value => !value);
      setDisplay("")
    }else{
      setClientId(inputValue)
      setRenderEffect(value => !value);
      setDisplay("")
    }

  }

  const handleCallbackResponse = (response) => {
    if(response.credential){
      console.log("JWT ID TOKEN: ", response.credential)
      setJWT(response.credential)
      setDecodedJWT(JSON.stringify(jwtDecode(response.credential)))
      console.log("JWT ID TOKEN DECODED: ", jwtDecode(response.credential))
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
            <h5>FRONTEND AUTH:</h5>
            <br/>
            <p><i className="bi bi-1-circle blockquote"></i> You need to create an API OAuth Client ID, wich will provide you a Google Client Id. Put your id in the input below and press Deploy Google Button.</p>
            <p><i className="bi blockquote"></i><strong>Info:</strong> If you don't have one, use our default Google Client Id. Leave the input empty and press <strong>Deploy Google Button.</strong></p>
            <div className="input-group mb-3">
                <div className="input-group-prepend ajust-box">
                  <span className="input-group-text" id="inputGroup-sizing-default">Google Client Id:</span>
                </div>
                <input 
                  onChange={(e)=> setInputValue(e.target.value)} value={inputValue}
                  placeholder="Put your google client id to test the login. Do not worry, this app will not keep your client id." 
                  type="text" className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-append ajust-box">
                  <button style={{width: "100%"}} onClick={renderFunction} className="btn btn-primary" type="button">Deploy Google Button</button>
                </div>
            </div>

            {clientId ? 
              <>
                <br/>
                <p><i className="bi bi-2-circle blockquote"></i> If your Google Cliend ID is valid, the sign up button will allow you to login with your account.</p>
                <div className="d-flex justify-content-center">
                    <div style={{width: "", display: display}}>
                        <div id="signInDiv"></div>
                    </div>
                </div>
                
              </>
              :
              <></>
            }
            
            {JWT !== "" ? 
<>  
              <br/>
              <p><i className="bi bi-3-circle blockquote"></i> When you complete your login successfully, google will respond a JWT Id Token; you can use this to show user data in the frontend, or validate the authentication in your backend</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend ajust-box">
                  <span className="input-group-text" id="inputGroup-sizing-default">JWT Id Token Generated:</span>
                </div>
                <input 
                  disabled
                  value={JWT}
                  placeholder="Put your google client id to test the login. Do not worry, this app will not keep your client id." 
                  type="text" className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-append ajust-box">
                  <button 
                    style={{width: "100%"}} 
                    onClick={copyToClipboard} 
                    className="btn btn-primary"
                    type="button">{copySuccess}</button>
                </div>
              </div>
              <br/>
              <p><i className="bi bi-4-circle blockquote"></i> Use JWT Decode to obtain the token info and show it in the client. </p>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">JWT Decoded info parsed to string:</label>
                <textarea disabled className="form-control" id="exampleFormControlTextarea1" rows="3" value={decodedJWT}></textarea>
              </div>
              <br/>
              <p><i className="bi bi-5-circle blockquote"></i> You can take your JWT ID Token (copy to clipboard) y simulate the validation that would run at your backend. </p>

            </>
              :
              <></>
            }

        </div>
    </div>

  );
}

export default GoogleFrontendAuth;