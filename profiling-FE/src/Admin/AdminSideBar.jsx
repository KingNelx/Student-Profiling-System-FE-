import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaEnvelope, FaBell } from 'react-icons/fa';


const AdminSideBar = () => {
    return ( 
        <div>
             <Container fluid>
      <Row>
        <Col xs={2} id="sidebar">
          <Nav defaultActiveKey="#home" className="flex-column">
            <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
            <Nav.Link href="#user"><FaUser /> Profile</Nav.Link>
            <Nav.Link href="#settings"><FaCog /> Settings</Nav.Link>
            <Nav.Link href="#messages"><FaEnvelope /> Messages</Nav.Link>
            <Nav.Link href="#notifications"><FaBell /> Notifications</Nav.Link>
          </Nav>
        </Col>
        <Col xs={10} id="page-content">
          {/* Your main content goes here */}
        </Col>
      </Row>
    </Container>
        </div>
     );
}
 
export default AdminSideBar;