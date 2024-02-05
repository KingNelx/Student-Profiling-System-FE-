import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TotalFemale from '../Data/TotalFemale';



const FemaleModal = () => {

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
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>LIST OF FEMALES ENROLLED</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TotalFemale />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default FemaleModal;