import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import StudentDuplicate from "../Alerts/StudentDuplicate"
import RecordAdded from "../Alerts/RecordAdded"
import { useForm } from "react-hook-form"

const AddRecord = () => {

    const backgroundStudent = "STUDENT BACKGROUND"
    const CourseInfo = "COURSE & SUBJECT INFORMATION"

    const {
        register,
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();

    const [student, setData] = useState({
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
        myCourse: [{
            courseCode: "", courseTitle: "", description: "", instructor: "", schedule: "", semester: ""
        }]
    });

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
        myCourse: [
            {
                courseCode, courseTitle, description, instructor, schedule, semester
            }
        ]
    } = student || {}




    const response = async () => {
        try {
            const result = await axios.post('http://localhost:8080/clerk/student/add-new', student)
            if (result.status === 200) {
                setData(result.data);
                navigate("/admin-home")
            }
        } catch (e) {
            console.log(e)
            setTimeout(StudentDuplicate(), 300)
        }
    }

    const updateStudentForm = (e) => {
        const { name, value } = e.target
        setData({ ...student, [name]: value.toUpperCase() })
    }

    return (
        <div>
            <Container>
                <Form style={{ height: "400px", overflowX: "hidden" }} className="mx-2 px-2"
                    onSubmit={handleSubmit((e) => response(e))}
                >
                    <p className="text-center fw-bold">{backgroundStudent}</p>
                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Firstname"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Firstname"
                                    {...register("firstName")}
                                    value={firstName}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Middle Initial"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Middle Initial"
                                    {...register("middleInitial")}
                                    value={middleInitial}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Lastname"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Lastname"
                                    {...register("lastName")}
                                    value={lastName}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
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
                                <Form.Control type={"text"} placeholder="Student ID" required
                                    {...register("studentId")}
                                    value={studentId}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Date of Birth"
                                className="mb-3"
                            >
                                <Form.Control type={"date"} placeholder="Date of Birth" required
                                    {...register("dateOfBirth")}
                                    value={dateOfBirth}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Gender"
                                className="mb-3"
                            >
                                <Form.Select required
                                    type={"text"}
                                    autoSave="off"
                                    autoComplete="off"
                                    {...register("gender")}
                                    value={gender}
                                    onChange={(e) => updateStudentForm(e)}
                                >
                                    <option>Select</option>
                                    <option >MALE</option>
                                    <option >FEMALE</option>
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
                                <Form.Control type={"text"} placeholder="Temporary Address" required
                                    {...register("temporaryAddress")}
                                    value={temporaryAddress}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Permanent Address"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} placeholder="Permanent Address" required
                                    {...register("permanentAddress")}
                                    value={permanentAddress}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Information"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} placeholder="Contact Information" required
                                    {...register("contactInformation")}
                                    value={contactInformation}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
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
                                <Form.Select required
                                    type={"text"}
                                    autoSave="off"
                                    autoComplete="off"
                                    {...register("academicLevel")}
                                    value={academicLevel}
                                    onChange={(e) => updateStudentForm(e)}
                                >
                                    <option>Select</option>
                                    <option >FRESHMAN</option>
                                    <option >SOPHOMORE</option>
                                    <option >JUNIOR</option>
                                    <option >SENIOR</option>
                                    <option >IRREGULAR</option>
                                    <option >RETURNEE</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <p className="text-center fw-bold">{CourseInfo}</p>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Course Code"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Course Code"
                                    {...register("courseCode")}
                                    value={courseCode}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Course Title"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Course Title"
                                    {...register("courseTitle")}
                                    value={courseTitle}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Description"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Description"
                                    {...register("description")}
                                    value={description}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Row>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Instructor"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Instructor"
                                    {...register("instructor")}
                                    value={instructor}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Schedule"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Schedule"
                                    {...register("schedule")}
                                    value={schedule}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Semester"
                                className="mb-3"
                            >
                                <Form.Control type={"text"} required placeholder="Semester"
                                    {...register("semester")}
                                    value={semester}
                                    onChange={(e) => updateStudentForm(e)}
                                    autoSave="off"
                                    autoComplete="off" />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Button type="submit" onClick={RecordAdded}>Add Record</Button>
                </Form>
            </Container>
        </div>
    );
}

export default AddRecord;