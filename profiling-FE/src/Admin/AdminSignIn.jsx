import Form from "react-bootstrap/esm/Form"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel"
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../SweetAlerts/Loading"    
import SignInSuccess from "../SweetAlerts/SignInSuccess"

const AdminSignIn = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState({
        email: "",
        userName: "",
        password: "",
    })

    const { email, userName, password } = admin

    const updateFormFields = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get("http://localhost:8080/clerk/sign-in", { params: admin })
            if (response.status === 200) {
                setAdmin(response.data)
                navigate("/adminHome")
            }
        } catch (e) {
            alert(" WRONG CREDENTIALS " + e)
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => submitForm(e)}>
                <FloatingLabel
                    controlId="floatingInput"
                    className="mb-4 mt-5"
                    label="Email Address"
                >
                    <Form.Control type={"email"}
                        name="email"
                        value={email}
                        onChange={(e) => updateFormFields(e)}
                        required
                        placeholder="Email Address" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    className="mb-4 mt-4"
                    label="Username"
                >
                    <Form.Control type={"text"}
                        name="userName"
                        value={userName}
                        onChange={(e) => updateFormFields(e)}
                        required
                        placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    className="mb-4 mt-4"
                    label="Password"
                >
                    <Form.Control type={"password"}
                        name="password"
                        value={password}
                        onChange={(e) => updateFormFields(e)}
                        required
                        placeholder="Password" />
                </FloatingLabel>

                <Button variant="outline-primary" type="submit" onClick={SignInSuccess}>Sign In</Button>
            </Form>
            <div>
                <Link to="/adminSignUp" onClick={Loading} >No Account? Sign Up Here.</Link>
            </div>

        </Container>
    );
}

export default AdminSignIn;