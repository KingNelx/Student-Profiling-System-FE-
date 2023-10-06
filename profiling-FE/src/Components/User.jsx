import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Icon from '../Images/icon.webp'
import { Link } from 'react-router-dom'
import LoadingAlert from '../Alerts/LoadingAlert'

const User = () => {
    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <Card style={{ width: '20rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={Icon} className='shadow-lg' />
                        <Card.Body>
                            <Card.Title>ADMIN</Card.Title>
                            <Link to='/admin-sign-in' ><Button variant="outline-primary" onClick = { () => LoadingAlert()}>Select</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={Icon} className='shadow-lg' />
                        <Card.Body>
                            <Card.Title>STUDENT</Card.Title>
                            <Link><Button variant="outline-primary">Select</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default User;
