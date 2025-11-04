import { Container, Card, Row, Col, Button, Badge } from "react-bootstrap";
import FreelancerHeader from "../components/FreelancerHeader";

function ViewProjectDetails() {

  return (
    <>
        <FreelancerHeader/>

<div
      style={{
        background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        {/* Header */}
        <h2
          style={{
            fontWeight: "700",
            color: "#2d2f33",
            marginBottom: "10px",
          }}
        >
          React Website Redesign
        </h2>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Improve UI, enhance responsiveness, and integrate REST APIs for a smoother user experience.
        </p>

        {/* Main Card */}
        <Card
          className="border-0 shadow-sm p-4 mb-4"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          }}
        >
          <Card.Body>
            <Row>
              {/* Description */}
              <Col lg={8}>
                <h5 style={{ fontWeight: "600", marginBottom: "15px" }}>
                  📝 Description
                </h5>
                <p style={{ color: "#555", lineHeight: "1.7" }}>
                  The project involves redesigning a React-based portfolio website
                  with a focus on improving UI, accessibility, and load speed.
                  The freelancer will collaborate with our backend team to
                  integrate API endpoints and implement responsive layouts for
                  all devices.
                </p>

                <h5 style={{ fontWeight: "600", marginTop: "25px" }}>
                  🧩 Skills Required
                </h5>
                <div className="mb-3">
                  {["React", "CSS", "API Integration", "Responsive Design"].map(
                    (skill, i) => (
                      <Badge
                        key={i}
                        bg="light"
                        text="dark"
                        className="me-2"
                        style={{
                          border: "1px solid #9AAFC2",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </Col>

              {/* Sidebar */}
              <Col lg={4}>
                <Card
                  className="border-0 shadow-sm p-3"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Card.Body>
                    <h5
                      style={{
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#2d2f33",
                      }}
                    >
                      💰 Budget & Timeline
                    </h5>
                    <p style={{ margin: 0 }}>
                      <strong>Budget:</strong> $500
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Deadline:</strong> 10 Days
                    </p>

                    <hr />

                    <h5
                      style={{
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#2d2f33",
                      }}
                    >
                      👤 Client Info
                    </h5>
                    <p style={{ margin: 0 }}>
                      <strong>Name:</strong> Arjun R.
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Location:</strong> Kochi, India
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Rating:</strong> ⭐ 4.8 / 5
                    </p>

                    <div className="text-center mt-4">
                      <Button
                        style={{
                          backgroundColor: "#9AAFC2",
                          border: "none",
                          borderRadius: "6px",
                          fontWeight: "500",
                          padding: "10px 25px",
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>

    </>
  )
}

export default ViewProjectDetails