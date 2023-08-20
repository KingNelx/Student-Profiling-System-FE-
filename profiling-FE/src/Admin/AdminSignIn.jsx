import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AdminSignIn = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState({
        email: "",
        userName: "",
        password: ""
    })

    const {email, userName, password} = admin

    const onInputChange = (e) => {
        const {name, value} = e.target
        setAdmin({ ... admin, [name]: value.toUpperCase()})
    }

    const onChange = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.get("http://localhost:8080/admin/log-in", {params: admin})
            if(response.status == 200){
                navigate("/adminView")
            }
        }catch(error){
            alert(" EMAIL AND USERNAME DOES NOT EXIST ")
            console.log(" ERROR MESSAGE: " + error)
        }
    }

    return (
        <div>
            <>
                <Container>
                    <Form onSubmit={(e) => onChange(e)}>
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
                        <Button variant='outline-primary' type="submit" onClick={Loading}>Sign in</Button> {' '}
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