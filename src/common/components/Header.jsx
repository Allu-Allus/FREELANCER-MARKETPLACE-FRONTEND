import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
 <Navbar expand="lg" className="py-3" style={{ backgroundColor: "#7A8797" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">

        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />

          <Navbar.Brand href="#home" className="ms-2" style={{ color: "#FFFFFF"}} > Logo</Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
          <Nav className="gap-4">
    <Nav.Link as={Link} to="/" style={{ color: "#FFFFFF" }}>Home</Nav.Link>
<Nav.Link as={Link} to="/projects" style={{ color: "#FFFFFF" }}>Browse Projects</Nav.Link>
<Nav.Link as={Link} to="/about" style={{ color: "#FFFFFF" }}>About</Nav.Link>
<Nav.Link as={Link} to="/contact" style={{ color: "#FFFFFF" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="me-4">
          <button style={{ backgroundColor: "#9AAFC2",color: "#FFFFFF",border: "1px solid #9AAFC2",borderRadius: "6px", }} className="px-3 py-2" > Login</button>
        </div>
      </Container>
    </Navbar>




    </>
  )
}

export default Header