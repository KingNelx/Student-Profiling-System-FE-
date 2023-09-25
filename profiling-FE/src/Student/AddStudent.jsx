import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Success from '../Components/Success'

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
        mothersAge: "",
        mothersAddress: "",
        mothersContactNumber: "",
        mothersCivilStatus: "",
        mothersOccupation: "",
        mothersEducationLevel: "",
        mothersDateOfBirth: "",
    })


    const { studentID, firstName, lastName, middleInitial, dateOfBirth, gender, contactNumber, emailAddress, address,
        educationLevel, schoolName, gradeLevel, dateStarted, expectedGraduationYear, schoolAddress,
        fathersFullName, fathersAge, fathersAddress, fathersContactNumber, fathersCivilStatus, fathersOccupation, fathersEducationLevel, fathersDateOfBirth,
        mothersFullName, mothersAge, mothersAddress, mothersContactNumber, mothersCivilStatus, mothersOccupation, mothersEducationLevel, mothersDateOfBirth,
    } = student


    const navigate = useNavigate()

    const updateForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/admin/add-student", student)
            if (response.status === 200)
                navigate('/adminHome')
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e);
        }
    }

    const updateFormField = (e) => {
        const { name, value } = e.target
        studentData({ ...student, [name]: value.toUpperCase() })
    }


    return (
        <div>
            <Form style={{ height: '400px', overflowY: 'scroll' }} onSubmit={(e) => updateForm(e)}>
                <Container className='text-center'>
                    <Row>
                        <h2>Personal Details</h2>
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Student ID'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='studentID'
                                    value={studentID}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Firstname'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                className='mb-3'
                                label='Lastname'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='middleInitial'
                                    value={middleInitial}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Date of Birth'
                            >
                                <Form.Control
                                    type={"date"}
                                    name='dateOfBirth'
                                    value={dateOfBirth}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Gender'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='gender'
                                    value={gender}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='contactNumber'
                                    value={contactNumber}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Email Address'
                            >
                                <Form.Control
                                    type={"email"}
                                    name='emailAddress'
                                    value={emailAddress}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='Address'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='address'
                                    value={address}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='educationLevel'
                                    value={educationLevel}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Schoolname'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='schoolName'
                                    value={schoolName}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Grade level'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='gradeLevel'
                                    value={gradeLevel}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"date"}
                                    name='dateStarted'
                                    value={dateStarted}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='ExpectedGraduationYear'
                            >
                                <Form.Control
                                    type={"date"}
                                    name='expectedGraduationYear'
                                    value={expectedGraduationYear}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='schoolAddress'
                                    value={schoolAddress}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='fathersFullName'
                                    value={fathersFullName}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='FloatingInput'
                                className='mb-3'
                                label='Age'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='fathersAge'
                                    value={fathersAge}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='fathersAddress'
                                    value={fathersAddress}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='fathersContactNumber'
                                    value={fathersContactNumber}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Civil Status'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='fathersCivilStatus'
                                    value={fathersCivilStatus}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Occupation'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='fathersOccupation'
                                    value={fathersOccupation}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    className='mb-3'
                                    label='Education Level'
                                >
                                    <Form.Control
                                        type={"text"}
                                        name='fathersEducationLevel'
                                        value={fathersEducationLevel}
                                        onChange={(e) => updateFormField(e)}
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    className='mb-3'
                                    label='Date of Birth'
                                >
                                    <Form.Control
                                        type={"date"}
                                        name='fathersDateOfBirth'
                                        value={fathersDateOfBirth}
                                        onChange={(e) => updateFormField(e)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Mothers Fullname'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='mothersFullName'
                                    value={mothersFullName}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId='FloatingInput'
                                className='mb-3'
                                label='Age'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='mothersAge'
                                    value={mothersAge}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Address'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='mothersAddress'
                                    value={mothersAddress}
                                    onChange={(e) => updateFormField(e)}
                                />
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
                                <Form.Control
                                    type={"text"}
                                    name='mothersContactNumber'
                                    value={mothersContactNumber}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Civil Status'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='mothersCivilStatus'
                                    value={mothersCivilStatus}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId='floatingInput'
                                className='mb-3'
                                label='Occupation'
                            >
                                <Form.Control
                                    type={"text"}
                                    name='mothersOccupation'
                                    value={mothersOccupation}
                                    onChange={(e) => updateFormField(e)}
                                />
                            </FloatingLabel>
                        </Col>
                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    className='mb-3'
                                    label='Education Level'
                                >
                                    <Form.Control
                                        type={"text"}
                                        name='mothersEducationLevel'
                                        value={mothersEducationLevel}
                                        onChange={(e) => updateFormField(e)}
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel
                                    controlId='floatingInput'
                                    className='mb-3'
                                    label='Date of Birth'
                                >
                                    <Form.Control
                                        type={"date"}
                                        name='mothersDateOfBirth'
                                        value={mothersDateOfBirth}
                                        onChange={(e) => updateFormField(e)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                <Button className='mx-2' variant='outline-primary' type='submit' onClick={Success}>SUBMIT</Button>
            </Form>
        </div >
    );
}

export default AddStudent;