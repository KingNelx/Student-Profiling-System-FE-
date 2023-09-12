import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import TopNav from '../Components/TopNav'
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Success from '../Components/Success'

const AdminSignIn = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: ""
    })

    const { firstName, lastName, email, userName, password } = admin

    const updateFormField = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/admin/create-admin-account", admin );
            if (response.status === 200) {
                navigate("/adminSignIn")
            }
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e);
            alert(" ERROR MESSAGE: " + e);
        }
    }

    return (
        <div>
            <TopNav />
            <Form onSubmit={(e) => submitForm(e)}>
                <Container className='mt-5'>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="FIRST NAME"
                                className="mb-3"
                            >
                                <Form.Control
                                    type={"text"}
                                    value={firstName}
                                    name="firstName"
                                    onChange={(e) => updateFormField(e)}
                                    placeholder='FIRST NAME' />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="LAST NAME"
                                className="mb-3"
                            >
                                <Form.Control
                                    type={"text"}
                                    value={lastName}
                                    name="lastName"
                                    onChange={(e) => updateFormField(e)}
                                    placeholder="LAST NAME" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="EMAIL"
                                className="mb-3"
                            >
                                <Form.Control
                                    type={"email"}
                                    value={email}
                                    name="email"
                                    onChange={(e) => updateFormField(e)}
                                    placeholder="EMAIL ADDRESS" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="USER NAME"
                                className="mb-3"
                            >
                                <Form.Control
                                    type={"text"}
                                    value={userName}
                                    name="userName"
                                    onChange={(e) => updateFormField(e)}
                                    placeholder="USER NAME" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="PASSWORD"
                                className="mb-3"
                            >
                                <Form.Control
                                    type={"password"}
                                    value={password}
                                    name="password"
                                    onChange={(e) => updateFormField(e)}
                                    placeholder="PASSWORD" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button type="submit" variant="outline-primary" onClick={Success}> REGISTER </Button>{" "}
                </Container>
            </Form>
        </div>
    );
}

export default AdminSignIn;