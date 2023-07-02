import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const AllFemaleStudents = () => {

    const [maleStudent, setMaleStudents] = useState([])

    const loadData = async () => {
        const response = await axios.get("http://localhost:8080/api/admin/allFemaleStudents")
        try {
            if (response.status === 200) {
                setMaleStudents(response.data)
            }
        } catch (error) {
            console.log(" ERROR MESSAGE " + error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="container text-center" style={{ maxHeight: 'calc(80vh - 150px)', overflowY: 'auto' }}>
            {
                maleStudent.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Course</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                maleStudent.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.studentID}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.course}</td>
                                        <td>
                                            <Button variant="outline-primary">VIEW</Button>{' '}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) :
                    <p> NO DATA FOUND </p>
            }
        </div>
    );
}

export default AllFemaleStudents;