import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaHome, FaBell } from 'react-icons/fa';
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import TotalStudents from '../Components/Pages/TotalStudents';
import AddStudentModal from '../Modals/AddStudentModal';
import AcademLevels from '../Modals/AcademLevels';


const AdminSideBar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar" style={{ background: 'linear-gradient(to bottom, #000000, #333333)', minHeight: '91vh' }}>
            <Nav defaultActiveKey="#home" className="flex-column m-2">
              <Link className='p-3'><FaHome /> Home</Link>
              <Link className='p-3'><AddStudentModal /> </Link>
              <Link className='p-3'><FaListCheck /> View Students</Link>
              <Link className='p-3'> <AcademLevels /></Link>
              <Link className='p-3'><FaBell /> Notifications</Link>
            </Nav>
          </Col>
          <Col xs={10} id="page-content">
            <TotalStudents />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminSideBar;