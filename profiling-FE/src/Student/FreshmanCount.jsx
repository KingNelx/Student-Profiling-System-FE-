import { useState, useEffect } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import FreshmanModal from "./Modals/FreshmanModal";
import Lottie from "lottie-react"
import freshman_ from "../Animations/freshman.json"

const FreshmanCount = () => {

    const [freshman, setData] = useState(0)
    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-freshman")
        try {
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        result()
    }, [])

    return (
        <div className="mt-5">
            <Card style={{ width: "15rem" }}>
                <Lottie
                    animationData={freshman_}
                />
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total Freshman Enrolled</b></p>
                    <Card.Text>
                        {freshman}
                    </Card.Text>
                    <FreshmanModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default FreshmanCount;