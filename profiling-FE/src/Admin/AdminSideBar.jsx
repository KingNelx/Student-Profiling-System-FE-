import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TotalStudents from '../Components/Pages/TotalStudents';


const AdminSideBar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar" style={{ background: 'linear-gradient(to bottom, #000000, #333333)', minHeight: '91vh' }}>
            <Nav defaultActiveKey="#home" className="flex-column p-2 m-2">
              <Link className='p-3'><FaHome /> Home</Link>
              <Link className='p-3'><FaUser /> Profile</Link>
              <Link className='p-3'><FaCog /> Settings</Link>
              <Link className='p-3'><FaEnvelope /> Messages</Link>
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