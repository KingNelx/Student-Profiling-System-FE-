import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import homeLogo from '../Image/home-logo.png'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'


const Start = () => {
  return (
    <div className='text-center'>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '15vh', backgroundColor: 'goldenrod' }}>
        <Card.Img variant="top" src={homeLogo} className='shadow-lg' />
        <Card.Body>
          <Card.Title>WELCOME TO STUDENT PROFLING</Card.Title>
          <Link to="/users"><Button variant="primary" onClick={Loading}>Get Started</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Start;