import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Lottie from 'lottie-react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import male from "../../Animations/male.json"
import female from "../../Animations/female.json"
import ListOfStudents from "./ListOfStudents"

const TotalStudents = () => {
    return (
        <div className="text-center mt-3 mx-5">
            <Row>
                <Col className="mx-5">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body className="mx-5">
                            <Card.Title> MALE </Card.Title>
                            <Card.Text >
                                <Lottie
                                    animationData={male}
                                />
                            </Card.Text>
                            <Button variant="outline-primary"> VIEW </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "18rem" }}>
                        <Card.Body className="mx-5">
                            <Card.Title> FEMALE </Card.Title>
                            <Card.Text>
                                <Lottie
                                    animationData={female}
                                />
                            </Card.Text>
                            <Button variant="outline-primary"> VIEW </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ListOfStudents />
        </div>
    );
}

export default TotalStudents;