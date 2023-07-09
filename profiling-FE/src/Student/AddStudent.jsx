import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddStudent = () => {

    let navigate = useNavigate();

    const [studentData, setStudentData] = useState({
        studentID: "",
        fistName: "",
        lastName: "",
        age: "",
        gender: "",
        course: "",
        email: "",
        contactNumber: "",
        elementarySchool: "",
        elementaryYearGraduated: "",
        elementaryAcademicAward: "",
        elementarySchoolAddress: "",
        highSchool: "",
        highSchoolYearGraduated: "",
        highSchoolAcademicAward: "",
        highSchoolAddress: "",
        seniorHighSchool: "",
        seniorHighSchoolYearGraduated: "",
        seniorHighSchoolAcademicAward: "",
        seniorHighSchoolAddress: "",
        collegeSchool: "",
        collegeYearGraduated: "",
        collegeAcademicAward: "",
        collegeAddress: ""
    })

    const { studentID, firstName, lastName, age, gender, course, email, contactNumber } = studentData

    const onInputChange = (e) => {
        const { name, value } = e.target
        setStudentData({ ...studentData, [name]: value.toUpperCase() })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/admin/registerStudent', studentData)
            if (response.status === 200) {
                window.location.reload()
                navigate("/adminView")
            }
        } catch (error) {
            console.log(" ERROR MESSAGE: " + error);
        }
    }

    const saveData = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'NEW STUDENT ADDED',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Row className="mb-3">
                    <p className='text-center'> STUDENT BACKGROUND </p>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>STUDENT ID</Form.Label>
                        <Form.Control type={"text"}
                            name="studentID"
                            value={studentID}
                            onChange={(e) => onInputChange(e)} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type={"text"}
                            name="firstName"
                            value={firstName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>LASTNAME</Form.Label>
                        <Form.Control type={"text"}
                            name="lastName"
                            value={lastName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>AGE</Form.Label>
                        <Form.Control type={"text"}
                            name="age"
                            value={age}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="">
                        <Form.Label>GENDER</Form.Label>
                        <Form.Control
                            as="Select"
                            name="gender"
                            value={gender}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select Gender ..</option>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </Form.Control>
                    </Form.Group>



                    <Form.Group as={Col} controlId="">
                        <Form.Label>COURSE</Form.Label>
                        <Form.Control
                            as="Select"
                            name="course"
                            value={course}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select Course ...</option>
                            <option value="bsis">BSIS</option>
                            <option value="bsit">BSIT</option>
                            <option value="bscs">BSCS</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type={"email"}
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control type={"text"}
                            name="contactNumber"
                            value={contactNumber}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>
                </Row>

                {/* // elementary school */}


                <Row className="mb-3">
                    <p className='text-center'> EDUCATIONAL BACKGROUND </p>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>STUDENT ID</Form.Label>
                        <Form.Control type={"text"}
                            name="studentID"
                            value={studentID}
                            onChange={(e) => onInputChange(e)} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type={"text"}
                            name="firstName"
                            value={firstName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>LASTNAME</Form.Label>
                        <Form.Control type={"text"}
                            name="lastName"
                            value={lastName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                        <Form.Label>AGE</Form.Label>
                        <Form.Control type={"text"}
                            name="age"
                            value={age}
                            onChange={(e) => onInputChange(e)}
                        />
                    </Form.Group>

                </Row>

                <Button variant="outline-primary" type="submit" onClick={saveData}>SUBMIT</Button>
            </Form>
        </div>
    );
}

export default AddStudent;