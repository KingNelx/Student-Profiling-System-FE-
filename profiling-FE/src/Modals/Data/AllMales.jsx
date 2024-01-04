import Table from "react-bootstrap/Table"
import axios from "axios"
import { useState, useEffect } from "react";

const AllMales = () => {

    const [males, setMale] = useState([])

    const loadAllData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/clerk/student/gender/males")
            if (response.status === 200) {
                setMale(response.data)
            }
        } catch (e) {
            console.log(" DATABASE IS EMPTY " + e)
        }
    }

    useEffect(() => {
        loadAllData()
    }, [])

    return (
        <div>
            {
                males.length > 0 ? (
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
                                males.map((value, index) => (
                                    <tr>
                                        <td key={index}>{index + 1}</td>
                                        <td>{value.studentId}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.academicLevel}</td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <div key={courseIndex}>
                                                    <p><b>Course: </b> {course.courseTitle} </p>
                                                </div>
                                            ))}
                                        </td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <div key={courseIndex}>
                                                    <p><b>Schedule: </b>{course.schedule}</p>
                                                </div>
                                            ))}
                                        </td>
                                        <td>
                                            {value.myCourse.map((course, courseIndex) => (
                                                <div key={courseIndex}>
                                                    <p><b>Instructor: </b> {course.instructor}</p>
                                                </div>
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

export default AllMales;