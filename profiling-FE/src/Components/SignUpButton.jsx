import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import LoadingInterval from "../Alerts/LoadingInterval";


const SignUpButton = () => {
    return (
        <Link to="/sign-up">
            <Button variant="outline-danger" onClick={LoadingInterval}>
                SIGN UP
            </Button>
        </Link>
    );
}

export default SignUpButton;