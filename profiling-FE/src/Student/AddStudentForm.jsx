import Form from 'react-bootstrap/esm/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'
import axios, { HttpStatusCode } from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudentForm = () => {

    const [student, setStudent] = useState({
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
        mothersDateOfBirth: ""
    })

    const { studentID, firstName, lastName, middleInitial, dateOfBirth, gender, contactNumber, emailAddress, address,
        educationLevel, schoolName, gradeLevel, dateStarted, expectedGraduationYear, schoolAddress,
        fathersFullName, fathersAge, fathersAddress, fathersContactNumber, fathersCivilStatus, fathersOccupation,
        fathersEducationLevel, fathersDateOfBirth, mothersFullName, mothersAge, mothersAddress, mothersContactNumber,
        mothersCivilStatus, mothersOccupation, mothersEducationLevel, mothersDateOfBirth
    } = student

    const updateFormField = (e) => {
        const { name, value } = e.target
        setStudent({ ...student, [name]: value.toUpperCase() })
    }

    const navigate = useNavigate()

    const submitFormData = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:8080/admin/add-student', student);
            if (result.status === 200) {
                setStudent(result.data)
                navigate('/admin-home')
            }
        } catch (e) {
            console.log(" ERROR: " + e + " " + HttpStatusCode.BadRequest);
        }
    }

    return (
        <Container>
            <Form style={{ overflowX: 'hidden', height: '60vh' }} onSubmit={(e) => submitFormData(e)}>
                <Row>
                    <p className='text-center fw-bold'> BASIC INFO</p>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='STUDENT ID'
                            required
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
                            controlId='floatingInput'
                            className='mb-3'
                            label='FIRST NAME'
                            required
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
                            controlId='floatingInput'
                            label='LAST NAME'
                            className='mb-3'
                            required
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
                            label='MIDDLE INITIAL'
                            className='mb-3'
                            required
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
                            label='DATE OF BIRTH'
                            className='mb-3'
                            required
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
                            label='GENDER'
                            className='mb-3'
                            required
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
                            label='CONTACT NUMBER'
                            className='mb-3'
                            required
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
                            label='EMAIL ADDRESS'
                            className='mb-3'
                            required
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
                            controlId='floatingInput'
                            label='ADDRESS'
                            className='mb-3'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='adress'
                                value={address}
                                onChange={(e) => updateFormField(e)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <p className='text-center fw-bold'>EDUCATION INFO</p>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='EDUCATION LEVEL'
                            className='mb-3'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='educationLevel'
                                value={educationLevel}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='SCHOOL NAME'
                            className='mb-3'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='schoolName'
                                value={schoolName}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='GRADE LEVEL'
                            required
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
                            label='DATE STARTED'
                            required
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
                            label='EXPECTED GRADUDATION YEAR'
                            required
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
                            label='SCHOOL ADDRESS'
                            required
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
                    <p className='text-center fw-bold'>PARENTS INFO</p>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='FATHERS FULL NAME'
                            required
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
                            controlId='floatingInput'
                            className='mb-3'
                            label='FATHERS AGE'
                            required
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
                            label='FATHERS ADDRESS'
                            required
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
                            label='FATHERS CONTACT NUMBER'
                            required
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
                            label='FATHERS CIVIL STATUS'
                            required
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
                            label='FATHERS OCCUPATION'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='fathersOccupation'
                                value={fathersOccupation}
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
                            label='FATHERS EDUCATION LEVEL'
                            required
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
                            label='DATE OF BIRTH'
                            required
                        >
                            <Form.Control
                                type={"date"}
                                name='fathersDateOfBirth'
                                value={fathersDateOfBirth}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='MOTHERS FULL NAME'
                            required
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
                            controlId='floatingInput'
                            className='mb-3'
                            label='MOTHERS AGE'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='mothersAge'
                                vaue={mothersAge}
                                onChange={(e) => updateFormField(e)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='MOTHERS ADDRESS'
                            required
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
                            label='MOTHERS CONTACT NUMBER'
                            required
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
                            label='MOTHERS CIVIL STATUS'
                            required
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
                            label='MOTHERS OCCUPATION'
                        >
                            <Form.Control
                                type={"text"}
                                name='mothersOccupation'
                                value={mothersOccupation}
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
                            label='MOTHERS EDUCATION LEVEL'
                            required
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
                            label='DATE OF BIRTH'
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
                <Button type="submit" variant='outline-primary'>SUBMIT</Button>
            </Form>
        </Container>
    );
}

export default AddStudentForm;