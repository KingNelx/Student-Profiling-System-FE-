import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/user.jpg'
import Users from './Users';
const Home = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand  className='mx-auto p-3'>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        WELCOME TO STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Container>
            </Navbar>

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