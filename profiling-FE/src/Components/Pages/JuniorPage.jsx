import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import JuniorData from "../../Modals/Data/JuniorData";
import Button from "react-bootstrap/Button"

const JuniorPage = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand className="m-auto">
                        JUNIOR STUDENTS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section className="mt-5">
                <Container>
                    <JuniorData />
                </Container>
            </section>
        </div>
    );
}

export default JuniorPage;