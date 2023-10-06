import TopNav from "../Components/TopNav";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'
import { Link } from "react-router-dom";
import axios, { HttpStatusCode } from 'axios'
import { useNavigate } from "react-router-dom";
import LoadingAlert from "../Alerts/LoadingAlert";
import LogInAlert from "../Alerts/LogInAlert";

const AdminSignUp = () => {

    const [admin, setAdminData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: ""
    })

    const navigate = useNavigate()

    const { firstName, lastName, email, userName, password } = admin

    const updateFormField = (e) => {
        const { name, value } = e.target
        setAdminData({ ...admin, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/admin/create-admin-account', admin)
            if (response.status === 200) {
                setAdminData(response.data)
                navigate("/admin-sign-in")
            }
        } catch (e) {
            alert(HttpStatusCode.BadRequest + " INTERNAL ERROR ")
            console.log(e)
        }
    }

    return (
        <>
            <TopNav />
            <h2 className='mt-5 text-center'>ADMIN SIGN UP</h2>
            <Container style={
                { marginTop: '10vh', textAlign: 'center', width: '70%' }
            }>
                <Form onSubmit={(e) => submitForm(e)}>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mb-3 shadow-lg"
                                label="FIRST NAME"
                            >
                                <Form.Control
                                    type={"text"}
                                    name='firstName'
                                    value={firstName}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className="mb-3 shadow-lg"
                                label="LAST NAME"
                            >
                                <Form.Control
                                    type={"text"}
                                    name='lastName'
                                    value={lastName}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className="mb-3 shadow-lg"
                                label="EMAIL ADDRESS"
                            >
                                <Form.Control
                                    type={"email"}
                                    name='email'
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
                                className="mb-3 shadow-lg"
                                label='USER NAME'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='userName'
                                    value={userName}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mb-3 shadow-lg"
                                label='PASSWORD'
                            >
                                <Form.Control
                                    type={"password"}
                                    name='password'
                                    value={password}
                                    required
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button variant='outline-primary' type="submit" onClick={() => LogInAlert()} >SUBMIT</Button> {" "}
                    <Link to="/admin-sign-in"><Button variant='outline-danger' onClick={ () => LoadingAlert()} >GO BACK</Button></Link>
                </Form>
            </Container>
        </>
    );
}

export default AdminSignUp;