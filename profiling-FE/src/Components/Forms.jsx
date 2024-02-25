import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import SignInButton from "./SignInButton"
import Lottie from "lottie-react"
import logIn from "../Animations/log-in.json"
import SignUpButton from "./SignUpButton"
import FooterMessage from "./FooterMessage"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import ErrorNotExisted from "../Alerts/ErrorNotExisted"
import { useForm } from "react-hook-form"

const Forms = () => {

    const navigate = useNavigate()

    const [signUp, setAccount] = useState({
        email: "",
        userName: "",
        password: "",

    })

    const { email, userName, password } = signUp

    const updateFormFields = (e) => {
        const { name, value } = e.target
        setAccount({ ...signUp, [name]: value.toUpperCase() })
    }

    const submitForm = async () => {
        
        try {
            const response = await axios.get("http://localhost:8080/clerk/sign-in", { params: signUp })
            if (response.status === 200) {
                navigate("/admin-home")
            }
        } catch (e) {
            console.log(" SOMETHING WENT WRONG " + e)
            setTimeout(ErrorNotExisted())
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                        <Col style={
                            { marginTop: "15vh" }
                        }>
                            <Form className="mt-5"  onSubmit={handleSubmit((e) => submitForm(e))} >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Email Address"
                                >
                                    <Form.Control type={"email"} required placeholder="Email Address"
                                        {...register("email")}
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
                                         {...register("userName")}
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
                                         {...register("password")}
                                        value={password}
                                        autoSave="off"
                                        autoComplete="off"
                                        onChange={(e) => updateFormFields(e)}
                                    />
                                </FloatingLabel>



                                {/* <FloatingLabel
                                    controlId="floatingInput"
                                    className="mb-3 mt-2 m-3"
                                    label="Confirm Password"
                                >
                                    <Form.Control type={"text"} required placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => updateFormFields(e)}
                                    />
                                </FloatingLabel> */}
                                <div className="mb-3 mt-3">
                                    <SignInButton /> {" "}
                                    <SignUpButton />
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Card>
                <FooterMessage />
            </Container>
        </div>
    );
}

export default Forms;
