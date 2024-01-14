import { useState } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import Loading from "../../SweetAlerts/Loading"

const SophomoreData = () => {

    const [sophomore, setSophomore] = useState([])

    const loadAllSophomore = async () => {
        const result = await axios.get("http://localhost:8080/clerk/student/academic-level/sophomore")
        try {
            if (result.status === 200) {
                setSophomore(result.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="text-center">
            {
                sophomore.length > 0 ? (
                    <Table hover striped>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Firstname
                                </th>
                                <th>
                                    Lastname
                                </th>
                                <th>
                                    StudentID
                                </th>
                                <th>
                                    Date Of Birth
                                </th>
                            </tr>
                        </thead>
                        {
                            sophomore.map((values, index) => (
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {values.firstName}
                                        </td>
                                        <td>
                                            {values.lastName}
                                        </td>
                                        <td>
                                            {values.studentId}
                                        </td>
                                        <td>
                                            {values.dateOfBirth }
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </Table>
                ) : (
                    <p className="text-center">
                        NO DATA FOUND
                    </p>
                )
            }
            <Link to="/adminHome">
                <Button onClick={Loading}> GO BACK </Button>
            </Link>
        </div>
    );
}

export default SophomoreData;