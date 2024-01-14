import axios from "axios";
import Table from "react-bootstrap/Table"
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Loading from "../../SweetAlerts/Loading";

const SeniorData = () => {


    const [senior, setSenior] = useState([])

    const loadAllSenior = async () => {
        const result = await axios.get("http://localhost:8080/clerk/student/academic-level/senior")
        try {
            if (result.status === 200) {
                setSenior(result.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadAllSenior()
    }, [])

    return (
        <div className="text-center">
            {
                senior.length > 0 ? (
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
                            senior.map((values, index) => (
                                <tbody>
                                    <tr key={index}>
                                        <td>
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
                    <p className="text-center"> NO DATA FOUND </p>
                )
            }
            <Link to="/adminHome">
                <Button onClick={Loading}>
                    GO BACK
                </Button>
            </Link>
        </div>
    );
}

export default SeniorData;