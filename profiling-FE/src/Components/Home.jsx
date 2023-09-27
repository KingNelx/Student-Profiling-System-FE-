import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import User from "./User";

const Home = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary shadow-lg p-3">
        <Container className='flex justify-content-center'>
          <Navbar.Brand >
            STUDENT PROFILING SYSTEM
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={
        { marginTop: '10vh' }
      } className="home-body">
        <User />
      </div>
    </>
  );
};

export default Home;
