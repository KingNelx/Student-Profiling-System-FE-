import Navbar from "react-bootstrap/Navbar"
import { PiStudentFill } from "react-icons/pi";
import AdminSideBar from "./AdminSideBar";
import { Link } from "react-router-dom"

const AdminHome = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Link to="/">
                    <Navbar.Brand>
                        <PiStudentFill size={45} />
                        {' '}
                        STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Link>
            </Navbar>
            <AdminSideBar />
        </div>
    );
}

export default AdminHome;