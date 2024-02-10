import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavBar from "./Pages/HomeNavBar";
import SignUpForm from "./Components/SignUpForm"
import AdminHome from "./Admin/AdminHome";


const App = () => {
    return (
        <div className="bg-main ">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeNavBar />} />
                    <Route path="/sign-up" element={<SignUpForm />} />
                    <Route path="/admin-home" element={<AdminHome />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
