import TopNav from "./TopNav";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import homeLogo from '../Image/home-logo.png'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loading from '../Components/Loading'


const Users = () => {
    return (
        <div>
            <TopNav />
            <div className="text-center">

                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto', marginTop: '15vh', backgroundColor: 'burlywood' }}>
                                <Card.Img variant="top" src={homeLogo} className='shadow-lg' />
                                <Card.Body>
                                    <Card.Title>ADMIN</Card.Title>
                                    <Link to="/adminSignIn"><Button variant="primary" onClick={Loading}>SELECT</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto', marginTop: '15vh', backgroundColor: 'burlywood' }}>
                                <Card.Img variant="top" src={homeLogo} className='shadow-lg' />
                                <Card.Body>
                                    <Card.Title>CLERK</Card.Title>
                                    <Link to="/users"><Button variant="primary" onClick={Loading}>SELECT</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem', margin: 'auto', marginTop: '15vh', backgroundColor: 'burlywood' }}>
                                <Card.Img variant="top" src={homeLogo} className='shadow-lg' />
                                <Card.Body>
                                    <Card.Title>STUDENT</Card.Title>
                                    <Link to="/users"><Button variant="primary" onClick={Loading}>SELECT</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Container>

            </div>
        </div>
    );
}

export default Users;