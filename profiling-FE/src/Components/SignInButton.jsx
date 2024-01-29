import Button from "react-bootstrap/Button"
import LogInSuccess from "../Alerts/LogInSuccess";

const SignInButton = () => {
    return (
        <Button type="submit" variant="outline-primary" onClick={LogInSuccess}>
            SIGN IN
        </Button>
    )
}

export default SignInButton;