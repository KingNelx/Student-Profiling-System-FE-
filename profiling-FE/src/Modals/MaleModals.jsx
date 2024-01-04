import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllMales from './Data/AllMales';

const MaleModals = () => {

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
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>List of all Male Students</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AllMales />
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

export default MaleModals;