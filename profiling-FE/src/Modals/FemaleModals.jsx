import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllFemales from './Data/AllFemales';

const FemaleModals = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <>
                <Button variant="outline-primary" onClick={handleShow}>
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
                        <Modal.Title>List of Female Students</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AllFemales />
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

export default FemaleModals;