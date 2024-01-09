import Lottie from "lottie-react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import freshman from "../Animations/freshman.json"
import sophomore from "../Animations/sophomore.json"
import junior from "../Animations/junior.json"
import senior from "../Animations/senior.json"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const AcademicsList = () => {
    return (
        <div className="text-center">
            <Container>
                <Row>
                    <Col>
                        Freshman
                        <Lottie
                            animationData={freshman}
                        />
                        <Button variant='outline-primary'>SELECT</Button>
                    </Col>

                    <Col>
                        Sophomore
                        <Lottie
                            animationData={sophomore}
                        />
                        <Button variant='outline-primary'>SELECT</Button>
                    </Col>

                    <Col>
                        Junior
                        <Lottie
                            animationData={junior}
                        />
                        <Button variant='outline-primary'>SELECT</Button>
                    </Col>

                    <Col>
                        Senior
                        <Lottie
                            animationData={senior}
                        />
                        <Button variant='outline-primary'>SELECT</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AcademicsList;