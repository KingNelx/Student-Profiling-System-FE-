import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const AllMales = () => {


    const [male, setMale] = useState([])

    const loadData = async () => {
        const response = await axios.get('http://localhost:8080/admin/all-males')
        try {
            if (response.status === 200) {
                setMale(response.data)
            }
        } catch (e) {
            console.log(" ERROR MESSAGE: " + e);
            alert(" ERROR MESSAGE: " + e);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className='text-center'>
            {
                male.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                male.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.age}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p> NO DATA </p>
                )
            }
        </div>
    );
}

export default AllMales;