import Dropdown from 'react-bootstrap/Dropdown'
import Males from './Males';
import Females from './Females';

const OtherData = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic' className='text-center'>
                SEE OTHERS
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
                <Dropdown.Item>{<Males />}</Dropdown.Item>
                <Dropdown.Item> {<Females />} </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default OtherData;