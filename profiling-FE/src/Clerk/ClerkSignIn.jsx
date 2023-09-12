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

const ClerkSignIn = () => {

    const [clerkLog, setClerkLog] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: ""
    })

    const { firstName, lastName, email, userName, password } = clerkLog

    const updateFormField = (e) => {
        const { name, value } = e.target
        setClerkLog({ ...clerkLog, [name]: value.toUpperCase() })
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <TopNav />
            <div className='text-center'>
                <h3 className='mt-5'>CLERK SIGN IN</h3>
                <Form>
                    <Container>
                        <Row style={{ width: '50rem', margin: 'auto', marginTop: '10vh' }}>
                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='EMAIL ADDRESS'
                                    className='mb-3'
                                >
                                    <Form.Control type={"text"} placeholder='EMAIL ADDRESS' />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='USER NAME'
                                    className='mb-3'
                                >
                                    <Form.Control type={"text"} placeholder='USER NAME' />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    label='PASSWORD'
                                    className='mb-3'
                                >
                                    <Form.Control type={"text"} placeholder='PASSWORD' />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Button variant='outline-primary'>SUBMIT</Button>{" "}
                        <Link to='/clerkSignUp' variant="outline-primary" onClick={Loading}>No Account? Sign up.</Link>
                    </Container>

                </Form>
            </div>
        </div>
    );
}

export default ClerkSignIn;