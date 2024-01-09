import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SiMicrosoftacademic } from "react-icons/si";
import AcademicsList from '../Components/AcademicsList';

const AcademLevels = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <SiMicrosoftacademic /> Academics
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select Levels to View Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <AcademicsList />
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

export default AcademLevels;