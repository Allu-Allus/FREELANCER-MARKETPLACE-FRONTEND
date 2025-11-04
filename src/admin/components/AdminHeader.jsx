import { Navbar, Container, Form, FormControl, Dropdown } from "react-bootstrap";


function AdminHeader() {
    return (
        <>
            <Navbar
                expand="lg"
                fixed="top"
                style={{
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    padding: "10px 0",
                    zIndex: 1000,
                }}
            >
                <Container fluid className="px-4">
                    {/* Logo */}
                    <Navbar.Brand
                        href="/admin/dashboard"
                        style={{
                            fontWeight: "700",
                            fontSize: "22px",
                            color: "#2d2f33",
                        }}
                    >
                        <span style={{ color: "#9AAFC2" }}>Admin</span>Panel
                    </Navbar.Brand>

                    {/* Search Bar */}
                    <Form
                        className="d-none d-md-flex mx-auto"
                        style={{ width: "40%", position: "relative" }}
                    >
                        <FormControl
                            type="search"
                            placeholder="Search users, projects, or reports..."
                            className="me-2"
                            style={{
                                borderRadius: "25px",
                                padding: "10px 15px",
                                border: "1px solid #ced4da",
                                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
                            }}
                        />
                    </Form>

                    {/* Profile Dropdown */}
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            id="dropdown-basic"
                            style={{
                                backgroundColor: "#9AAFC2",
                                border: "none",
                                borderRadius: "25px",
                                padding: "8px 16px",
                                color: "#fff",
                                fontWeight: "500",
                            }}
                        >
                            Admin Name
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            style={{
                                borderRadius: "10px",
                                border: "none",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Dropdown.Item href="/admin/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/admin-dashboard">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="/admin-usermanagement">User Management</Dropdown.Item>
                            <Dropdown.Item href="/admin-projectmanagement">Project Management</Dropdown.Item>
                            <Dropdown.Item href="/admin-transactions">Transactions</Dropdown.Item>
                            

                            <Dropdown.Item href="/admin-settings">Settings</Dropdown.Item>
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

export default AdminHeader