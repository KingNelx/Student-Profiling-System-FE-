import axios from "axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";


const StudentTable = () => {

    const [students, setStudents] = useState([])
    const { id } = useParams()
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
                <thead style={{ position: 'sticky', top: 0 }}>
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
                        students.map((student, index) => (
                            <tr>
                                <td key={index}>{index + 1}</td>
                                <td>{student.studentID}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.course}</td>
                                <td>{student.gender}</td>
                                <td>
                                    <Link>
                                        <Button variant="outline-primary">
                                            <span class="material-icons">
                                                person_add
                                            </span>
                                        </Button>
                                    </Link>
                                    <Link>
                                        <Button variant="outline-success mx-2">
                                            <span class="material-icons">
                                                update
                                            </span>
                                        </Button>
                                    </Link>
                                    <Link>
                                        <Button variant="outline-danger" >
                                            <span class="material-icons">
                                                delete
                                            </span>
                                        </Button>
                                    </Link>
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