import Table from "react-bootstrap/Table"
import axios from "axios"
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import { FaUsersViewfinder } from "react-icons/fa6";
import Button from "react-bootstrap/Button"

const SophomoreData = () => {

    const [sophomore, setSophomore] = useState({})
    const result = async () => {

        try {
            const response = await axios.get("http://localhost:8080/clerk/student/academic-level/sophomore")
            if (response.status === 200) {
                setSophomore(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        result()
    }, [])
    return (
        <div className="text-center">
            <Container>
                {
                    sophomore.length > 0 ? (
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
                                sophomore.map((value) => (
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

export default SophomoreData;