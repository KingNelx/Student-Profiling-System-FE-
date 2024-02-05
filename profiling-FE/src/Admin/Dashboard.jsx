import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import MaleCount from "../Student/MaleCount";
import FemaleCount from "../Student/FemaleCount";
import StudentCount from "../Student/StudentCount";

const Dashboard = () => {
    return (
        <div style={{ flex: 1, overflow: 'auto', textAlign: 'center', marginLeft: '40px' }}>
            <Container>
                <Row>
                    <Col>
                        <MaleCount />
                    </Col>

                    <Col>
                        <FemaleCount />
                    </Col>

                    <Col>
                        <StudentCount />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;