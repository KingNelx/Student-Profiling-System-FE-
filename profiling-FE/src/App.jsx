import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Components/Start';

const App = () => {
    return ( 
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Start />} />
                </Routes>
            </Router>
        </div>
     );
}
 
export default App;