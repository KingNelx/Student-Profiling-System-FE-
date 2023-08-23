import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AdminStudentView = () => {

    const [student, setStudent] = useState([])

    return (
        <div className='container text-center mt-5'>
            <Table striped>
                {
                    student.length > 0 ? (
                        <><thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead><tbody>
                                {student.map((value, index) => (
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>
                                            <Button variant='outline-primary'><i class="fas fa-eye"></i></Button>
                                            <Button variant='outline-success' className='mx-2'><i class="fas fa-recycle"></i></Button>
                                            <Button variant='outline-danger'><i class="fas fa-trash"></i></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody></>
                    ) : (
                        <p> NO AVAILABLE DATA </p>
                    )
                }
            </Table>
        </div>
    );
}

export default AdminStudentView;