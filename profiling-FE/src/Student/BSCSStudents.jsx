import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const BSCSStudents = () => {

    const [students, setStudents] = useState([])

    const loadData = async () => {
        const response = await axios.get('http://localhost:8080/api/admin/BSCS')
        try {
            if (response.status === 200) {
                setStudents(response.data)
            }
        } catch (error) {
            console.log(" ERROR MESSAGE: " + error);
        }
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            {
                students.length > 0 ? (
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.studentID}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>
                                            <Button variant="outline-primary">
                                                <span class="material-icons">
                                                    visibility
                                                </span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) :
                    <p className='text-center'> NO DATA FOUND </p>
            }
        </div >
    );
}

export default BSCSStudents;