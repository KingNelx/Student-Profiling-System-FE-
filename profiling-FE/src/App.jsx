import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSignIn from './Admin/AdminSignIn';
import AdminSignUp from './Admin/AdminSignUp';
import AdminHome from './Admin/AdminHome';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin-sign-in' element={<AdminSignIn />} />
                    <Route path='/admin-sign-up' element={<AdminSignUp />} />
                    <Route path="/admin-home" element={<AdminHome />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;