import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import FreelancerHeader from "../components/FreelancerHeader";
import { Link } from "react-router-dom";


function FindProject() {
  return (
    <>
    <FreelancerHeader/>
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
            marginBottom: "10px",
          }}
        >
          Find Projects
        </h2>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Discover projects that match your skills and interests.
        </p>

        {/* Search Filters */}
        <Card
          className="border-0 shadow-sm p-4 mb-5"
          style={{ borderRadius: "16px", backgroundColor: "#fff" }}
        >
          <Form>
            <Row className="g-3 align-items-center">
              <Col md={3}>
                <Form.Control
                  type="text"
                  placeholder="Search by skill (e.g., React)"
                />
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Budget Range</option>
                  <option>$100 - $300</option>
                  <option>$300 - $600</option>
                  <option>$600+</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Project Type</option>
                  <option>Fixed</option>
                  <option>Hourly</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Duration</option>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>3+ Months</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Client Rating</option>
                  <option>4★ & up</option>
                  <option>3★ & up</option>
                </Form.Select>
              </Col>
              <Col md={1}>
                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    width: "100%",
                  }}
                >
                  🔍
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>

        {/* Project Cards */}
        <Row className="g-4">
          {[1, 2, 3].map((_, i) => (
            <Col lg={6} key={i}>
              <Card
                className="border-0 shadow-sm p-4"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5
                        style={{
                          color: "#2d2f33",
                          fontWeight: "600",
                          marginBottom: "5px",
                        }}
                      >
                        React Website Redesign
                      </h5>
                      <p
                        style={{
                          color: "#555",
                          fontSize: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        Improve UI, optimize performance, and integrate a REST API.
                      </p>
                    </div>
                    <span
                      style={{
                        color: "#9AAFC2",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      $500
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mb-3">
                    {["React", "CSS", "API"].map((skill, j) => (
                      <Badge
                        key={j}
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
                    ))}
                  </div>

                  {/* Footer Info */}
                  <div className="d-flex justify-content-between align-items-center">
                    <small style={{ color: "#777" }}>📅 Posted 2d ago</small>
                    <div>
                    <Link to={"/view-projectdetails"}>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          style={{
                            borderRadius: "6px",
                            borderColor: "#9AAFC2",
                            color: "#9AAFC2",
                            fontWeight: "500",
                            marginRight: "8px",
                          }}
                        >
                          View
                        </Button>
                    </Link>
                      <Button
                        size="sm"
                        style={{
                          backgroundColor: "#9AAFC2",
                          border: "none",
                          borderRadius: "6px",
                          fontWeight: "500",
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </>
  )
}

export default FindProject