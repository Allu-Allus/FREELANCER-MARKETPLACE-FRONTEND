import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Header from '../components/Header';

function BrowseFreelancer() {
  return (
    <>
    <Header/>
     <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>Browse Freelancers</h2>
          <p style={{ color: "#7A8797" }}>
            Discover top talent for your next project.
          </p>
        </div>

        {/* Search Filters */}
        <Card
          className="border-0 shadow-sm p-4 mb-5"
          style={{ borderRadius: "16px", backgroundColor: "#fff" }}
        >
          <Row className="g-3">
            <Col md={3}>
              <Form.Control type="text" placeholder="Search by Skill or Name" />
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Category</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Experience</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Price Range</option>
                <option>$5 - $20/hr</option>
                <option>$20 - $50/hr</option>
                <option>$50+/hr</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Rating</option>
                <option>4★ & up</option>
                <option>3★ & up</option>
              </Form.Select>
            </Col>
            <Col md={1}>
              <Button
                style={{
                  backgroundColor: "#9AAFC2",
                  border: "none",
                  borderRadius: "6px",
                  width: "100%",
                }}
              >
                🔍
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Freelancer Cards */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4 text-center"
              style={{
                borderRadius: "20px",
                background: "#ffffff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="Freelancer"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #9AAFC2",
                }}
              />
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Arjun Mehta</h5>
              <p style={{ color: "#7A8797", marginBottom: "6px" }}>
                Full Stack Developer
              </p>
              <p style={{ color: "#555", fontSize: "14px" }}>⭐ 4.8 (35 reviews)</p>
              <p style={{ color: "#2d2f33", fontWeight: "600" }}>$40/hr</p>

              <div>
                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 16px",
                    marginRight: "10px",
                  }}
                >
                  View Profile
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    borderColor: "#9AAFC2",
                    color: "#9AAFC2",
                    borderRadius: "6px",
                    padding: "6px 16px",
                  }}
                >
                  Hire Now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4 text-center"
              style={{
                borderRadius: "20px",
                background: "#ffffff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="Freelancer"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #9AAFC2",
                }}
              />
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Sneha Kapoor</h5>
              <p style={{ color: "#7A8797", marginBottom: "6px" }}>
                UI/UX Designer
              </p>
              <p style={{ color: "#555", fontSize: "14px" }}>⭐ 4.9 (42 reviews)</p>
              <p style={{ color: "#2d2f33", fontWeight: "600" }}>$35/hr</p>

              <div>
                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 16px",
                    marginRight: "10px",
                  }}
                >
                  View Profile
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    borderColor: "#9AAFC2",
                    color: "#9AAFC2",
                    borderRadius: "6px",
                    padding: "6px 16px",
                  }}
                >
                  Hire Now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4 text-center"
              style={{
                borderRadius: "20px",
                background: "#ffffff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt="Freelancer"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #9AAFC2",
                }}
              />
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Ravi Kumar</h5>
              <p style={{ color: "#7A8797", marginBottom: "6px" }}>
                Mobile App Developer
              </p>
              <p style={{ color: "#555", fontSize: "14px" }}>⭐ 4.7 (28 reviews)</p>
              <p style={{ color: "#2d2f33", fontWeight: "600" }}>$45/hr</p>

              <div>
                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 16px",
                    marginRight: "10px",
                  }}
                >
                  View Profile
                </Button>
                <Button
                  variant="outline-secondary"
                  style={{
                    borderColor: "#9AAFC2",
                    color: "#9AAFC2",
                    borderRadius: "6px",
                    padding: "6px 16px",
                  }}
                >
                  Hire Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default BrowseFreelancer