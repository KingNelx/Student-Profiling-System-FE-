import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogIn from './Pages/UserLogIn';
import AdminSignIn from './Admin/AdminSignIn';
import AdminSignUp from './Admin/AdminSignUp';
import AdminView from './Admin/AdminView';
import ClerkSignIn from './Clerk/ClerkSignIn';
import ClerkSignUp from './Clerk/ClerkSignUp';
import ClerkView from './Clerk/ClerkView'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/userLogIn" element={<UserLogIn />} />
                    <Route path="/adminSignIn" element={<AdminSignIn />} />
                    <Route path="/adminSignUp" element={<AdminSignUp />} />
                    <Route path="/adminView" element={<AdminView />} />
                    <Route path="clerkSignIn" element={<ClerkSignIn />} />
                    <Route path="/clerkSignUp"  element={<ClerkSignUp />}/>
                    <Route path="/clerkView" element={<ClerkView />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;