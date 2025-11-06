import React from "react";
import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import Header from "../components/Header";

function ProjectDetails() {
  return (
    <>
    <Header/>
      <div
        style={{
          background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
          minHeight: "100vh",
          paddingTop: "90px",
          paddingBottom: "50px",
        }}
      >
        <Container>
          {/* ===== Header ===== */}
          <div className="text-center mb-5">
            <h2
              style={{
                fontWeight: "700",
                color: "#2d2f33",
                marginBottom: "10px",
              }}
            >
              Project Details
            </h2>
            <p style={{ color: "#555" }}>
              Review your project overview, proposals, messages, and payments.
            </p>
          </div>

          <Row className="g-4">
            {/* ===== Left: Project Overview ===== */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm rounded-4 p-4 mb-4 h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <h4 style={{ color: "#2d2f33", fontWeight: "700" }}>
                      React Portfolio Website
                    </h4>
                    <Badge bg="success" className="mb-2">
                      Active
                    </Badge>
                  </div>

                  <p style={{ color: "#555", lineHeight: "1.7", marginTop: "10px" }}>
                    Build a professional portfolio website using React and Tailwind CSS.
                    The site should include an About section, project gallery, contact form,
                    and smooth animations. Delivery expected within 2 weeks.
                  </p>

                  {/* Budget & Deadline */}
                  <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-2">
                    <div>
                      <strong style={{ color: "#2d2f33" }}>Budget:</strong>{" "}
                      <span style={{ color: "#9AAFC2", fontWeight: "600" }}>$400</span>
                    </div>
                    <div>
                      <strong style={{ color: "#2d2f33" }}>Deadline:</strong>{" "}
                      <span style={{ color: "#9AAFC2", fontWeight: "600" }}>Nov 15, 2025</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-4">
                    <strong style={{ color: "#2d2f33" }}>Skills Required:</strong>
                    <div className="mt-3 d-flex flex-wrap gap-2">
                      {["React", "Tailwind CSS", "UI/UX", "JavaScript"].map((skill, i) => (
                        <Badge
                          key={i}
                          bg="light"
                          text="dark"
                          style={{
                            border: "1px solid #9AAFC2",
                            fontWeight: "500",
                            padding: "8px 12px",
                            borderRadius: "8px",
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* ===== Right: Proposals ===== */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm rounded-4 p-4 mb-4 h-100">
                <Card.Body>
                  <h5
                    style={{
                      color: "#2d2f33",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    📑 Proposals
                  </h5>
                  <hr className="mt-0 mb-3" />

                  <Table responsive borderless hover className="align-middle mb-3">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Arjun R.</strong> <br />
                          <span style={{ color: "#7A8797" }}>4.9 ⭐ | 25 projects</span>
                        </td>
                        <td className="text-end fw-semibold">$400</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Meera K.</strong> <br />
                          <span style={{ color: "#7A8797" }}>4.7 ⭐ | 18 projects</span>
                        </td>
                        <td className="text-end fw-semibold">$380</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      borderColor: "#9AAFC2",
                      color: "#9AAFC2",
                      fontWeight: "500",
                      padding: "8px 0",
                    }}
                  >
                    View All Proposals
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectDetails;
