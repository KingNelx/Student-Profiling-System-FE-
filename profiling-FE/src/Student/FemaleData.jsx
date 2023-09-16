import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const FemaleData = () => {

    const [male, setMale] = useState([])
    const response = async () => {
        try {
            const result = await axios.get('http://localhost:8080/admin/fetch-female');
            if (result.status === 200) {
                setMale(result.data)
            }
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e)
            alert(" ERROR MESSAGE: " + e)
        }
    }


    useEffect(() => {
        response()
    }, [])

    return (
        <div>
            {
                male.length > 0 ? (
                    <Table striped bordered hover className="text-center">
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
                                male.map((value, index) => (
                                    <tr key={index}> 
                                        <td>{index+1}</td>
                                        <td>{value.studentID}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.middleInitial}</td>
                                        <td>
                                            <Button variant='outline-primary'>
                                                <span class="material-icons">visibility</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p>NO DATA FOUND</p>
                )
            }
        </div>
    );
}

export default FemaleData;