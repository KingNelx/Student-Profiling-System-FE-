import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddRecord from '../../Pages/AddRecord';
import FooterMessage from '../../Components/FooterMessage';


const AddRecordModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <>
                <Button variant="outline" onClick={handleShow} style={
                    { border: "none", color: "black" }
                }>
                    Add Record
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size='xl'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddRecord />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                    <FooterMessage />
                </Modal>
            </>
        </div>
    );
}

export default AddRecordModal;