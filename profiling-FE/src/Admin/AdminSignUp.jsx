import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import sidelogo from '../Images/side-nav-logo.png'
const AdminSignUp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='shadow-lg'>
                <Navbar.Brand className='mx-3'>
                    <img
                        alt=""
                        src={sidelogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ADMIN SIGN UP
                </Navbar.Brand>
            </Navbar>
            <div className='container mt-5 py-5' style={{
                maxWidth: '400px', borderStyle: 'inset', borderWidth: '10px'
            }}>
                <>
                    <form action="">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Firstname"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Firstname" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Lastname"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Lastname" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Username" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type={"email"} placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type={"password"} placeholder="Password" required />
                        </FloatingLabel>

                        <Button variant="outline-primary">Log in</Button>{' '}
                        <Link> No Account?</Link>

                    </form>

                </>
            </div>
        </div>
    );
}

export default AdminSignUp;