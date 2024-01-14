import Navbar from "react-bootstrap/Navbar"
import { PiStudentFill } from "react-icons/pi";
import AdminSideBar from "./AdminSideBar";
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"

const AdminHome = () => {
    return (
        <div className="text-center">
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <PiStudentFill size={45} />
                            STUDENT PROFILING SYSTEM
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
            <AdminSideBar />
        </div>
    );
}

export default AdminHome;