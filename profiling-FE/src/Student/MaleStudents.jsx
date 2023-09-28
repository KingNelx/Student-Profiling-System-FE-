import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/esm/Table'
import { Button } from 'react-bootstrap'

const MalesStudent = () => {

    const [male, setMaleData] = useState([])
    const loadMaleData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/admin/fetch-male');
            if (response.status === 200) {
                setMaleData(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadMaleData()
    }, [])

    return (
        <div>
            {
                male.length > 0 ? (
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>ID</th>
                                <th>STUDENT ID</th>
                                <th>FIRST NAME</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                male.map((value, index) => (
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
                    <p className='text-center'> NO DATA FOUND</p>
                )
            }
        </div>
    );
}

export default MalesStudent;