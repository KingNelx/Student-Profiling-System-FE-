import Table from "react-bootstrap/Table"
import axios from "axios"
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import { FaUsersViewfinder } from "react-icons/fa6";
import Button from "react-bootstrap/Button"
import DeleteRecord from "../../Alerts/DeleteRecord";

const StudentList = () => {

    const [students, setData] = useState({})
    const result = async () => {

        try {
            const response = await axios.get("http://localhost:8080/clerk/student/queryAll")
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }


    const removeStudent = async (id) => {
        const responnse = await axios.delete(`http://localhost:8080/clerk/student/remove-data/${id}`)
        if (responnse.status === 200) {
            setTimeout(() => {
                setTimeout(() => window.location.reload(), 3000)
            })
            result();
        }
    }

    useEffect(() => {
        result()
    }, [])
    return (
        <div className="text-center">
            <Container>
                {
                    students.length > 0 ? (
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>
                                        STUDENT ID
                                    </th>

                                    <th>
                                        FIRST NAME
                                    </th>

                                    <th>
                                        LAST NAME
                                    </th>
                                    <th>
                                        ACADEMIC LEVEL
                                    </th>
                                    <th>
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            {
                                students.map((value) => (
                                    <tbody>
                                        <tr>
                                            <td>
                                                {value.studentId}
                                            </td>
                                            <td>
                                                {value.firstName}
                                            </td>
                                            <td>
                                                {value.lastName}
                                            </td>
                                            <td>
                                                {value.academicLevel}
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" >
                                                    <FaUsersViewfinder />
                                                </Button> {" "}
                                                <Button variant="outline-danger" >
                                                    <FaUsersViewfinder onClick={() => { removeStudent(value.id); DeleteRecord() }} />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </Table>
                    ) : (
                        <p className="text-center"> NO DATA FOUND</p>
                    )
                }
            </Container>
        </div>
    );
}

export default StudentList;