import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import SignInButton from "./SignInButton"
import Lottie from "lottie-react"
import logIn from "../Animations/log-in.json"

const Forms = () => {
    return (
        <div className="text-center">
            <Container>
                <Card className="shadow-lg">
                    <Row>
                        <Col>
                            <Lottie
                                animationData={logIn}
                            />
                        </Col>
                        <Col>
                            <Form className="mt-5">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Email Address"
                                >
                                    <Form.Control type={"email"} required placeholder="Email Address" />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Username"
                                >
                                    <Form.Control type={"text"} required placeholder="Username" />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Password"
                                >
                                    <Form.Control type={"password"} required placeholder="Password" />
                                </FloatingLabel>



                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Confirm Password"
                                >
                                    <Form.Control type={"text"} required placeholder="Confirm Password" />
                                </FloatingLabel>
                                <div className="mb-3 mt-3">
                                    <SignInButton />
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default Forms;
