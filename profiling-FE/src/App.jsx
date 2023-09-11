import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Components/Start';
import Users from './Components/Users';
import AdminSignIn from './Admin/AdminSignIn';
import AdminSignUp from './Admin/AdminSignUp';
import ClerkSignIn from './Clerk/ClerkSignIn';
import ClerkSignUp from './Clerk/ClerkSignUp';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/adminSignIn" element={<AdminSignIn />} />
                    <Route path="/adminSignup" element={<AdminSignUp />} />
                    <Route path="/clerkSignIn" element={<ClerkSignIn />} />
                    <Route path="/clerkSignUp" element={<ClerkSignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;