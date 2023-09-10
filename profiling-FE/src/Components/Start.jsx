import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import homeLogo from '../Image/home-logo.png'

const Start = () => {
  return (
    <div className='text-center'>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '20vh' }}>
        <Card.Img variant="top" src={homeLogo} className='shadow-lg'/>
        <Card.Body>
          <Card.Title>WELCOME TO STUDENT PROFLING</Card.Title>
          <Button variant="outline-primary">Get Started</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Start;