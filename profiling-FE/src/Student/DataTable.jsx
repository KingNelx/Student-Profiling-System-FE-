import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const DataTable = () => {

    const [student, setStudentData] = useState([])

    const loadAllTasks = async () => {
        try {
            const result = await axios.get("http://localhost:8080/admin/query-students");
            if (result.status === 200) {
                setStudentData(result.data)
            }
        } catch (e) {
            alert(" ERROR MESSAGE: " + e)
            console.log(" ERROR MESSAGE: " + e)
        }
    }

    useEffect(() => {
        loadAllTasks()
    }, [])

    return (
        <Container className='text-center mt-5'>
            {
                student.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>StudentID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Middlename</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.map((value, index) => (
                                    <tr key={index + 1}>
                                        <td>{value.firstName}</td>
                                        <td>TEST</td>
                                        <td>TEST</td>
                                        <td>TEST</td>
                                        <td>TEST</td>
                                        <td>
                                            <Button variant="outline-primary"> VIEW </Button>{" "}
                                            <Button variant="outline-success" > UPDATE </Button> {" "}
                                            <Button variant="outline-danger"> DELETE </Button> {" "}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p> NO DATA AVAILABLE </p>
                )
            }
        </Container>
    );
}

export default DataTable;