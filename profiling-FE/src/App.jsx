import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;