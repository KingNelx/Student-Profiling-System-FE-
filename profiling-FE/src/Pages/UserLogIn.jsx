import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sidelogo from '../Images/side-nav-logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserLogIn = () => {

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
                    SELECT USER
                </Navbar.Brand>
            </Navbar>
            <section className='text-center mt-5'>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto', marginTop: '10vh' }} className='shadow-lg'>
                                <Card.Img variant="top" src={sidelogo} />
                                <Card.Body>
                                    <Card.Title>ADMIN</Card.Title>
                                    <Link to='/adminSignIn'><Button variant="outline-primary" onClick={loadContent}>SELECT</Button></Link>
                                </Card.Body>
                            </Card></Col>
                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto', marginTop: '10vh' }} className='shadow-lg'>
                                <Card.Img variant="top" src={sidelogo} />
                                <Card.Body>
                                    <Card.Title>CLERK</Card.Title>
                                    <Link to='/clerkSignIn'><Button variant="outline-primary">SELECT</Button></Link>
                                </Card.Body>
                            </Card></Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default UserLogIn;