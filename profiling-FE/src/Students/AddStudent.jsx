import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    mothersHighestEducation: "",
  });

  const {
    firstName,
    lastName,
    gender,
    age,
    elementarySchool,
    elementarySchoolYearStarted,
    elementarySchoolYearEnded,
    elementarySchoolAddress,
    highSchool,
    highSchoolYearStarted,
    highSchoolYearEnded,
    highSchoolAddress,
    seniorHighSchool,
    seniorHighYearStarted,
    seniorHighYearEnded,
    seniorHighAddress,
    college,
    collegeYearStarted,
    collegeYearEnded,
    collegeAddress,
    fathersFirstName,
    fathersLastName,
    fathersAddress,
    fathersCivilStatus,
    fathersAge,
    fathersContactNumber,
    fathersOccupation,
    fathersHighestEducation,
    mothersFirstName,
    mothersLastName,
    mothersAddress,
    mothersCivilStatus,
    mothersAge,
    mothersContactNumber,
    mothersOccupation,
    mothersHighestEducation
  } = student;


  const updateFormField = (e) => {
    const {name, value} = e.target
    setStudents({ ... student, [name]: value.toUpperCase()})
  }
  return (
    <div
      style={{
        height: "500px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Form>
        <Row>
          <p className="text-center fw-bold"> PERSONAL DETAILS </p>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="FIRSTNAME"
              className="mb-3"
            >
              <Form.Control
                type={"text"}
                placeholder="Firstname"
                value={firstName}
                name="firstName"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="LASTNAME"
              className="mb0-3"
            >
              <Form.Control
                type={"text"}
                placeholder="Lastname"
                value={lastName}
                name="lastName"
                
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="GENDER"
              className="mb-3"
            >
              <Form.Control
                type={"text"}
                placeholder="Gender"
                value={gender}
                name="gender"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="AGE"
              className="mb-3"
            >
              <Form.Control 
              type={"text"}
              placeholder="Age"
              value={age}
              name="age"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <p className="text-center fw-bold"> EDUCATIONAL BACKGOUND </p>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="ELEMENTARY SCHOOL"
              className="mb-3"
            >
              <Form.Control 
              type={"text"}
               placeholder="Elementary School"
               value={elementarySchool}
               name="elementarySchool"
               />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR STARTED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"}
               placeholder="Year Started"
               value={elementarySchoolYearStarted}
               name="elementarySchoolYearStarted"
               />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR ENDED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Ended" 
              value={elementarySchoolYearEnded}
              name="elementarySchoolYearEnded"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="SCHOOL ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="School Address"
              value={elementarySchoolAddress}
              name="elementarySchoolAddress"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="HIGH SCHOOL"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="High School" 
              value={highSchool}
              name="highSchool"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR STARTED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Started" 
              value={highSchoolYearStarted}
              name="highSchoolYearStarted"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR ENDED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Ended" 
              value={highSchoolYearEnded}
              name="highSchoolYearEnded"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="SCHOOL ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="School Address"
              value={highSchoolAddress}
              name="highSchoolAddress"
              />
            </FloatingLabel>
          </Col>
        </Row>


        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="SENIOR SCHOOL"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Senior High School" 
              value={seniorHighSchool}
              name="seniorHighSchool"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR STARTED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Started" 
              value={seniorHighYearStarted}
              name="seniorHighYearStarted"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR ENDED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Ended" 
              value={seniorHighYearEnded}
              name="seniorHighYearEnded"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="SCHOOL ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="School Address"
              value={seniorHighAddress}
              name="highSchoolAddress"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="COLLEGE SCHOOL"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="College School" 
              value={college}
              name="college"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR STARTED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Started" 
              value={collegeYearStarted}
              name="collegeYearStarted"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="YEAR ENDED"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Year Ended" 
              value={collegeYearEnded}
              name="collegeYearEnded"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="SCHOOL ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="School Address" 
              value={collegeAddress}
              name="collegeAddress"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <p className="text-center fw-bold"> FAMILY BACKGROUND </p>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="FATHERS FIRSTNAME"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Fathers Firstname" 
              value={fathersFirstName}
              name="fathersFirstName"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="FATHERS LASTNAME"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Fathers Lastname"
              vale={fathersLastName}
              name="fathersLastName"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Address"
              value={fathersAddress}
              name="fathersAddress"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="CIVIL STATUS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Civil Status" 
              value={fathersCivilStatus}
              name="fathersCivilStatus"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="AGE"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Age" 
              value={fathersAge}
              name="fathersAge"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="CONTACT NUMBER"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Contact Number" 
              value={fathersContactNumber}
              name="fathersContactNumber"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="OCCUPATION"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Occupation" 
              value={fathersOccupation}
              name="fathersOccupation"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="HIGHEST ATTAINMENT"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Highes Attainment" 
              value={fathersHighestEducation}
              name="fathersHighestEducation"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="MOTHERS FIRSTNAME"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Mothers Firstname" 
              value={mothersFirstName}
              name="mothersFirstName"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="MOTHERS LASTNAME"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Mothers Lastname" 
              value={mothersLastName}
              name="mothersLastName"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="ADDRESS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Address" 
              value={mothersAddress}
              name="mothersAddress"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="CIVIL STATUS"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Civil Status" 
              value={mothersCivilStatus}
              name="mothersCivilStatus"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="AGE"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Age" 
              value={mothersAge}
              name="mothersAge"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="CONTACT NUMBER"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Contact Number" 
              value={mothersContactNumber}
              name="mothersContactNumber"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="OCCUPATION"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Occupation" 
              value={mothersOccupation}
              name="mothersOccupation"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="HIGHEST ATTAINMENT"
              className="mb-3"
            >
              <Form.Control 
              type={"text"} 
              placeholder="Highest Attainment" 
              value={mothersHighestEducation}
              
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Button type="submit" variant="outline-primary">
          REGISTER
        </Button>
      </Form>
    </div>
  );
};

export default AddStudent;
