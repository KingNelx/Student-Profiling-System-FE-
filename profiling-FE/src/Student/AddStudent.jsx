import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddStudent = () => {


    return (
        <div>
            <Form>
                <Row className="mb-3">
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

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>GENDER</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>COURSE</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>FATHER'S NAME</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>FATHER'S WORK</Form.Label>
                        <Form.Control />
                    </Form.Group>


                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S NAME</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>MOTHER'S WORK</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>

                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>

                </Row>


                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type={"text"} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
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