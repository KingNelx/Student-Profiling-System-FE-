import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import ModalForm from './ModalForm';
import ModalFormMales from './ModalFormMales';
import ModalFormFemales from './ModalFormFemales';


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
                    <Accordion.Header>
                        <span class="material-icons">add</span>
                        RECORD STUDENTS
                    </Accordion.Header>
                    <Accordion.Body>
                        <ModalForm />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span class="material-icons">
                            post_add
                        </span>
                        ALL MALE STUDENTS
                    </Accordion.Header>
                    <Accordion.Body>
                        <ModalFormMales />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span class="material-icons">
                            post_add
                        </span>
                        ALL FEMALE STUDENTS
                    </Accordion.Header>
                    <Accordion.Body>
                        <ModalFormFemales />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <span class="material-icons">
                            mail
                        </span>
                        STUDENT REPORTS
                    </Accordion.Header>
                    <Accordion.Body>
                        TEST
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <span class="material-icons">
                            admin_panel_settings
                        </span>
                        SUMMARY OF ENROLLMENT
                    </Accordion.Header>
                    <Accordion.Body>
                        TEST
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <span class="material-icons">
                            settings
                        </span>
                        SETTINGS
                    </Accordion.Header>
                    <Accordion.Body>
                        <Link to="/" onClick={loadContent}>
                            LOG OUT
                           </Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Accordions;