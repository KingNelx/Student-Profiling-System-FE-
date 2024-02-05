import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FemaleModal from './Modals/FemaleModal';

const FemaleCount = () => {
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <p><b>Total of Male Students Enrolled</b></p>
                    <Card.Text>
                        100 Total
                    </Card.Text>
                    <FemaleModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default FemaleCount;