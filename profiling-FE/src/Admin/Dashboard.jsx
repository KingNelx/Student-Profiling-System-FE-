import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import MaleCount from "../Student/MaleCount";
import FemaleCount from "../Student/FemaleCount";
import StudentCount from "../Student/StudentCount";
import FreshmanCount from "../Student/FreshmanCount";
import IrregularCount from "../Student/IrregularCount";
import SophomoreCount from "../Student/SophomoreCount";
import JuniorCount from "../Student/JuniorCount";
import SeniorCount from "../Student/SeniorCount";
import ReturneeCount from "../Student/ReturneeCount";

const Dashboard = () => {
    return (
        <>
            <p className="fw-bold text-start mx-5 px-2">CURRENT ENROLLMENT SUMMARY</p>
            <div style={{ flex: 1, overflow: 'auto', textAlign: 'center', marginLeft: '40px', marginBottom: '10vh' }}>
                <Container>
                    <Row>
                        <Col>
                            <StudentCount />
                        </Col>
                        
                        <Col>
                            <MaleCount />
                        </Col>

                        <Col>
                            <FemaleCount />
                        </Col>


                    </Row>

                    <Row>
                        <Col>
                            <FreshmanCount />
                        </Col>

                        <Col>
                            <SophomoreCount />
                        </Col>

                        <Col>
                            <JuniorCount />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <SeniorCount />
                        </Col>

                        <Col>
                            <IrregularCount />
                        </Col>

                        <Col>
                            <ReturneeCount />
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default Dashboard;