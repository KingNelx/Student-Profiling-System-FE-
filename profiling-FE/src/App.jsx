import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavBar from "./Pages/HomeNavBar";

const App = () => {
    return (
        <div className="bg-main ">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeNavBar />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
