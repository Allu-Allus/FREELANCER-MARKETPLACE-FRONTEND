import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Container, Row, Col, Card, Table } from "react-bootstrap";

function AdminDashboard() {
  return (
    <>
        <AdminHeader/>
<div style={{ marginTop: "90px", backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        {/* Header Text */}
        <h2 style={{ fontWeight: "700", color: "#2d2f33", marginBottom: "10px" }}>
          Welcome Admin 👋
        </h2>
        <p style={{ color: "#555", marginBottom: "40px" }}>
          Here’s your platform overview.
        </p>

        {/* Dashboard Cards */}
        <Row className="g-4 mb-4">
          {[
            { icon: "👥", title: "Total Users", value: "1,248" },
            { icon: "💼", title: "Total Projects", value: "342" },
            { icon: "💰", title: "Total Revenue", value: "$52,340" },
            { icon: "⚡", title: "Active Projects", value: "124" },
            { icon: "🚫", title: "Reported Issues", value: "8" },
          ].map((item, idx) => (
            <Col key={idx} lg={2} md={4} sm={6} xs={12}>
              <Card
                className="text-center shadow-sm"
                style={{
                  border: "none",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #ffffff, #f3f6f8)",
                  transition: "all 0.3s ease",
                  padding: "20px 10px",
                }}
              >
                <div style={{ fontSize: "28px" }}>{item.icon}</div>
                <h6 style={{ color: "#7A8797", marginTop: "8px" }}>{item.title}</h6>
                <h4 style={{ color: "#2d2f33", fontWeight: "700" }}>{item.value}</h4>
              </Card>
            </Col>
          ))}
        </Row>

       

        <Row className="g-4">
          {/* Recent Projects */}
          <Col lg={7}>
            <Card
              className="shadow-sm"
              style={{ border: "none", borderRadius: "16px", padding: "20px" }}
            >
              <h5 style={{ color: "#2d2f33", marginBottom: "20px" }}>
                💼 Recent Projects
              </h5>
              <Table hover responsive>
                <thead>
                  <tr style={{ color: "#7A8797" }}>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>React Portfolio</td>
                    <td>Riya Sharma</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>Logo Design</td>
                    <td>Arjun Mehta</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>eCommerce UI</td>
                    <td>Neha Verma</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>

          {/* Recent Users */}
          <Col lg={5}>
            <Card
              className="shadow-sm"
              style={{ border: "none", borderRadius: "16px", padding: "20px" }}
            >
              <h5 style={{ color: "#2d2f33", marginBottom: "20px" }}>
                👤 Recent Users Joined
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Aarav N.", "Sneha K.", "Rohan D.", "Priya M."].map(
                  (user, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: "10px 0",
                        borderBottom: "1px solid #eaeaea",
                        color: "#2d2f33",
                      }}
                    >
                      {user}
                    </li>
                  )
                )}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    </>
  )
}

export default AdminDashboard