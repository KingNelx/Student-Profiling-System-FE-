import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

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
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

        </div>
    );
}

export default AddStudent;