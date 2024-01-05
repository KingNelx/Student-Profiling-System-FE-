import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormControl from "react-bootstrap/FormControl"
import { FloatingLabel } from "react-bootstrap"

const AddStudent = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Row>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="FIRST NAME"
                            >
                                <Form.Control type={"text"} placeholder="First name" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="MIDDLE INITIAL"
                            >
                                <Form.Control type={"text"} placeholder="Middle Initial" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="LAST NAME"
                            >
                                <Form.Control type={"text"} placeholder="Last name" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="STUDENT ID"
                            >
                                <Form.Control type={"text"} placeholder="Student ID" required />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Row>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="DATE OF BIRTH"
                            >
                                <Form.Control type={"date"} placeholder="Date of Birth" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="GENDER"
                            >
                                <Form.Control type={"text"} placeholder="Gender" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="TEMPORARY ADDRESS"
                            >
                                <Form.Control type={"text"} placeholder="Temporary Address" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="PERMANENT ADDRESS"
                            >
                                <Form.Control type={"text"} placeholder="Permanent Address" required />
                            </FloatingLabel>
                        </Col>

                    </Row>


                    <Row>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="CONTACT INFORMATION"
                            >
                                <Form.Control type={"text"} placeholder="Contact Information" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="ACADEMIC LEVEL"
                            >
                                <Form.Control type={"text"} placeholder="Academic Level" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE CODE"
                            >
                                <Form.Control type={"text"} placeholder="Course Code" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE TITLE"
                            >
                                <Form.Control type={"text"} placeholder="Course Title" required />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Row>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE DESCRIPTION"
                            >
                                <Form.Control type={"text"} placeholder="Course Description" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE INSTRUCTOR"
                            >
                                <Form.Control type={"text"} placeholder="Course Instructor" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE SCHEDULE"
                            >
                                <Form.Control type={"text"} placeholder="Course Schedule" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE SEMESTER"
                            >
                                <Form.Control type={"text"} placeholder="Course Semester" required />
                            </FloatingLabel>
                        </Col>

                    </Row>

                </Form>
            </Container>
        </div>
    );
}

export default AddStudent;