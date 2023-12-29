import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import axios from "axios"
import Lottie from "lottie-react"
import signUpAnimated from "../Animations/signIn.json"
import { Link } from "react-router-dom"
import Loading from "../SweetAlerts/Loading"

const AdminSignUp = () => {

    const [admin, setAdmin] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate()

    const { email, userName, password, confirmPassword } = admin

    const updateFormFields = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post();
            if (result.status === 200) {
                setAdmin(result.data)
                navigate("/")
            }
        } catch (e) {
            alert(" WRONG CREDENTIALS " + e)
        }
    }

    return (
        <Container className="text-center mt-5">
            <Card>
                <Card.Text>
                    <Row>
                        <Col>
                            <Lottie
                                animationData={signUpAnimated}
                            />
                        </Col>
                        <Col>
                            <Form onSubmit={(e) => submitForm(e)}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-4 mt-5 mx-2"
                                    label="Email Address"
                                >
                                    <Form.Control type={"email"}
                                        name="email"
                                        value={email}
                                        placeholder="Email Address"
                                        onChange={(e) => updateFormFields(e)}
                                        required />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-4 mt-3 mx-2"
                                    label="Username"
                                >
                                    <Form.Control type={"text"}
                                        name="userName"
                                        value={userName}
                                        placeholder="Username"
                                        onChange={(e) => updateFormFields(e)}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-4 mt-3 mx-2"
                                    label="Password"
                                >
                                    <Form.Control type={"password"}
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => updateFormFields(e)}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-4 mt-3 mx-2"
                                    label="Confirm Password"
                                >
                                    <Form.Control type="Password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={(e) => updateFormFields(e)}
                                        required
                                    />
                                </FloatingLabel>
                                <Button type="submit" variant="outline-primary"> Sign Up </Button>
                            </Form>
                            <div>
                                <Link to="/adminPage" onClick={Loading}> Already Have an account? Sign in here </Link>
                            </div>
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </Container>
    );
}

export default AdminSignUp;