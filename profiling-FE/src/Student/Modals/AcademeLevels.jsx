import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AcademicLists from '../../Pages/AcademicLists';

const AcademeLevels = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <div>
            <>
                <Button variant="outline" onClick={handleShow} style={
                    { border: "none", color: "black" }
                }>
                    Academic Levels
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='xl'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Levels to View each Students</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AcademicLists />
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

export default AcademeLevels;