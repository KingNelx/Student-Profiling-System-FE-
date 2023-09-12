import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import {useState, useEffect} from 'react'

const DataTable = () => {


    return (
        <Container className='text-center mt-5'>
            <Table striped bordered hover>
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
                    <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default DataTable;