import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import StudentDataTable from '../Student/StudentDataTable';
import MaleModal from '../Student/Modal/MaleModal';

const AdminSideBar = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={2} className="bg-dark sidebar">
                    <Nav className="flex-column mt-3">
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center'>
                                <span class='material-icons mx-3'>home</span>
                                <span>HOME</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>male</span>
                                <span>
                                    <MaleModal />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>female</span>
                                <span>FEMALE</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>school</span>
                                <span>ELEMENTARY</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>school</span>
                                <span>HIGH SCHOOL</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>school</span>
                                <span>SENIOR HIGH</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>school</span>
                                <span>VOCATIONAL</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>school</span>
                                <span>COLLEGE</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" className='d-flex align-items-center mt-3'>
                                <span class='material-icons mx-3'>exit_to_app</span>
                                <span>LOG OUT</span>
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