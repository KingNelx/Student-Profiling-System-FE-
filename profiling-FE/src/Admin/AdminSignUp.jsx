import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import NavTitle from '../Components/NavTitle';

const AdminSignUp = () => {
    return (
        <div>
            <>
                {<NavTitle />}
                <Container className='mt-5'>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First name"
                            className="mb-4"
                        >
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Last name"
                            className="mb-4"
                        >
                            <Form.Control type="text" />
                        </FloatingLabel>
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
                        <Button variant='outline-primary'>Sign Up</Button> {' '}
                    </Form>
                </Container>
            </>
        </div>
    );
}

export default AdminSignUp;