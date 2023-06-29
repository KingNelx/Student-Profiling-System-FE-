import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import sidelogo from '../Images/side-nav-logo.png'
import Swal from 'sweetalert2'
import axios from "axios"
import { useState } from 'react';


const AdminSignUp = () => {

    let navigate = useNavigate();

    const [admin, setAdmin] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    })

    const { firstName, lastName, userName, email, password } = admin

    const initialFormData = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialFormData);


    const onInputChange = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value.toUpperCase() })
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/api/admin/createAdminAccount", admin)
            if (response.status == 200) {
                alert(" ADMIN ACCOUNT CREATED ")
                navigate("/adminSignIn")
                setFormData(initialFormData);
            }
        } catch (error) {
            alert(" ADMIN ACCOUNT ALREADY EXISTED ")
        }
    };

    const saveData = async () => {
       await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'YOUR DATA HAS BEEN SAVED',
            showConfirmButton: false,
            timer: 3000
        })
    }
    

    const loadContent = async () => {
        let timerInterval
        await Swal.fire({
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
                    ADMIN SIGN UP
                </Navbar.Brand>
            </Navbar>
            <div className='container mt-5 py-5' style={{
                maxWidth: '400px', borderStyle: 'inset', borderWidth: '10px'
            }}>
                <>
                    <form onSubmit={(e) => onSubmit(e)}>

                        <FloatingLabel

                            label="Firstname"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Firstname" name='firstName' required value={firstName} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <FloatingLabel

                            label="Lastname"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Lastname" name='lastName' required value={lastName} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>
                        <FloatingLabel

                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder="Username" required name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <FloatingLabel

                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type={"email"} placeholder="name@example.com" required name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <FloatingLabel

                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type={"password"} placeholder="Password" required name='password' value={password} onChange={(e) => onInputChange(e)} />
                        </FloatingLabel>

                        <Button variant="outline-primary" type='submit' onClick={saveData}>Register</Button>
                        <Link to='/adminSignIn' onClick={loadContent}> Go Back </Link>

                    </form>

                </>
            </div>
        </div>
    );
}

export default AdminSignUp;