import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ListOfStudents = () => {
    return (
        <Container className='text-center' style={
            { marginTop: "10vh" }
        }>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', margin: "auto" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>MALE STUDENTS</Card.Title>
                            <Card.Text>
                               THERE ARE 100 TOTAL STUDENTS
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', margin: "auto" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>FEMALE STUDENTS</Card.Title>
                            <Card.Text>
                               THERE ARE 100 TOTAL STUDENTS
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' ,margin: "auto"}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>ALL STUDENTS</Card.Title>
                            <Card.Text>
                               THERE ARE 100 TOTAL STUDENTS
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ListOfStudents;