import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import ModalForm from './ModalForm';

const Accordions = () => {

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
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>RECORD STUDENT</Accordion.Header>
                    <Accordion.Body>
                        <ModalForm />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>ALL MALE STUDENTS</Accordion.Header>
                    <Accordion.Body>
                       TEST
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>ALL FEMALE STUDENTS</Accordion.Header>
                    <Accordion.Body>
                       TEST
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>SETTINGS</Accordion.Header>
                    <Accordion.Body>
                     <Link to="/" onClick={loadContent}> LOG OUT </Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Accordions;