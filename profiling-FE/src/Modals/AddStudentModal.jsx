import { useState } from "react";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { IoPersonAddSharp } from "react-icons/io5";
import AddStudent from "../Components/AddStudent";

const AddStudentModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="outline-primary" onClick={handleShow}>
                <IoPersonAddSharp /> Add Record
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddStudent />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddStudentModal;