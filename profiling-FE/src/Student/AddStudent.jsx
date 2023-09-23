import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import { useState } from 'react'


const AddStudent = () => {

    const [student, studentData] = useState({
        studentID: "",
        firstName: "",
        lastName: "",
        middleInitial: "",
        dateOfBirth: "",
        gender: "",
        contactNumber: "",
        emailAddress: "",
        address: "",
        educationLevel: "",
        schoolName: "",
        gradeLevel: "",
        dateStarted: "",
        expectedGraduationYear: "",
        schoolAddress: "",
        fathersFullName: "",
        fathersAge: "",
        fathersAddress: "",
        fathersContactNumber: "",
        fathersCivilStatus: "",
        fathersOccupation: "",
        fathersEducationLevel: "",
        fathersDateOfBirth: "",
        mothersFullName: "",
        motherssAge: "",
        mothersAddress: "",
        mothersContactNumber: "",
        mothersCivilStatus: "",
        mothersOccupation: "",
        mothersEducationLevel: "",
        mothersDateOfBirth: "",
    })


    const { studentID, firstName, lastName, middleInitial, dateOfBirth, gender, contactNumber, emailAddress, address,
        educationLevel, schoolName, gradeLevel, dateStarted, expectedGraduationYear, schoolAddres,
        fathersFullName, fathersAge, fathersAddress, fathersContactNumber, fathersCivilStatus, fathersOccupation, fathersEducationLevel, fathersDateOfBirth,
        mothersFullName, motherssAge, mothersAddress, mothersContactNumber, mothersCivilStatus, mothersOccupation, mothersEducationLevel, mothersDateOfBirth,
    } = student

    return (
        <div>
            <Form style={{ height: '400px', overflowY: 'scroll' }}>
                <Container className='text-center'>
                    <Row>
                        <h2>Personal Details</h2>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Student ID'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Firstname'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Lastname'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='MiddleInitial'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Date of Birth'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Gender'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Contact Number'
                            >
                                <Form.Control />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Email Address'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='Address'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <h2>Education Details</h2>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Education Level'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Schoolname'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Grade level'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Date Started'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='ExpectedGraduationYear'
                            >
                                <Form.Control />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <h2>Family Details</h2>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Fathers Fullname'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='FloatingInput'
                                className='mb-3'
                                label='Fathers Age'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Fathers Address'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Fathers Contact Number'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Civil Status'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Fathers Occupation'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>
                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    className='mb-3'
                                    label='Education Level'
                                >
                                    <Form.Control type={"text"} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}

export default AddStudent;