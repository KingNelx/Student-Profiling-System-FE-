import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/user.jpg'

const NavTitle = () => {
    return (
        <div className='nav-title'>
            <Navbar className="bg-body-tertiary shadow-lg">
                <Container>
                    <Navbar.Brand className='mx-auto p-3'>
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
        </div>
    );
}

export default NavTitle;