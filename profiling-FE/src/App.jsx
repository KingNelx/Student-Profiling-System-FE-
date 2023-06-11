import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogIn from './Pages/UserLogIn';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/userLogIn" element={<UserLogIn />} />
                </Routes>
            </Router>
        </div>
      );
}
 
export default App;