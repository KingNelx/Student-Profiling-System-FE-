import Card from "react-bootstrap/Card"
import axios from "axios"
import { useState, useEffect } from "react"
import ReturneeModal from "./Modals/ReturneeModal";
import Lottie from "lottie-react";
import returnee_ from "../Animations/returnee.json"

const ReturneeCount = () => {

    const [returnee, setData] = useState(0);
    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-returnee")
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
                    animationData={returnee_}
                />
                <Card.Body>
                    <p style={
                        { backgroundColor: "skyblue" }
                    }><b>Total Returnee Student</b></p>
                    <Card.Text>
                        {returnee}
                    </Card.Text>
                    <ReturneeModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default ReturneeCount;