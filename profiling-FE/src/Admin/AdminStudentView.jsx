import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Loading from '../Components/Loading';
import ModalForMale from '../Components/ModalForMale';
import ModalForFemale from '../Components/ModalForFemale';
import ModalPostStudent from '../Components/ModalPostStudent';

const AdminStudentView = () => {

    const [student, setStudent] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loadAllData = async () => {
        const response = await axios.get('http://localhost:8080/admin/get-students');
        try {
            if (response.status === 200) {
                setStudent(response.data)
            }
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e);
            alert(" ERROR MESSAGE: " + e);
        }
    }

    useEffect(() => {
        loadAllData();
    }, [])

    return (
        <>

            <div className='mx-5 mt-5'>
                <Button variant="outline-primary" onClick={handleShow}>
                    DASHBOARD
                </Button>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='mx-auto'><i class="fas fa-list mx-auto"></i>DASHBOARD</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="mx-auto">
                                ADD NEW STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                                <ModalPostStudent />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>MALE STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                            <ModalForMale />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>FEMALE STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                               <ModalForFemale />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>BSIT STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>BSIS STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>BSCS STUDENTS</Accordion.Header>
                            <Accordion.Body className="text-center">
                                TEST
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>SETTINGS</Accordion.Header>
                            <Accordion.Body className="text-center">
                                <Link to='/'>
                                    <Button variant='outline-primary' onClick={Loading}>LOG OUT</Button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>

            <div className='container text-center mt-3'>
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
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{value.firstName}</td>
                                            <td>{value.lastName}</td>
                                            <td>{value.gender}</td>
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