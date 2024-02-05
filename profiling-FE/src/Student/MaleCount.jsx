import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MaleModal from './Modals/MaleModal';

const MaleCount = () => {
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <p><b>Total of Male Students Enrolled</b></p>
                    <Card.Text>
                        100 Total
                    </Card.Text>
                    <MaleModal />
                </Card.Body>
            </Card>
        </div>
    );
}

export default MaleCount;