import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TotalStudents from '../Components/Pages/TotalStudents';
import AddStudentModal from '../Modals/AddStudentModal';
import AcademLevels from '../Modals/AcademLevels';
import { FiLogOut } from "react-icons/fi";
import Button from "react-bootstrap/Button"
import Loading from '../SweetAlerts/Loading';


const AdminSideBar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar" style={{ background: 'linear-gradient(to bottom, #000000, #333333)', minHeight: '91vh' }}>
            <Nav defaultActiveKey="#home" className="flex-column mt-5">
              <Link className='p-3'>
                <Button variant='outline-primary'>
                  <FaHome />  Home
                </Button>
              </Link>
              <Link className='p-3'><AddStudentModal /> </Link>
              <Link className='p-3'> <AcademLevels /></Link>
              <Link className='p-3'to="/">
                <Button variant='outline-primary' onClick={Loading}> <FiLogOut /> Sign Out </Button>
              </Link>
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