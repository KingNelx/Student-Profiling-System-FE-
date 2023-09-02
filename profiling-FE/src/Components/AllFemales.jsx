import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const AllFemales = () => {

    const [female, setFemale] = useState([])

    const loadData = async () => {
        const response = await axios.get();
        try {
            if (response.status === 200) {
                setFemale(response.data)
            }
        } catch (e) {
            alert(" ERROR MESSAGE: " + e)
            console.log(" ERROR MESSAGE: " + e);
        }
    }


    useEffect(() => {
        loadData();
    })

    return (
        <div className="text-center">
            {
                female.length > 0 ? (
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
                                female.map((value, index) => {
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.age}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p> NO DATA AVAILABLE </p>
                )
            }
        </div>
    );
}

export default AllFemales;