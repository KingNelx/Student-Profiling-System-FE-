import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import NavTitle from '../Components/NavTitle';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';
import AccountSaved from '../Components/AccountSaved';
import Loading from '../Components/Loading';

const AdminSignUp = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: ""
    })
    

    const { firstName, lastName, email, userName, password } = admin

    const onInputChange = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value.toUpperCase() })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/admin/create-account", admin)
            if (response.status === 200) {
                navigate("/adminHome")
                window.location.reload()
            }
        } catch (error) {
            alert(" EMAIL and USERNAME ALREADY EXIST ")
            console.log(error)
        }
    }

  

    return (
        <div>
            <>
                {<NavTitle />}
                <Container className='mt-5'>
                    <Form onSubmit={(e) => onSubmit(e)} >
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First name"
                            className="mb-4"
                        >
                            <Form.Control
                                type={"text"}
                                value={firstName}
                                name="firstName"
                                required
                                onChange={(e) => onInputChange(e)}
                               
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Last name"
                            className="mb-4"
                        >
                            <Form.Control
                                type={"text"}
                                value={lastName}
                                name="lastName"
                                required
                                onChange={(e) => onInputChange(e)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-4"
                        >
                            <Form.Control
                                type={"email"}
                                value={email}
                                name="email"
                                required
                                onChange={(e) => onInputChange(e)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="User name"
                            className="mb-4"
                        >
                            <Form.Control
                                type={"text"}
                                value={userName}
                                name="userName"
                                required
                                onChange={(e) => onInputChange(e)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-4"
                        >
                            <Form.Control
                                type={"password"}
                                value={password}
                                name="password"
                                required
                                onChange={(e) => onInputChange(e)}
                            />
                        </FloatingLabel>
                        <Button variant='outline-primary' type="submit" onClick={AccountSaved}>Sign Up</Button> {' '}
                        <Link to="/adminHome"><Button variant='outline-success' onClick={Loading}>Go Back</Button></Link>
                    </Form>
                </Container>
            </>
        </div>
    );
}

export default AdminSignUp;