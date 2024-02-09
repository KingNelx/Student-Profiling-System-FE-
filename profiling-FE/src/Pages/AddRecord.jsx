import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

const AddRecord = () => {

    const backgroundStudent = "STUDENT BACKGROUND"
    const CourseInfo = "COURSE & SUBJECT INFORMATION"

    return (
        <div>
            <Container>
                <Form style={{ height: "400px", overflowX: "hidden" }}>
                    <p className="text-center fw-bold">{backgroundStudent}</p>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Firstname"
                                className="mb-3"
                            >
                                <Form.Control type="text" required placeholder="Firstname" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="MiddleInitial"
                                className="mb-3"
                            >
                                <Form.Control type="text" required placeholder="MiddleInitial" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Lastname"
                                className="mb-3"
                            >
                                <Form.Control type="text" required placeholder="Lastname" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student ID"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Student ID" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Date of Birth"
                                className="mb-3"
                            >
                                <Form.Control type="date" placeholder="Date of Birth" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Gender"
                                className="mb-3"
                            >
                                <Form.Select required>
                                    <option>Select</option>
                                    <option value={1}>MALE</option>
                                    <option value={2}>FEMALE</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Temporary Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Temporary Address" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Permanent Address"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Permanent Address" required />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Information"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Contact Information" required />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Academic Level"
                                className="mb-3"
                            >
                                <Form.Select>
                                    <option>Select</option>
                                    <option value={1}>Freshamn</option>
                                    <option value={2}>Sophomore</option>
                                    <option value={3}>Junior</option>
                                    <option value={4}>Senior</option>
                                    <option value={5}>Irregular</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <p className="text-center fw-bold">{CourseInfo}</p>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Academic Level"
                                className="mb-3"
                            >
                                <Form.Select>
                                    <option>Select</option>
                                    <option value={1}>Freshamn</option>
                                    <option value={2}>Sophomore</option>
                                    <option value={3}>Junior</option>
                                    <option value={4}>Senior</option>
                                    <option value={5}>Irregular</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default AddRecord;