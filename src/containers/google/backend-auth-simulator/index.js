import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "../../../components/modal";

const GoogleBackendAuth = (props) => {

  const [input, setInput] = useState("");
  const [infoJWT, setInfoJWT] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const checkJWT = async () =>{
    if(input == ""){
      Swal.fire('Put your google client id to test the login')
    }else{
      let response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${input}`)
        .then((res) => {
          setInfoJWT(JSON.stringify(res.data))
        }).catch((error)=>{
          setInfoJWT(JSON.stringify(error.response.data))
        })

    }
  }

  useEffect(()=>{


  }, [])

  return (
    <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
        <div>
            <hr className="my-4"/>
            <h5>BACKEND SIMULATOR:</h5>
            <br/>
            <p><i className="bi bi-1-circle blockquote"></i> Copy the JWT Id Token Generated, paste it below and press the <strong>Check JWT</strong> button; you will be using a backend service to test your Google JWT token generated.</p>
            <div className="input-group mb-3">
              <div className="input-group-prepend ajust-box">
                <span className="input-group-text" id="inputGroup-sizing-default">JWT:</span>
              </div>
              <input 
                onChange={(e)=> setInput(e.target.value)} value={input}
                placeholder="Paste here your JWT Token generated" 
                type="text" className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"/>
              <div className="input-group-append ajust-box">
                <button style={{width: "100%"}} onClick={checkJWT} className="btn btn-primary" type="button">Check JWT</button>
              </div>
            </div>
            {infoJWT ? 
              <>  
                <br/>
                <p><i className="bi bi-2-circle blockquote"></i> JWT Verification: this is what you should do in your backend if double token check is needed. </p>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">JWT info:</label>
                  <textarea disabled className="form-control" id="exampleFormControlTextarea1" rows="3" value={infoJWT}></textarea>
                </div>
                <br/>
                <p><i className="bi bi-3-circle blockquote"></i> You can use this methods to verify an google JWT auth token: </p>
                <div className="d-flex">
                  <div>
                    <Modal 
                      title={"Method 1"}
                      />
                  </div>
                  <div style={{marginLeft: "20px"}}>
                    <Modal 
                      title={"Method 2"}
                      />
                  </div>
                </div>
              </>
              :
              <>
              
              </>
            } 
            <br/>
            <br/>
        </div>
    </div>
  );
}

export default GoogleBackendAuth;