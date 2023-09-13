import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Components/Start';
import Users from './Components/Users';
import AdminSignIn from './Admin/AdminSignIn';
import AdminSignUp from './Admin/AdminSignUp';
import ClerkSignIn from './Clerk/ClerkSignIn';
import ClerkSignUp from './Clerk/ClerkSignUp';
import AdminHome from './Admin/AdminHome';
import ClerkHome from './Clerk/ClerkHome';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/adminSignIn" element={<AdminSignIn />} />
                    <Route path="/adminSignUp" element={<AdminSignUp />} />
                    <Route path="/adminHome" element={<AdminHome />} />
                    <Route path="/clerkSignIn" element={<ClerkSignIn />} />
                    <Route path="/clerkSignUp" element={<ClerkSignUp />} />
                    <Route path="/clerkHome" element={<ClerkHome />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;