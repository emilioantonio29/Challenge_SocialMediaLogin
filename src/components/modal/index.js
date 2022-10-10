import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import method1 from '../../assets/img/method1.png'
import method2 from '../../assets/img/method2.png'

const ModalInfo = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.title}
            </Button>

            <Modal size="xl" centered aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.title == "Method 1" ? 
                        <>
                            <p><i className="bi bi-dot"></i> Use the get method from oauth2:</p>
                            <p><i className="bi bi-dot"></i> https://oauth2.googleapis.com/tokeninfo?id_token=<strong>YourJWTTokenGenerated</strong></p>
                        </>
                        :
                        <>
                            <p><i className="bi bi-dot"></i> Using node JS, you can check the JWT with the google-auth-library.</p>
                            <p><i className="bi bi-dot"></i> Test any JWT with this endpoint (POST): https://shinzendev-gcp1.herokuapp.com/google-token-verification</p>
                            <p><i className="bi bi-dot"></i> JSON Body example: <strong>&#123;"token": "JWT", "googleClientID": "googleClientID" &#125;</strong></p>
                        </>
                    }
                </Modal.Body>
                {props.title == "Method 1" ? 
                        <>
                            <img src={method1}></img>
                        </>
                        :
                        <>
                            <img src={method2}></img>
                        </>
                    }

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalInfo;