import Card from "react-bootstrap/Card"
import { useState, useEffect } from "react";
import axios from "axios"
import SeniorModal from "./Modals/SeniorModal";
import Lottie from "lottie-react"
import senior_ from "../Animations/senior.json"

const SeniorCount = () => {


    const [senior, setData] = useState(0)

    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-senior")
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
            <Card style={{
                width: "15rem"
            }}>
                <Lottie
                    animationData={senior_}
                />
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total Senior Enrolled</b></p>
                    <Card.Text>
                        {senior}
                    </Card.Text>
                    <SeniorModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default SeniorCount;