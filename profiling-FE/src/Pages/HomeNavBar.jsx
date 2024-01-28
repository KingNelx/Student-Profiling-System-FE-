import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Forms from "../Components/Forms";

const HomeNavBar = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg p-2">
                <Container>
                    <Navbar.Brand className="m-auto ">
                        STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div style={{
                marginTop: "5vh"
            }}>
                <Forms />
            </div>
        </div>
    );
}

export default HomeNavBar;