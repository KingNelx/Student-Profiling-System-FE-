import axios from "axios"
import Table from "react-bootstrap/Table"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Loading from "../../SweetAlerts/Loading"

const FreshmanData = () => {

    const [freshman, setData] = useState([])

    const loadAllFreshmanData = async () => {
        const result = await axios.get("http://localhost:8080/clerk/student/academic-level/freshman")
        try {
            if (result.status === 200) {
                setData(result.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="text-center">
            {
                freshman.length > 0 ? (
                    <Table striped hover>
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
                            freshman.map((index, values) => (
                                <tbody>
                                    <tr>
                                        <td key={index}>
                                            {index + 1}
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
                                            {values.dateOfBirth}
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
                <Button onClick={Loading}>GO BACK</Button>
            </Link>
        </div>
    );
}

export default FreshmanData;