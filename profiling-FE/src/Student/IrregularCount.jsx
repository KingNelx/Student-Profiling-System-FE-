import { useState, useEffect } from "react"
import axios from "axios"
import Card from "react-bootstrap/Card"
import IrregularModal from "./Modals/IrregularModal"
import irregular_ from "../Animations/irregular.json"
import Lottie from "lottie-react"

const IrregularCount = () => {

    const [irregular, setData] = useState(0)

    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-irregular")
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
                    animationData={irregular_}
                />
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}><b>Total Irregular Enrolled</b></p>
                    <Card.Text>
                        {irregular}
                    </Card.Text>
                    <IrregularModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default IrregularCount;