import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import AdminPage from './Admin/AdminPage';

const App = () => {
    return (
        <div className="bg-main">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminPage" element={<AdminPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;