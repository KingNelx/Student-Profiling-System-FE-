import Card from "react-bootstrap/esm/Card"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { PiStudentFill } from "react-icons/pi";
import AdminSideBar from "./AdminSideBar";

const AdminHome = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Navbar.Brand>
                    <PiStudentFill size={45} />
                    {' '}
                    STUDENT PROFILING SYSTEM
                </Navbar.Brand>
            </Navbar>
            <AdminSideBar />
        </div>
    );
}

export default AdminHome;