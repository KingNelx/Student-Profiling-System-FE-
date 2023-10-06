import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"
import LoadingAlert from "../Alerts/LoadingAlert";

const TopNav = () => {
    return (
        <Navbar className="bg-body-tertiary shadow-lg p-3">
            <Container className='flex justify-content-center'>
                <Link to="/" onClick={() => LoadingAlert()}>
                    <Navbar.Brand >
                        STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
    );
}

export default TopNav;