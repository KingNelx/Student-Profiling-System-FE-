import Card from 'react-bootstrap/Card';
import MaleModal from './Modals/MaleModal';
import { useState, useEffect } from "react"
import axios from "axios"

const MaleCount = () => {


    const [maleCount, setCount] = useState(0)

    const result = async () => {
        try {
            const response = await axios.get("http://localhost:8080/clerk/student/total/male")
            if (response.status === 200) {
                setCount(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        result()
    }, [])

    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total of Male Students Enrolled</b></p>
                    <Card.Text>
                        {maleCount}
                    </Card.Text>
                    <MaleModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default MaleCount;