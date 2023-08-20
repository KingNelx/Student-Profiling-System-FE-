import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import AdminSignIn from './Admin/AdminSignIn';
import AdminHome from './Admin/AdminHome';
import ClerkSignUp from './Clerk/ClerkSignUp';
import ClerkSignIn from './Clerk/ClerkSignIn';
import ClerkHome from './Clerk/ClerkHome';
import AdminSignUp from './Admin/AdminSignUp';
import AdminView from './Admin/AdminView';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/adminSignUp" element={<AdminSignUp />} />
                    <Route path="/adminSignIn" element={<AdminSignIn />} />
                    <Route path="/adminHome" element={<AdminHome />} />
                    <Route path="/adminView" element={<AdminView />} />

                    <Route path="/clerkSignUp" element={<ClerkSignUp />} />
                    <Route path="/clerkSignIn" element={<ClerkSignIn />} />
                    <Route path="/clerkHome" element={<ClerkHome />} />

                </Routes>   
            </Router>
        </div>
    );
}

export default App;