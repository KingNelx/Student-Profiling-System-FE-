import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import logo from '../Images/user.jpg'

const Users = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }}className='shadow-lg' />
                            <Card.Body>
                                <Card.Title>ADMIN</Card.Title>
                               
                                <Button variant="outline-primary">SELECT</Button>
                            </Card.Body>
                        </Card></Col>

                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }} className='shadow-lg'  />
                            <Card.Body>
                                <Card.Title>STUDENT</Card.Title>
                               
                               <Button variant="outline-primary">SELECT</Button>
                            </Card.Body>
                        </Card></Col>

                    <Col>
                        <Card style={{ width: '18rem', margin: "auto" }}>
                            <Card.Img variant="top" src={logo} style={{
                                height: "40vh",
                            }}  className='shadow-lg' />
                            <Card.Body>
                                <Card.Title>CLERK</Card.Title>
                                
                               <Button variant="outline-primary">SELECT</Button>
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Users;