import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Pages/Home";
import AdminPage from "./Admin/AdminPage";
import AdminHome from "./Admin/AdminHome";
import AdminSignUp from "./Admin/AdminSignUp";
import FreshmanPage from "./Components/Pages/FreshmanPage";
import SophomorePage from "./Components/Pages/SophomorePage";
import JuniorPage from "./Components/Pages/JuniorPage";
import SeniorPage from "./Components/Pages/SeniorPage";


const App = () => {
    return (
        <div className="bg-main">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminPage" element={<AdminPage />} />
                    <Route path="/adminHome" element={<AdminHome />} />
                    <Route path="/adminSignUp" element={<AdminSignUp />} />
                    <Route path="/freshman" element={<FreshmanPage />} />
                    <Route path="/sophomore" element={<SophomorePage />} />
                    <Route path="/junior" element={<JuniorPage />} />
                    <Route path="/senior" element={<SeniorPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
