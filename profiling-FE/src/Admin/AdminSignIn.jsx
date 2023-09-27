import TopNav from "../Components/TopNav";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useState } from 'react'
import axios, { HttpStatusCode } from 'axios'
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {

    const navigate = useNavigate()

    const [admin, adminSignIn] = useState({
        email: "",
        userName: "",
        password: "",
    })

    const { email, userName, password } = admin

    const updateFormField = (e) => {
        const { name, value } = e.target
        adminSignIn({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.get('http://localhost:8080/admin/admin-login', { params: admin })
            if (response.status === 200) {
                navigate("/admin-home")
            }
        } catch (e) {
            alert(HttpStatusCode.BadRequest + " INTERNAL ERROR ")
            console.log(e)
        }
    }
    return (
        <>
            <TopNav />
            <h2 className='mt-5 text-center'>ADMIN SIGN IN</h2>
            <Form onSubmit={(e) => submitForm(e)}>
                <Container style={
                    { marginTop: '10vh', textAlign: 'center', width: '40%' }
                }>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3 shadow-lg'
                                label='EMAIL ADDRESS'
                            >
                                <Form.Control
                                    type={"email"}
                                    name="email"
                                    value={email}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3 shadow-lg'
                                label='USERNAME'
                            >
                                <Form.Control
                                    type={"text"}
                                    name="userName"
                                    value={userName}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3 shadow-lg'
                                label="PASSWORD"
                            >
                                <Form.Control
                                    type={"password"}
                                    name="password"
                                    value={password}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button type="submit" variant='outline-primary' className='shadow-lg'> Sign in </Button> {" "}
                    <Link to="/admin-sign-up" > No Account?  Sign up. </Link>
                </Container>
            </Form>
        </>
    );
}

export default AdminSignIn;