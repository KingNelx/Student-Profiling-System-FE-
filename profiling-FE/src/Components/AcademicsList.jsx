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
import Loading from "../SweetAlerts/Loading";

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
                        <Link to="/freshman"><Button variant='outline-primary' onClick={Loading}>SELECT</Button></Link>
                    </Col>

                    <Col>
                        Sophomore
                        <Lottie
                            animationData={sophomore}
                        />
                        <Link to="/sophomore"><Button variant='outline-primary' onClick={Loading}>SELECT</Button></Link>
                    </Col>

                    <Col>
                        Junior
                        <Lottie
                            animationData={junior}
                        />
                        <Link to="/junior"><Button variant='outline-primary' onClick={Loading}>SELECT</Button></Link>
                    </Col>

                    <Col>
                        Senior
                        <Lottie
                            animationData={senior}
                        />
                        <Link to="/senior"><Button variant='outline-primary' onClick={Loading}>SELECT</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AcademicsList;