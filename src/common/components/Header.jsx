import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

function Header() {
  return (
    <>
     <Navbar expand="lg" className="py-3" style={{ backgroundColor: "#7A8797" }}>
  <Container fluid className="d-flex align-items-center justify-content-between">

  <div className="d-flex align-items-center ms-3">
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />

  <Navbar.Brand
    href="/dashboard"
    style={{
      fontWeight: "700",
      fontSize: "24px",
      color: "#E8ECF1",
      letterSpacing: "1px",
    }}
  >
    <span style={{ color: "#D0E1F9" }}>Freelance</span>Hub
  </Navbar.Brand>
</div>

    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav className="gap-4">
        <Nav.Link as={Link} to="/" style={{ color: "#FFFFFF" }}>Home</Nav.Link>
        <Nav.Link as={Link} to="/category" style={{ color: "#FFFFFF" }}>Browse Projects</Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{ color: "#FFFFFF" }}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Link to={"/login"}>
      <button className="me-5" align="end"  style={{
            backgroundColor: "#9AAFC2",
            color: "#FFFFFF",
            border: "1px solid #9AAFC2",
            borderRadius: "6px",
            padding: "8px 16px",
          }}>
        
          Login
  
      </button>
    </Link>

  </Container>
</Navbar>





    </>
  )
}

export default Header