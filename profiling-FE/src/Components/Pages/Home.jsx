import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Lottie from 'lottie-react'
import test1 from "../../Animations/bg-animation.json"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import Loading from "../../SweetAlerts/Loading"

const Home = () => {
    return (
        <Container className="text-center mt-5">
            <Card>
                <Card.Text>
                    <Row>
                        <Col>
                            <Lottie
                                animationData={test1}
                            />
                        </Col>
                        <Col>
                            <Link to="/adminPage"><Button variant="outline-primary"
                            style={{marginTop: "40vh"}} onClick={Loading}
                            >GET STARTED</Button></Link>
                            <div className = "mt-3">
                               <p className="bold"> WELCOME TO STUDENT PROFILING SYSTEM </p>
                            </div>
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </Container>
    );
}

export default Home;