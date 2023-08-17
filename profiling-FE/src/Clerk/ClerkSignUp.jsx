import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import NavTitle from '../Components/NavTitle';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClerkSignUp = () => {

    const loading = () => {
        let timerInterval
        Swal.fire({
            title: 'LOADING PLEASE WAIT!',
            html: '..............',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

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
                        <Link to="/clerkHome"><Button variant='outline-success' onClick={loading}>Go Back</Button></Link>
                    </Form>
                </Container>
            </>
        </div>
    );
}

export default ClerkSignUp;