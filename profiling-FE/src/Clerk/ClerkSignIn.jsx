import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import sidelogo from '../Images/side-nav-logo.png';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';


const ClerkSignIn = () => {

    const navigate = useNavigate()

    const [clerk, setClerk] = useState({
        email: "",
        userName: "",
        password: ""
    })

    const { userName, email, password } = clerk

    const onInputChange = (e) => {
        const { name, value } = e.target
        setClerk({ ...clerk, [name]: value.toUpperCase() })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.get('http://localhost:8080/api/clerk/logInAsClerk', {params: clerk})
            if(response.status == 200){
                navigate('/clerkView')
            }else{
                alert(response.data)
            }
        }catch(error){
            console.log(" ERROR MESSAGE: " + error)
        }
    }


    const loadContent = () => {
        let timerInterval
        Swal.fire({
            title: 'Loading!',
            html: 'Please Wait!',
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
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }
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
                    CLERK SIGN IN
                </Navbar.Brand>
            </Navbar>
            <div className='container mt-5 py-5' style={{
                maxWidth: '400px', borderStyle: 'inset', borderWidth: '10px'
            }}>
                <>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <FloatingLabel
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type={"email"} placeholder="name@example.com" required name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <FloatingLabel

                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type={"userName"} placeholder="userName" required name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <FloatingLabel

                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type={"password"} placeholder="Password" required name='password' value={password} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <Button variant="outline-primary" type='submit' onClick={loadContent}>Log in</Button>{' '}
                        <Link to='/clerkSignUp' onClick={loadContent}> No Account?</Link>
                        <Link to='/' onClick={loadContent}> Go Back </Link>
                    </form>

                </>
            </div>
        </div>
    );
}

export default ClerkSignIn;