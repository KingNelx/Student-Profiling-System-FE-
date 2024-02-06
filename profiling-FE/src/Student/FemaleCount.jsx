import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"
import axios from "axios"
import FemaleModal from './Modals/FemaleModal';

const FemaleCount = () => {


    const [femaleCount, setCount] = useState(0)

    const result = async () => {
        try {
            const response = await axios.get("http://localhost:8080/clerk/student/total/female")
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
                    }}><b>Total of Female Students Enrolled</b></p>
                    <Card.Text>
                        {femaleCount}
                    </Card.Text>
                    <FemaleModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default FemaleCount;