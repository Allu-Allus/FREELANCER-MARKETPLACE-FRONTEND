import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";


function FreelancerHeader() {
    const linkStyle = {
    fontWeight: "500",
    color: "#2d2f33",
    fontSize: "16px",
    transition: "0.3s",
  };
  return (
    <>
    
   
     <Navbar
        expand="lg"
        fixed="top"
        style={{
          backgroundColor: "#f8f9fa",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "12px 0",
          zIndex: 1000,
        }}
      >
        <Container fluid className="px-4">
          {/* --- Left: Logo --- */}
          <Navbar.Brand
            href="/dashboard"
            style={{
              fontWeight: "700",
              fontSize: "24px",
              color: "#2d2f33",
            }}
          >
            <span style={{ color: "#9AAFC2" }}>Freelance</span>Hub
          </Navbar.Brand>

          {/* Toggle button (for mobile) */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* --- Center: Navigation Links --- */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav style={{ gap: "25px" }}>
               <Nav.Link href="freelancer-dashboard" style={linkStyle}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/find-project" style={linkStyle}>
              Find Projects
            </Nav.Link>
            {/* <Nav.Link href="/my-proposals" style={linkStyle}>
              My Proposals
            </Nav.Link> */}
            <Nav.Link href="/freelancer-myprojects" style={linkStyle}>
              My Projects
            </Nav.Link>
         
            {/* <Nav.Link href="/earnings" style={linkStyle}>
              Earnings
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>

          {/* --- Right: Profile Dropdown --- */}
          <Dropdown className="me-5" align="end">
            <Dropdown.Toggle
              variant="light"
              id="profile-dropdown"
              style={{
                backgroundColor: "#9AAFC2",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                fontWeight: "500",
              }}
            >
              My Account
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                border: "none",
              }}
            >
              <Dropdown.Item href="/freelancer-profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/freelancer-settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="/logout"
                style={{ color: "#dc3545", fontWeight: "500" }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  )
}

export default FreelancerHeader