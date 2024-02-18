import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Lottie from "lottie-react"
import logIn from "../Animations/log-in.json"
import FooterMessage from "./FooterMessage"
import Button from "react-bootstrap/Button"
import SuccessMessage from "../Alerts/SuccessMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ErrorMessage from "../Alerts/ErrorMessage"
import { Link } from "react-router-dom"
import LoadingInterval from "../Alerts/LoadingInterval"


const SignUpForm = () => {

    const navigate = useNavigate()

    const [signUp, setAccount] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const { email, userName, password, confirmPassword } = signUp

    const updateFormFields = (e) => {
        const { name, value } = e.target
        setAccount({ ...signUp, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const reponse = await axios.post("http://localhost:8080/clerk/create-account", signUp)
            if (reponse.status === 200) {
                navigate("/")
            }
        } catch (e) {
            console.log(" SOMETHING WENT WRONG: " + e)
            setTimeout(ErrorMessage(), 7000)
        }
    }
D
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg p-2">
                <Container>
                    <Navbar.Brand className="m-auto ">
                        STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div style={{
                marginTop: "5vh"
            }}>
                <Container>
                    <Card className="shadow-lg">
                        <Row>
                            <Col>
                                <Lottie
                                    animationData={logIn}
                                />
                            </Col>
                            <Col>
                                <Form className="mt-5" onSubmit={(e) => submitForm(e)}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        className="mb-3 mt-2 m-3"
                                        label="Email Address"
                                    >
                                        <Form.Control type={"email"} required placeholder="Email Address"
                                            name="email"
                                            value={email}
                                            autoSave="off"
                                            autoComplete="off"
                                            onChange={(e) => updateFormFields(e)}
                                        />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        className="mb-3 mt-2 m-3"
                                        label="Username"
                                    >
                                        <Form.Control type={"text"} required placeholder="Username"
                                            name="userName"
                                            value={userName}
                                            autoSave="off"
                                            autoComplete="off"
                                            onChange={(e) => updateFormFields(e)}
                                        />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        className="mb-3 mt-2 m-3"
                                        label="Password"
                                    >
                                        <Form.Control type={"password"} required placeholder="Password"
                                            name="password"
                                            value={password}
                                            autoSave="off"
                                            autoComplete="off"
                                            onChange={(e) => updateFormFields(e)}
                                        />
                                    </FloatingLabel>



                                    <FloatingLabel
                                        controlId="floatingInput"
                                        className="mb-3 mt-2 m-3"
                                        label="Confirm Password"
                                    >
                                        <Form.Control type={"password"} required placeholder="Confirm Password"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            autoSave="off"
                                            autoComplete="off"
                                            onChange={(e) => updateFormFields(e)}
                                        />
                                    </FloatingLabel>
                                    <div className="mb-3 mt-3 text-center">
                                        <Button type="submit" variant="outline-primary" onClick={SuccessMessage}> SIGN UP </Button>
                                          {" "}
                                        <Link to="/"><Button variant="outline-danger" onClick={LoadingInterval}> GO BACK </Button></Link>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                    <FooterMessage />
                </Container>
            </div>
        </div>
    );
}

export default SignUpForm;