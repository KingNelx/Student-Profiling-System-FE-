import Table from "react-bootstrap/Table"
import axios from "axios"
import { useState, useEffect } from "react";

const AllFemales = () => {

    const [females, setFemale] = useState([])

    const loadAllData = async () => {
        try {
            const result = await axios.get("http://localhost:8080/clerk/student/gender/females")
            if (result.status === 200) {
                setFemale(result.data)
            }
        } catch (e) {
            console.log(" DATABASE IS EMPTY ")
        }
    }

    useEffect(() => {
        loadAllData()
    }, [])

    return (
        <div>
            {
                females.length > 0 ? (
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student ID</th>
                                <th>Last Name</th>
                                <th>Academic Level</th>
                                <th>Course Title</th>
                                <th>Course Schedule</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                females.map((value, index) => (
                                    <tr>
                                        <td key={index}>{index + 1}</td>
                                        <td>{value.studentId}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.academicLevel}</td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <div key={courseIndex}>
                                                    <p><b>Title: </b>{course.courseTitle}</p>
                                                </div>
                                            ))}
                                        </td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <p><b>Schedule: </b>{course.schedule}</p>
                                            ))}
                                        </td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <p><b>Instructor: </b>{course.instructor    }</p>
                                            ))}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-center"> NO DATA FOUND </p>
                )
            }
        </div>
    );
}

export default AllFemales;