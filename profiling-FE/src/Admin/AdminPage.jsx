import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import signInAnimated from "../Animations/signIn.json"
import Lottie from "lottie-react"
import AdminSignIn from "./AdminSignIn"

const AdminPage = () => {
    return (
        <Container className="text-center mt-5">
            <Card>
                <Card.Text>
                    <Row>
                        <Col>
                            <Lottie
                                animationData={signInAnimated}
                            />
                        </Col>
                        <Col>
                            <AdminSignIn />
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </Container>
    );
}

export default AdminPage;