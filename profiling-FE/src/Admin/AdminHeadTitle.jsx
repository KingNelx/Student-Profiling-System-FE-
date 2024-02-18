import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AdminHeadTitle = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='m-auto fw-bold'>
                     STUDENT PROFILING SYSTEM
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default AdminHeadTitle;