import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllFemales from './AllFemales';

const ModalForFemale = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>
            <>
                <Button variant="outline-primary" onClick={handleShow}>
                    FEMALE STUDENTS
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>MALE STUDENTS</Modal.Title>
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

export default ModalForFemale;