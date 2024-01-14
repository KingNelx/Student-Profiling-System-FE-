import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import FreshmanData from "../../Modals/Data/FreshmanData";

const FreshmanPage = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand className="m-auto">
                        FRESHMAN STUDENTS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section className="mt-5">
                <Container>
                    <FreshmanData />
                </Container>
            </section>
        </div>
    );
}

export default FreshmanPage;