import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FreshmanCount from '../FreshmanCount';
import FreshmanData from '../Data/FreshmanData';


const FreshmanModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <>

                <Button variant="outline-primary" onClick={handleShow} >
                    VIEW
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='xl'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>LIST OF FRESHMAN ENROLLED</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FreshmanData />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default FreshmanModal;