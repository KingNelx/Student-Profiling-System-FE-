import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

const AddStudent = () => {

    const navigate = useNavigate()

    const [student, setStudent] = useState({
        firstName: "",
        middleInitial: "",
        lastName: "",
        studentId: "",
        dateOfBirth: "",
        gender: "",
        temporaryAddress: "",
        permanentAddress: "",
        contactInformation: "",
        academicLevel: "",
        myCourse: {
            courseCode: "",
            courseTitle: "",
            description: "",
            instructor: "",
            schedule: "",
            semester: ""
        }
    })

    const {
        firstName,
        middleInitial,
        lastName,
        studentId,
        dateOfBirth,
        gender,
        temporaryAddress,
        permanentAddress,
        contactInformation,
        academicLevel,
        courseCode,
        courseTitle,
        description,
        instructor,
        schedule,
        semester
    } = student;

    const updateFormFields = (e) => {
        const { name, value } = e.target
        setStudent({ ...student, [name]: value.toUpperCase() })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post("http://localhost:8080/clerk/student/add-new", student)
            if (result.status === 200) {
                setStudent(result.data)
                navigate("/adminHome")
            } else {
                console.error("Unexpected response status:", result.status);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Container>
                <Form onSubmit={(e) => submitForm(e)}>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="FIRST NAME"
                            >
                                <Form.Control type={"text"} placeholder="First name" required
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="MIDDLE INITIAL"
                            >
                                <Form.Control type={"text"} placeholder="Middle Initial" required
                                    name="middleInitial"
                                    value={middleInitial}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="LAST NAME"
                            >
                                <Form.Control type={"text"} placeholder="Last name" required
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="STUDENT ID"
                            >
                                <Form.Control type={"text"} placeholder="Student ID" required
                                    name="studentId"
                                    value={studentId}
                                    onChange={(e) => updateFormFields(e)}
                                />
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
                                <Form.Control type={"date"} placeholder="Date of Birth" required
                                    name="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="GENDER"
                            >
                                <Form.Control type={"text"} placeholder="Gender" required
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="TEMPORARY ADDRESS"
                            >
                                <Form.Control type={"text"} placeholder="Temporary Address" required
                                    name="temporaryAddress"
                                    value={temporaryAddress}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="PERMANENT ADDRESS"
                            >
                                <Form.Control type={"text"} placeholder="Permanent Address" required
                                    name="permanentAddress"
                                    value={permanentAddress}
                                    onChange={(e) => updateFormFields(e)}
                                />
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
                                <Form.Control type={"text"} placeholder="Contact Information" required
                                    name="contactInformation"
                                    value={contactInformation}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="ACADEMIC LEVEL"
                            >
                                <Form.Control type={"text"} placeholder="Academic Level" required
                                    name="academicLevel"
                                    value={academicLevel}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE CODE"
                            >
                                <Form.Control type={"text"} placeholder="Course Code" required
                                    name="courseCode"
                                    value={(student.myCourse.courseCode)}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE TITLE"
                            >
                                <Form.Control type={"text"} placeholder="Course Title" required
                                    name="courseTitle"
                                    value={courseTitle}
                                    onChange={(e) => updateFormFields(e)}
                                />
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
                                <Form.Control type={"text"} placeholder="Course Description" required
                                    name="description"
                                    value={description}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE INSTRUCTOR"
                            >
                                <Form.Control type={"text"} placeholder="Course Instructor" required
                                    name="instructor"
                                    value={instructor}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE SCHEDULE"
                            >
                                <Form.Control type={"text"} placeholder="Course Schedule" required
                                    name="schedule"
                                    value={schedule}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className="mt-4"
                                label="COURSE SEMESTER"
                            >
                                <Form.Control
                                    type={"text"}
                                    placeholder="Course Semester"
                                    required
                                    name="semester"
                                    value={semester}
                                    onChange={(e) => updateFormFields(e)}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="outline-primary" type="submit" > ADD RECORD </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default AddStudent;