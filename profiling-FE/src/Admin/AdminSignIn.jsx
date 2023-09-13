import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import TopNav from "../Components/TopNav";
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Loading from '../Components/Loading'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminSignIn = () => {


    const nav = useNavigate();

    const [adminLog, setAdminLog] = useState({
        email: "",
        userName: "",
        password: ""
    })

    const { email, userName, password } = adminLog

    const updateFormField = (e) => {
        const { name, value } = e.target
        setAdminLog({ ...adminLog, [name]: value.toUpperCase() });
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get('http://localhost:8080/admin/admin-login', {params: adminLog})
            if (response.status === 200) {
                nav("/adminHome")
            }
        } catch (e) {
            alert(" ERROR MESSAGE: " + e);
            console.log(" ERROR MESSAGE: " + e);
        }
    }

    return (
        <div>
            <TopNav />
            <div className='text-center'>
                <h3 className='mt-5'>ADMIN SIGN IN</h3>
                <Form onSubmit={(e) => submitForm(e)}>
                    <Container>
                        <Row style={{ width: '50rem', margin: 'auto', marginTop: '10vh' }}>
                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='EMAIL ADDRESS'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        type={"text"}
                                        value={email}
                                        name="email"
                                        onChange={(e) => updateFormField(e)}
                                        placeholder='EMAIL ADDRESS' />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='USER NAME'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        type={"text"}
                                        value={userName}
                                        name="userName"
                                        onChange={(e) => updateFormField(e)}
                                        placeholder='USER NAME' />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='PASSWORD'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        type={"password"}
                                        value={password}
                                        name="password"
                                        onChange={(e) => updateFormField(e)}
                                        placeholder='PASSWORD' />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Button type="submit" variant='outline-primary' onClick={Loading}>SUBMIT</Button>{" "}
                        <Link to="/" ><Button variant="outline-success" onClick={Loading}> GO BACK </Button> </Link>{" "}
                        <Link to='/adminSignUp' variant="outline-primary" onClick={Loading}>No Account? Sign up.</Link>
                    </Container>

                </Form>
            </div>
        </div>
    );
}

export default AdminSignIn;