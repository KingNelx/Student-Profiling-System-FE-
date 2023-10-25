import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'

const FemaleStudents = () => {

    const [female, setFemaleStudents] = useState([])

    const loadFemaleData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/admin/fetch-female');
            if (response.status === 200) {
                setFemaleStudents(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadFemaleData()
    }, [])

    return (
        <div className='text-center'>
            {
                female.length > 0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>STUDENT ID</th>
                                <th>FIRST NAME</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                female.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.studentID}</td>
                                        <td>{value.firstName}</td>
                                        <td>
                                            <Button variant='outline-primary'>
                                                <span class='material-icons'>visibility</span> {""}
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

export default FemaleStudents;