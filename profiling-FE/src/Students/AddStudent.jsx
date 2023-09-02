import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

const AddStudent = () => {


    const [student, setStudents] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        elementarySchool: "",
        elementarySchoolYearStarted: "",
        elementarySchoolYearEnded: "",
        elementarySchoolAddress: "",
        highSchool: "",
        highSchoolYearStarted: "",
        highSchoolYearEnded: "",
        highSchoolAddress: "",
        seniorHighSchool: "",
        seniorHighYearStarted: "",
        seniorHighYearEnded: "",
        seniorHighAddress: "",
        college: "",
        collegeYearStarted: "",
        collegeYearEnded: "",
        collegeAddress: "",
        fathersFirstName: "",
        fathersLastName: "",
        fathersAddress: "",
        fathersCivilStatus: "",
        fathersAge: "",
        fathersContactNumber: "",
        fathersOccupation: "",
        fathersHighestEducation: "",
        mothersFirstName: "",
        mothersLastName: "",
        mothersAddress: "",
        mothersCivilStatus: "",
        mothersAge: "",
        mothersContactNumber: "",
        mothersOccupation: "",
        mothersHighestEducation: ""

    })

    const { firstName, lastName, gender, age, elementarySchool, elementarySchoolYearStarted, elementarySchoolYearEnded, elementarySchoolAddress,
        highSchool, highSchoolYearStarted, highSchoolYearEnded, highSchoolAddress, seniorHighSchool, seniorHighYearStarted, seniorHighYearEnded, seniorHighAddress,
        college, collegeYearStarted, collegeYearEnded, collegeAddress, fathersFirstName, fathersLastName, fathersAddress, fathersCivilStatus, fathersAge, fathersContactNumber, fathersOccupation, fathersHighestEducation,
        mothersFirstName, mothersLastName, mothersAddress, mothersCivilStatus, mothersAge,
    } = student

    return (
        <div>
            <Form>
                <Row>
                    <p className="text-center fw-bold"> PERSONAL DETAILS </p>

                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="FIRSTNAME"
                            className="mb-3"
                        >
                            <Form.Control type={"text"} placeholder='Firstname' />
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="LASTNAME"
                            className="mb0-3"
                        >
                            <Form.Control type={"text"} placeholder="Lastname" />
                        </FloatingLabel>
                    </Col>

                    <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="GENDER"
                        className="mb-3"
                    >
                        <Form.Control type={"text"} placeholder="Gender" />
                    </FloatingLabel>
                    </Col>

                    <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="AGE"
                        className="mb-3"
                    >
                        <Form.Control type={"text"} placeholder="Age" />
                    </FloatingLabel>
                    </Col>

                </Row>
                <Button type="submit" variant="outline-primary">REGISTER</Button>
            </Form>

        </div>
    );
}

export default AddStudent;