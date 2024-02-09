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
                        <Button variant='outline-primary'>Select</Button>
                    </Col>

                    <Col>
                        <p>{sophomore_}</p>
                        <Lottie
                            animationData={sophomore}
                        />
                        <Button variant='outline-primary'>Select</Button>
                    </Col>

                    <Col>
                        <p>{junior_}</p>
                        <Lottie
                            animationData={junior}
                        />
                        <Button variant='outline-primary'>Select</Button>
                    </Col>

                    <Col>
                        <p>{senior_}</p>
                        <Lottie
                            animationData={senior}
                        />
                        <Button variant='outline-primary'>Select</Button>
                    </Col>

                    <Col>
                        <p>{irregular_}</p>
                        <Lottie
                            animationData={irregular}
                        />
                        <Button variant='outline-primary'>Select</Button>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default AcademicLists;