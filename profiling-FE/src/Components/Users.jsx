import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import logo from '../Images/user.jpg'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import Footer from './Footer';

const Users = () => {

    const loading = () => {
        let timerInterval
        Swal.fire({
            title: 'LOADING PLEASE WAIT!',
            html: '..............',
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
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }} className='shadow-lg' />
                            <Card.Body>
                                <Card.Title>ADMIN</Card.Title>

                                <Link to="/adminHome"><Button variant="outline-primary"onClick={loading} >SELECT</Button></Link>
                            </Card.Body>
                        </Card></Col>

                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }} className='shadow-lg' />
                            <Card.Body>
                                <Card.Title>STUDENT</Card.Title>

                                <Button variant="outline-primary">SELECT</Button>
                            </Card.Body>
                        </Card></Col>

                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }} className='shadow-lg' />
                            <Card.Body>
                                <Card.Title>CLERK</Card.Title>

                                <Link to="/clerkHome"><Button variant="outline-primary" onClick={loading}>SELECT</Button></Link>
                            </Card.Body>
                        </Card></Col>
                </Row>
                <footer>
                    <Footer />
                </footer>
            </Container>
        </div>
    );
}

export default Users;