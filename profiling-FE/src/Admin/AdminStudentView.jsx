import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from 'react-bootstrap/Navbar';

const AdminStudentView = () => {

    const [student, setStudent] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className='mx-5 mt-5'>
                <Button variant="outline-primary" onClick={handleShow}>
                    DASHBOARD
                </Button>
            </div>
            

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ADD NEW STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>ALL MALE STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ALL FEMALE STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>BSIT STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>BSIS STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>BSCS STUDENTS</Accordion.Header>
                            <Accordion.Body>
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link to='/'> Log out </Link>
                </Offcanvas.Body>
            </Offcanvas>
            
            <div className='container text-center mt-5'>
                <Table striped>
                    {
                        student.length > 0 ? (
                            <><thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead><tbody>
                                    {student.map((value, index) => (
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>
                                                <Button variant='outline-primary'><i class="fas fa-eye"></i></Button>
                                                <Button variant='outline-success' className='mx-2'><i class="fas fa-recycle"></i></Button>
                                                <Button variant='outline-danger'><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody></>
                        ) : (
                            <p className='mt-5'> NO AVAILABLE DATA </p>
                        )
                    }
                </Table>
            </div>
        </>
    );
}

export default AdminStudentView;