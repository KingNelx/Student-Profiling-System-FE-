import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { useState, useEffect } from "react"

const StudentCount = () => {


    const [totalStudents, setCount] = useState(0)

    const totalStudent = async () => {
        try {
            const respone = await axios.get("http://localhost:8080/clerk/student/total-enrolled")
            if (respone.status === 200) {
                setCount(respone.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        totalStudent()
    }, [])
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <p><b>Total of Students that Enrolled</b></p>
                    <Card.Text>
                        <b> {totalStudents}</b>
                    </Card.Text>
                    <Button variant="outline-primary">VIEW</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default StudentCount;