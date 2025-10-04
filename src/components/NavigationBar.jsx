import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom custom-shadow" fixed="top" data-bs-theme="dark" bg="dark">
      <Container >
        <Navbar.Brand href="#home" className='d-flex align-items-center gap-2'>
          <img
            alt=""
            src="/ESDS-FINAL-LOGO-BLACK.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
          <div className='d-flex flex-column' style={{color: '#F8B33E'}}>
            <span>Eagle Sight</span>
            <span style={{fontSize: '0.8rem'}}>Detective Services</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#memberships">Memberships</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button className='nav-button' style={{backgroundColor: '#F8B33E', borderColor: '#fff'}}>Get Protected</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar