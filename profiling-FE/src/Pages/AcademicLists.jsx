import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Lottie from "lottie-react"
import freshman from "../Animations/freshman.json"
import sophomore from "../Animations/sophomore.json"
import junior from "../Animations/junior.json"
import senior from "../Animations/senior.json"
import irregular from "../Animations/irregular.json"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import LoadingInterval from "../Alerts/LoadingInterval"

const AcademicLists = () => {

    const freshman_ = "Freshman"
    const sophomore_ = "Sophomore"
    const junior_ = "Junior"
    const senior_ = "Senior"
    const irregular_ = "Irregular"

    return (
        <div className="text-center">
            <Container>
                <Row>
                    <Col>
                        <p>{freshman_}</p>
                        <Lottie
                            animationData={freshman}
                        />
                        <Link to="/academic-levels/freshman">
                            <Button variant='outline-primary' onClick={LoadingInterval}>Select</Button>
                        </Link>

                    </Col>

                    <Col>
                        <p>{sophomore_}</p>
                        <Lottie
                            animationData={sophomore}
                        />
                        <Link to="/academic-levels/sophomore">
                            <Button variant='outline-primary' onClick={LoadingInterval}>Select</Button>
                        </Link>
                    </Col>

                    <Col>
                        <p>{junior_}</p>
                        <Lottie
                            animationData={junior}
                        />
                        <Link to="/academic-levels/junior">
                            <Button variant='outline-primary' onClick={LoadingInterval}>Select</Button>
                        </Link>
                    </Col>

                    <Col>
                        <p>{senior_}</p>
                        <Lottie
                            animationData={senior}
                        />
                        <Link to="/academic-levels/senior">
                            <Button variant='outline-primary' onClick={LoadingInterval}>Select</Button>
                        </Link>
                    </Col>

                    <Col>
                        <p>{irregular_}</p>
                        <Lottie
                            animationData={irregular}
                        />
                        <Link to="/academic-levels/irregular">
                            <Button variant='outline-primary' onClick={LoadingInterval}>Select</Button>
                        </Link>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default AcademicLists;