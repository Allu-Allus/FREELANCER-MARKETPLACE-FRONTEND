import React from 'react'
import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";

function ProjectDetails() {
  return (
    <>
    <div
      style={{
        background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        {/* Header */}
        <h2
          style={{
            fontWeight: "700",
            color: "#2d2f33",
            marginBottom: "15px",
          }}
        >
          Project Details
        </h2>
        <p style={{ color: "#555", marginBottom: "40px" }}>
          Review your project overview, proposals, messages, and payments.
        </p>

        <Row className="g-4">
          {/* Left: Project Overview */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <Card.Body>
                <h4 style={{ color: "#2d2f33", fontWeight: "700" }}>
                  React Portfolio Website
                </h4>
                <Badge bg="success" className="mb-3">
                  Active
                </Badge>
                <p style={{ color: "#555", lineHeight: "1.7" }}>
                  Build a professional portfolio website using React and Tailwind CSS.
                  The site should include an About section, project gallery, contact form,
                  and smooth animations. Delivery expected within 2 weeks.
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <strong style={{ color: "#2d2f33" }}>Budget:</strong>{" "}
                    <span style={{ color: "#9AAFC2", fontWeight: "600" }}>$400</span>
                  </div>
                  <div>
                    <strong style={{ color: "#2d2f33" }}>Deadline:</strong>{" "}
                    <span style={{ color: "#9AAFC2", fontWeight: "600" }}>Nov 15, 2025</span>
                  </div>
                </div>

                <div className="mt-4">
                  <strong style={{ color: "#2d2f33" }}>Skills Required:</strong>
                  <div className="mt-2">
                    {["React", "Tailwind CSS", "UI/UX", "JavaScript"].map((skill, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="me-2"
                        style={{ border: "1px solid #9AAFC2", fontWeight: "500" }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Messages */}
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <Card.Body>
                <h5 style={{ color: "#2d2f33", fontWeight: "700" }}>💬 Messages</h5>
                <hr />
                <div style={{ color: "#555" }}>
                  <p>
                    <strong>Riya (Client):</strong> Hi Arjun! How’s the progress going?
                  </p>
                  <p>
                    <strong>Arjun (Freelancer):</strong> Almost done with the homepage, will
                    share the demo soon! 🚀
                  </p>
                </div>
                <Button
                  variant="outline-primary"
                  style={{
                    borderColor: "#9AAFC2",
                    color: "#9AAFC2",
                    borderRadius: "8px",
                  }}
                >
                  Open Chat
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Proposals & Payment */}
          <Col lg={4}>
            {/* Proposals */}
            <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
              <Card.Body>
                <h5 style={{ color: "#2d2f33", fontWeight: "700" }}>📑 Proposals</h5>
                <hr />
                <Table responsive borderless hover>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Arjun R.</strong> <br />
                        <span style={{ color: "#7A8797" }}>4.9 ⭐ | 25 projects</span>
                      </td>
                      <td className="text-end">$400</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Meera K.</strong> <br />
                        <span style={{ color: "#7A8797" }}>4.7 ⭐ | 18 projects</span>
                      </td>
                      <td className="text-end">$380</td>
                    </tr>
                  </tbody>
                </Table>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  style={{
                    borderRadius: "6px",
                    width: "100%",
                    borderColor: "#9AAFC2",
                    color: "#9AAFC2",
                  }}
                >
                  View All Proposals
                </Button>
              </Card.Body>
            </Card>

            {/* Payment */}
            <Card className="border-0 shadow-sm rounded-4 p-4">
              <Card.Body>
                <h5 style={{ color: "#2d2f33", fontWeight: "700" }}>💰 Payments</h5>
                <hr />
                <p style={{ color: "#555" }}>
                  <strong>Total:</strong> $400
                </p>
                <p style={{ color: "#555" }}>
                  <strong>Status:</strong>{" "}
                  <Badge bg="warning" text="dark">
                    In Escrow
                  </Badge>
                </p>
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    fontWeight: "500",
                  }}
                >
                  Release Payment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default ProjectDetails