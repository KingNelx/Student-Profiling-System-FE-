import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import home from '../Images/home.jpg'
import sidelogo from '../Images/side-nav-logo.png'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {

    const loadContent = () => {
        let timerInterval
        Swal.fire({
            title: 'Loading!',
            html: 'Please Wait!',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='shadow-lg'>
                <Navbar.Brand className='mx-3'>
                    <img
                        alt=""
                        src={sidelogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    WELCOME TO STUDENT PROFILING SYSTEM
                </Navbar.Brand>
            </Navbar>
            <section className='mt-5 text-center'>
                <Card style={{ width: '18rem', margin: 'auto', marginTop: '20vh' }}>
                    <Card.Img variant="top" src={home} />
                    <Card.Body className='shadow-lg'>
                        <Card.Title>Hi There!</Card.Title>
                        <Card.Text>
                            "Record, View, Edit, or Delete the Students' Data."
                        </Card.Text>
                        <Link to='/userLogIn' type='button'>   <Button variant="primary" onClick={loadContent}>Get Started</Button> </Link>
                    </Card.Body>
                </Card>
            </section>

        </div>
    );
}

export default Home;