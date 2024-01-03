import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaHome, FaCog, FaEnvelope, FaBell } from 'react-icons/fa';
import { IoPersonAddSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiMicrosoftacademic } from "react-icons/si";
import TotalStudents from '../Components/Pages/TotalStudents';


const AdminSideBar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar" style={{ background: 'linear-gradient(to bottom, #000000, #333333)', minHeight: '91vh' }}>
            <Nav defaultActiveKey="#home" className="flex-column m-2">
              <Link className='p-3'><FaHome /> Home</Link>
              <Link className='p-3'><IoPersonAddSharp  /> Add Student</Link>
              <Link className='p-3'><FaListCheck /> View Students</Link>
              <Link className='p-3'><SiMicrosoftacademic /> Academic Levels</Link>
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