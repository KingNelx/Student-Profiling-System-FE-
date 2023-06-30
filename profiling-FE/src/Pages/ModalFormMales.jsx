import Swal from "sweetalert2"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddStudent from "../Student/AddStudent";
import AllMaleStudents from "../Student/AllMaleStudents";

const ModalFormMales = () => {
    
    const [lgShow, setLgShow] = useState(false);
    const loadContent = async () => {
        let timerInterval
        await Swal.fire({
            title: 'Loading!',
            html: 'Please Wait!',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    const fetchResult = () => {
        loadContent();
        setLgShow(true)
    }
    return (
        <div>
          
            <Button variant="outline-primary" onClick={fetchResult}>ALL MALE STUDENTS</Button>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                backdrop="static"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        ALL MALE STUDENTS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>

            <AllMaleStudents />

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalFormMales;