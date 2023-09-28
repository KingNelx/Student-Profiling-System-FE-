import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import StudentDataTable from '../Student/StudentDataTable';
import MaleModal from '../Student/Modal/MaleModal';
import FemaleModal from '../Student/Modal/FemaleModal';
import ElementaryModal from '../Student/Modal/ElementaryModal';
import HighSchoolModal from '../Student/Modal/HighSchoolModal';
import SeniorHighModal from '../Student/Modal/SeniorHighModal';
import VocationalModal from '../Student/Modal/VocationalModal';
import CollegeModal from '../Student/Modal/CollegeModal';

const AdminSideBar = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={2} className="bg-dark sidebar">
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>male</span>
                                <span>
                                    <MaleModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>female</span>
                                <span>
                                    <FemaleModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>school</span>
                                <span>
                                    <ElementaryModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>school</span>
                                <span>
                                    <HighSchoolModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>school</span>
                                <span>
                                    <SeniorHighModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link  className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>school</span>
                                <span>
                                    <VocationalModal lapit='lapitNiJayson'/>
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>school</span>
                                <span>
                                    <CollegeModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-2'>exit_to_app</span>
                                <span className='mx-3'>LOG OUT</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10} className="main-content">
                    <StudentDataTable />
                </Col>
            </Row>
        </Container>

    );
}

export default AdminSideBar;