import Swal from "sweetalert2"
import Navbar from 'react-bootstrap/Navbar';
import sidelogo from '../Images/side-nav-logo.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import StudentTable from "../Student/StudentTable";
import Accordions from "../Pages/Accordions";



const AdminView = () => {

    const loadContent = () => {
        let timerInterval
        Swal.fire({
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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const render = () => {
        loadContent()
        handleShow()
    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='shadow-lg'>
                <Navbar.Brand className='mx-3'>
                    <img
                        alt=""
                        src={sidelogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ADMIN DATA VIEW
                </Navbar.Brand>
            </Navbar>

            <section>
                <Button variant="primary" onClick={render} className="mt-5 mx-5">
                    DASHBOARD
                </Button>
            
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Accordions />
                    </Offcanvas.Body>
                </Offcanvas>
                
            </section>

            <div className="container mt-5">
                <StudentTable />
            </div>

        </div>
    );
}

export default AdminView;