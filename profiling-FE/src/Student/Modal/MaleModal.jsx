import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MalesStudent from '../MaleStudents';

const MaleModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant='outline-primary' onClick={handleShow}  style={{ border: 'none', background: 'transparent' }}>
                MALE
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>MALE STUDENTS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MalesStudent />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MaleModal;