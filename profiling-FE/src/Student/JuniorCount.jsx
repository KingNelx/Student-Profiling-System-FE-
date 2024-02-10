import { useState, useEffect } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card"
import JuniorModal from "./Modals/JuniorModal";
import Lottie from "lottie-react";
import junior_ from "../Animations/junior.json"

const JuniorCount = () => {

    const [junior, setData] = useState(0)
    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-junior")
        try {
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        result()
    }, [])

    return (
        <div className="mt-5">
            <Card style={
                { width: "15rem" }
            }>
                <Lottie
                    animationData={junior_}
                />
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total Junior Enrolled</b></p>
                    <Card.Text>
                        {junior}
                    </Card.Text>
                    <JuniorModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default JuniorCount;