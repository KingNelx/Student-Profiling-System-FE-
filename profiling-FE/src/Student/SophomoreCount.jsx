import { useState, useEffect } from "react"
import axios from "axios"
import Card from "react-bootstrap/Card"
import SophomoreModal from "./Modals/SophomoreModal"
import Lottie from "lottie-react"
import sophomore_ from "../Animations/sophomore.json"

const Sophomore = () => {

    const [sophomore, setData] = useState(0)
    const result = async () => {
        const response = await axios.get("http://localhost:8080/clerk/student/academic-level/total-sophomore")
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
                { width: "15em" }
            }>
                <Lottie
                    animationData={sophomore_}
                />
                <Card.Body>
                    <p style={{
                        backgroundColor: "skyblue"
                    }}>
                        <b>Total Sophomore Enrolled</b>
                    </p>
                    <Card.Text>
                        {sophomore}
                    </Card.Text>
                    <SophomoreModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Sophomore;