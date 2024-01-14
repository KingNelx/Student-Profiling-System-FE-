import { Navbar, Container } from "react-bootstrap"
import SeniorData from "../../Modals/Data/SeniorData";

const SeniorPage = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand className="m-auto">
                        SENIOR STUDENTS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section className="mt-5">
                <Container>
                    <SeniorData />
                </Container>
            </section>
        </div>
    );
}

export default SeniorPage;