import Card from 'react-bootstrap/Card';
import axios from "axios"
import { useState, useEffect } from "react"
import StudentListModal from './Modals/StudentListModal';
import total_ from "../Animations/allstudents.json"
import Lottie from "lottie-react"

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
                <div style={{
                    height: "25vh"
                }}>
                    <Lottie
                        animationData={total_}
                    />
                </div>
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total of Students</b></p>
                    <Card.Text>
                        <b> {totalStudents}</b>
                    </Card.Text>
                    <StudentListModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default StudentCount;