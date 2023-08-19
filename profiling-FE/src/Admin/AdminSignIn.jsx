import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Loading from '../Components/Loading';

const AdminSignIn = () => {


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
                            <Form.Control type="email" />
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
                        <Button variant='outline-primary'>Sign in</Button> {' '}
                        <Link to="/"><Button variant='outline-success' onClick={Loading}>Go Back</Button> {' '}</Link>
                        <Link to="/adminSignUp" style={
                            { color: "red" }
                        } onClick={Loading}>No Account? Sign up now !.</Link>
                    </Form>
                    
                </Container>
            </>
        </div>
    );
}

export default AdminSignIn;