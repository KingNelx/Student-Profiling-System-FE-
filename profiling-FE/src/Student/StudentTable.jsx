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
        <div className="container text-center" style={{ maxHeight: 'calc(80vh - 150px)', overflowY: 'auto' }}>
            <Table striped bordered hover>
            <thead style={{position: 'sticky', top: 0}}>
                    <tr className="">
                        <th>#</th>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map( (student, index) => (
                            <tr>
                            <td key={index}>{index+1}</td>
                            <td>{student.studentID}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.gender}</td>
                            <td>
                                <Button variant="outline-primary">VIEW</Button>{' '}
                                <Button variant="outline-primary">UPDATE</Button>{' '}

                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default StudentTable;