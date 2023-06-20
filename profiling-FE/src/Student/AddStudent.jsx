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
        fathersName: "",
        fathersOccupation: "",
        fathersAge: "",
        fathersHighestEducation: "",
        mothersName: "",
        mothersOccupation: "",
        mothersAge: "",
        mothersHighestEducation: ""
    })

    return (
        <div>
            <Form>

                <Row className="mb-3">
                    <p className='text-center'> STUDENT BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>STUDENT ID</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>LAST NAME</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>AGE</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>GENDER</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>COURSE</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <p className='text-center'> EDUCATIONAL BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*ELEMENTARY SCHOOL</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*JUNIOR HIGH SCHOOL</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*SENIOR HIGH SCHOOL</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>*COLLEGE</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>YEAR GRADUATED</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ACADEMIC AWARDS/HONORS</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <p className='text-center'> FAMILY BACKGROUND </p>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S NAME</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S OCCUPATION</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S AGE</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>FATHER'S ATTAINMENT</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S NAME</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S OCCUPATION</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S AGE</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>MOTHER'S ATTAINMENT</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddStudent;