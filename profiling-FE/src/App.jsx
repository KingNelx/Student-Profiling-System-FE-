import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                   <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;