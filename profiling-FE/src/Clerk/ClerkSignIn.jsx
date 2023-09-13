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
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ClerkSignIn = () => {

    const nav = useNavigate()

    const [clerkLog, setClerkLog] = useState({
        email: "",
        userName: "",
        password: ""
    })

    const { email, userName, password } = clerkLog

    const updateFormField = (e) => {
        const { name, value } = e.target
        setClerkLog({ ...clerkLog, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get('http://localhost:8080/clerk/clerkLogIn', { params: clerkLog });
            if (response.status === 200) {
                nav('/clerkHome')
            }
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e);
            alert(" ERROR MESSAGE: " + e);
        }
    }

    return (
        <div>
            <TopNav />
            <div className='text-center'>
                <h3 className='mt-5'>CLERK SIGN IN</h3>
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
                                        type={"email"}
                                        name="email"
                                        value={email}
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
                                        name="userName"
                                        value={userName}
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
                                        name="password"
                                        onChange={(e) => updateFormField(e)}
                                        value={password}
                                        placeholder='PASSWORD' />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Button type="submit" variant='outline-primary' onClick={Loading}>SUBMIT</Button>{" "}
                        <Link to="/"><Button variant="outline-success" onClick={Loading}> GO BACK </Button></Link> {" "}
                        <Link to='/clerkSignUp' variant="outline-primary" onClick={Loading}>No Account? Sign up.</Link>
                    </Container>

                </Form>
            </div>
        </div>
    );
}

export default ClerkSignIn;