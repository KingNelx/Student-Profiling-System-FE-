import { Link } from "react-router-dom";
import HomeTopNavBar from "./HomeTopNavBar";
import loginbg from '../Images/login-bg.jpg'
const HomeLogin = () => {
    return (
        <div>
            <HomeTopNavBar />
            <div class="card" style={
                {width: "28rem"}
            }>
                <img src={loginbg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Get Started</h5>
                        <Link to="/usersLogin" type="button" class="btn btn-outline-primary">Start</Link>
                    </div>
            </div>
        </div>
    );
}

export default HomeLogin;