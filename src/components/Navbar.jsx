import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" id='navbar' className="bg-body-tertiary w-100 sticky-navbar">
      <Container fluid>
        <Navbar.Brand 
          href="#home" 
          style={{ 
            fontFamily: "'Josefin Sans', sans-serif", 
            fontWeight: "700" 
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Sampat</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="ms-auto" 
            style={{ 
              fontFamily: "Nunito",
      
            }}
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;