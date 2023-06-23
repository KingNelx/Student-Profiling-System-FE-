import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const AddStudent = () => {

    const [studentData, setStudentData] = useState({
        studentID: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        course: "",
        email: "",
        contactNumber: "",
        educationalBG: {
            elementarySchool: "",
            elementaryYearGraduated: "",
            elementaryAcademicAward: "",
            elementarySchoolAddress: "",
            highSchool: "",
            highSchoolYearGraduated: "",
            highSchoolAcademicAward: "",
            highSchoolAddress: "",
            seniorHighSchool: "",
            seniorHighYearGraduated: "",
            seniorHighAcademicAward: "",
            seniorHighAddress: "",
            collegeSchool: "",
            collegeYearGraduated: "",
            collegeAcademicAward: "",
            collegeAddress: "",
        },
        familyBG: {
            fathersName: "",
            fathersOccupation: "",
            fathersAge: "",
            fathersHighestEducation: "",
            mothersName: "",
            mothersOccupation: "",
            mothersAge: "",
            mothersHighestEducation: ""
        }
    })


    const { studentID, firstName, lastName, age, gender, course, email, contactNumber,
        educationalBG: {
            elementarySchool, elementaryYearGraduated, elementaryAcademicAward, elementarySchoolAddress,
            highSchool, highSchoolYearGraduated, highSchoolAcademicAward, highSchoolAddress,
            seniorHighSchool, seniorHighYearGraduated, seniorHighAcademicAward, seniorHighAddress,
            collegeSchool, collegeYearGraduated, collegeAcademicAward, collegeAddress
        },
        familyBG: {
            fathersName, fathersOccupation, fathersAge, fathersHighestEducation,
            mothersName, mothersOccupation, mothersAge, mothersHighestEducation
        }
    } = studentData

    return (
        <div>
            <Form>

                <Row className="mb-3">
                    <p className='text-center'> STUDENT BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>STUDENT ID</Form.Label>
                        <Form.Control type={"text"} value={studentID} name="studentID" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type={"text"} value={firstName} name="firstName" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>LAST NAME</Form.Label>
                        <Form.Control type={"text"} value={lastName} name="lastName" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>AGE</Form.Label>
                        <Form.Control type={"text"} value={age} name="age" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>GENDER</Form.Label>
                        <Form.Control type={"text"} value={gender} name="gender" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>COURSE</Form.Label>
                        <Form.Control type={"text"} value={course} name="course" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type={"email"} value={email} name="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control type={"text"} value={contactNumber} name="contactNumber" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <p className='text-center'> EDUCATIONAL BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*ELEMENTARY SCHOOL</Form.Label>
                        <Form.Control type={"text"} value={elementarySchool} name="elementarySchool" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control type={"text"} value={elementaryYearGraduated} name="elementaryYearGraduated" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control type={"text"} value={elementaryAcademicAward} name="elementaryAcademicAward" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type={"text"} value={elementarySchoolAddress} name="elementarySchoolAddress" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*JUNIOR HIGH SCHOOL</Form.Label>
                        <Form.Control type={"text"} value={highSchool} name="highSchool" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control type={"text"} value={highSchoolYearGraduated} name="highSchoolYearGraduated" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control type={"text"} value={highSchoolAcademicAward} name="highSchoolAcademicAward" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type={"text"} value={highSchoolAddress} name="highSchoolAddress" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*SENIOR HIGH SCHOOL</Form.Label>
                        <Form.Control type={"text"} value={seniorHighSchool} name="seniorHighSchool" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control type={"text"} value={seniorHighYearGraduated} name="seniorHighYearGraduated" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control type={"text"} value={seniorHighAcademicAward} name="seniorHighAcademicAward" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type={"text"} value={seniorHighAddress} name="seniorHighAddress" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*COLLEGE</Form.Label>
                        <Form.Control type={"text"} value={collegeSchool} name="collegeSchool" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control type={"text"} value={collegeYearGraduated} name="collegeYearGraduated" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control type={"text"} value={collegeAcademicAward} name="collegeAcademicAward" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type={"text"} value={collegeAddress} name="collegeAddress" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <p className='text-center'> FAMILY BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S NAME</Form.Label>
                        <Form.Control type={"text"} value={fathersName} name="fathersName" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S OCCUPATION</Form.Label>
                        <Form.Control type={"text"} value={fathersOccupation} name="fathersOccupation" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S AGE</Form.Label>
                        <Form.Control type={"text"} value={fathersAge} name="fathersAge" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>FATHER'S ATTAINMENT</Form.Label>
                        <Form.Control type={"text"} value={fathersHighestEducation} name="fathersHighestEducation" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S NAME</Form.Label>
                        <Form.Control type={"text"} value={mothersName} name="mothersName" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S OCCUPATION</Form.Label>
                        <Form.Control type={"text"} value={mothersOccupation} name="mothersOccupation" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S AGE</Form.Label>
                        <Form.Control type={"text"} value={mothersAge} name="mothersAge" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>MOTHER'S ATTAINMENT</Form.Label>
                        <Form.Control type={"text"} value={mothersHighestEducation} name="mothersHighestEducation" />
                    </Form.Group>
                </Row>


                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddStudent;