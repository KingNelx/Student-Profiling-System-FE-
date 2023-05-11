import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLogin from './Components/HomeLogin';
import UsersLogin from './Components/UsersLogin';

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/usersLogin" element={<UsersLogin />} />
      </Routes>
      </BrowserRouter>
    </div>
   );
}
 
export default App;