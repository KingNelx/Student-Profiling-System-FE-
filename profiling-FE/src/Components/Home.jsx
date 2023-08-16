import NavTitle from "./NavTitle";
import Users from '../Components/Users'
const Home = () => {
    return (
        <div>
            {<NavTitle />}
            <section style={{
                marginTop: "10vh",
                textAlign: "center",
            }}>
                <Users />
            </section>

        </div>
    );
}

export default Home;