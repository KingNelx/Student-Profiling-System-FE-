import axios from "axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'

const StudentTable = () => {

    const [students, setStudents] = useState([])

    const loadStudentsData = async () => {
        const response = await axios.get("http://localhost:8080/api/admin/getAllStudents")
        try {
            if (response.status == 200) {
                setStudents(response.data)
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadStudentsData()
    }, [])

    return (
        <div className="container text-center">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                            <Button variant="outline-primary">VIEW</Button>{' '}
                            <Button variant="outline-primary">UPDATE</Button>{' '}

                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default StudentTable;