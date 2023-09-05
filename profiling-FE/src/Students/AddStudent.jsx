import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AddContent from "../Components/AddContent";

const AddStudent = () => {
  const [student, setStudents] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    studentEducationalBackground: {
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
    },
    studentFamilyBackground: {
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
    }
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


  const navigate = useNavigate()

  const updateFormFields = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setStudents({ ...student, [name]: value.toUpperCase() })
  }


  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:8080/admin/add-student', student)
      if (result.status === 200) {
        window.location.reload()
        navigate('/adminView')
      }
    } catch (e) {
      alert(" ERROR MESSAGE: " + e)
      console.log(" ERROR MESSAGE: " + e)
    }
  }

  return (
    <div
      style={{
        height: "500px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Form onSubmit={(e) => formSubmit(e)}>
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
                onChange={(e) => updateFormFields(e)}
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="LASTNAME"
              className="mb-3"
            >
              <Form.Control
                type={"text"}
                placeholder="Lastname"
                value={lastName}
                name="lastName"
                onChange={(e) => updateFormFields(e)}

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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                name="seniorHighAddress"
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                value={fathersLastName}
                name="fathersLastName"
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                onChange={(e) => updateFormFields(e)}
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
                name="mothersHighestEducation"
                onChange={(e) => updateFormFields(e)}

              />
            </FloatingLabel>
          </Col>
        </Row>

        <Button type="submit" variant="outline-primary" onClick={AddContent}>
          REGISTER
        </Button>
      </Form>
    </div>
  );
};

export default AddStudent;
