import { Navbar, Container } from "react-bootstrap";
import SophomoreData from "../../Modals/Data/SophomoreData";

const SophomorePage = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand className="m-auto">
                        SOPHOMORE STUDENTS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section className="mt-5">
                <Container>
                    <SophomoreData />
                </Container>
            </section>
        </div>
    );
}

export default SophomorePage;