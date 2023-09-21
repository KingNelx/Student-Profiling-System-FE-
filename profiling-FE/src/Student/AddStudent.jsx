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
            <Form>
                <Container className='text-center'>
                    <Row>
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
                                label='Student ID'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Student ID'
                            >
                                <Form.Control type={"text"} />
                            </FloatingLabel>
                        </Col>


                    </Row>
                </Container>
            </Form>
        </div>
    );
}

export default AddStudent;