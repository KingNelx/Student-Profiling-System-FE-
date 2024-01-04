import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { FaEye } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios"
import { useState, useEffect } from "react"

const ListOfStudents = () => {

    const [student, setStudents] = useState({})

    const allStudents = async () => {
        const result = await axios.get("http://localhost:8080/clerk/student/queryAll");
        try {
            if (result.status === 200) {
                setStudents(result.data)
            }
        } catch (e) {
            console.log(" NO STUDENT AVAILABLE " + e);
        }
    }

    useEffect(() => {
        allStudents()
    }, [])

    return (
        <div>
            {
                student.length > 0 ? (
                    <Container className="mt-3">
                        <h3> LIST OF STUDENTS </h3>
                        <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>STUDENT ID</th>
                                        <th>FIRST NAME</th>
                                        <th>LAST NAME</th>
                                        <th>GENDER</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        student.map((student, value) => (
                                            <tr>
                                                <th key={value}>{value + 1}</th>
                                                <td>{student.studentId}</td>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                                <td>{student.gender}</td>
                                                <td>
                                                    <Button variant="outline-primary">
                                                        <FaEye />
                                                    </Button>
                                                    <Button variant="outline-success" className="mx-1">
                                                        <GrUpdate />
                                                    </Button>
                                                    <Button variant="outline-danger">
                                                        <MdDeleteSweep />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                ) : (
                    <div>
                        NO STUDENT FOUND
                    </div>
                )
            }
        </div>
    );
}

export default ListOfStudents;

