import Dropdown from 'react-bootstrap/Dropdown'
import Males from './Males';

const OtherData = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
                SEE MORE
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>{<Males />}</Dropdown.Item>
                <Dropdown.Item> LINK 1</Dropdown.Item>
                <Dropdown.Item> LINK 1</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default OtherData;