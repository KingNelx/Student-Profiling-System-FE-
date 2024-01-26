import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";



const App = () => {
    return (
        <div className="bg-main">
            <Router>
                <Routes>
                 <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
