import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { FaEye } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios"
import { useState, useEffect } from "react"

const ListOfStudents = () => {
    return (
        <Container className="mt-3">
            <h3> LIST OF STUDENTS </h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>STUDENT ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>GENDER</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>ss</td>
                        <td>
                            <Button variant="outline-primary">
                                <FaEye />
                            </Button>

                            <Button variant="outline-success" className="mx-1">
                                <GrUpdate />
                            </Button>

                            <Button variant="outline-danger">
                                <MdDeleteSweep />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default ListOfStudents;