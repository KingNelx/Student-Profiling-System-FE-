import Table from 'react-bootstrap/esm/Table'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import axios, { HttpStatusCode } from 'axios'
import AddStudentModal from './Modal/AddStudentModal'
import { useParams } from 'react-router-dom'

const StudentDataTable = () => {

    const { id } = useParams()

    const [student, setStudentData] = useState([])

    const loadAllData = async () => {
        try {
            const result = await axios.get('http://localhost:8080/admin/query-students')
            if (result.status === 200) {
                setStudentData(result.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadAllData()
    }, [])

    const removeStudentData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/admin/delete-student/${id}`)
            if (response.status === 200) {
                loadAllData()
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (e) {
            console.log("ERROR: " + error.response.data);
            console.log("STATUS CODE: " + error.response.status);
        }
    }

    return (
        <div className='text-center' style={
            { marginTop: '5vh ' }
        }>

            <AddStudentModal />
            {
                student.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    STUDENT ID
                                </th>
                                <th>
                                    FIRST NAME
                                </th>
                                <th>
                                    MIDDLE NAME
                                </th>
                                <th>
                                    LAST NAME
                                </th>
                                <th>
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.map((value, index) => (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {value.studentID}
                                        </td>
                                        <td>
                                            {value.firstName}
                                        </td>
                                        <td>
                                            {value.middleInitial}
                                        </td>
                                        <td>
                                            {value.lastName}
                                        </td>
                                        <td>
                                            <Button variant='outline-primary'>
                                                <span class='material-icons'>visibility</span>
                                            </Button>

                                            <Button variant='outline-success mx-2'>
                                                <span class='material-icons'>update</span>
                                            </Button>

                                            <Button variant='outline-danger' onClick={() => removeStudentData(value.id)}>
                                                <span class='material-icons'>delete</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p> NO DATA FOUND </p>
                )
            }
        </div>
    );
}

export default StudentDataTable;