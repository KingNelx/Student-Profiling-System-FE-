import Form from 'react-bootstrap/esm/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SuccessAlert from '../Alerts/SuccessAlert'


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
    })

    const [education, setEducation] = useState({
        educationLevel: "",
        schoolName: "",
        gradeLevel: "",
        dateStarted: "",
        expectedGraduationYear: "",
        schoolAddress: "",
    })

    const [parents, setParents] = useState({
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

    // const { educationLevel, schoolName, gradeLevel, dateStarted, expectedGraduationYear, schoolAddress } = education

    /* const { fathersFullName, fathersAge, fathersAddress, fathersContactNumber, fathersCivilStatus, fathersOccupation,
         fathersEducationLevel, fathersDateOfBirth, mothersFullName, mothersAge, mothersAddress, mothersContactNumber,
         mothersCivilStatus, mothersOccupation, mothersEducationLevel, mothersDateOfBirth } = parents
 */
    const updateFormField = (e) => {
        const { name, value } = e.target
        setStudent({ ...student, [name]: value.toUpperCase() })
        setEducation({ ...education, [name]: value.toUpperCase() })
        setParents({ ...parents, [name]: value.toUpperCase() })
    }

    const navigate = useNavigate()

    const submitFormData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/admin/add-student', {
                student: student,
                education: education,
                parents: parents
            });
            if (response.status === 200) {
                location.reload()
                navigate('/admin-home');
            }
        } catch (error) {
            if (error.response) {
                console.log("ERROR: " + error.response.data);
                console.log("STATUS CODE: " + error.response.status);
            } else {
                console.log("ERROR: " + error.message);
            }
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
                        >
                            <Form.Control
                                type={"text"}
                                name='studentID'
                                value={studentID}
                                required
                                onChange={(e) => updateFormField(e)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='FIRST NAME'

                        >
                            <Form.Control
                                type={"text"}
                                name='firstName'
                                value={firstName}
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                name='address'
                                value={address}
                                required
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
                                required
                                onChange={(e) => updateFormField(e)}
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
                                required
                                onChange={(e) => updateFormField(e)}
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                            label='MOTHERS FULL NAME'
                            required
                        >
                            <Form.Control
                                type={"text"}
                                name='mothersFullName'
                                value={mothersFullName}
                                required
                                onChange={(e) => updateFormField(e)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId='floatingInput'
                            className='mb-3'
                            label='MOTHERS AGE'
                        >
                            <Form.Control
                                type={"text"}
                                name='mothersAge'
                                value={mothersAge}
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                                onChange={(e) => updateFormField(e)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button type="submit" variant='outline-primary' onClick={() => SuccessAlert()}>SUBMIT</Button>
            </Form>
        </Container>
    );
}

export default AddStudentForm;