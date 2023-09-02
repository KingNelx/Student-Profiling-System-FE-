import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ClerkSignIn = () => {

    const [clerk, setClerk] = useState({
        email: "",
        userName: "",
        password: ""
    }) 

    const {email, userName, password} = clerk

    const onInputChange = (e) => {
        const {name, value} = e.target
        setClerk({... clerk, [name]: value.toUpperCase()})
    }

    return (
        <div>
            <>
                <Container>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-4"
                        >
                            <Form.Control 
                            type={"email"}
                            value={email}
                            name="email"
                            onChange={(e) => onInputChange(e)}
                            />
                        </FloatingLabel>
                        
                        <FloatingLabel
                            controlId="floatingInput"
                            label="User name"
                            className="mb-4"
                        >
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-4"
                        >
                            <Form.Control type="password" />
                        </FloatingLabel>
                        <Button variant='outline-primary' type="submit" onClick={Loading}>Sign in</Button> {' '}
                        <Link to="/"><Button variant='outline-success' onClick={Loading}>Go Back</Button> {' '}</Link>
                        <Link to="/clerkSignUp" style={
                            { color: "red" }
                        } onClick={Loading}>No Account? Sign up now !.</Link>
                    </Form>
                    
                </Container>
            </>
        </div>
    );
}

export default ClerkSignIn;