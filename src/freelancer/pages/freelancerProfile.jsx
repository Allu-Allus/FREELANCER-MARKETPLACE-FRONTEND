import React from 'react'
import FreelancerHeader from '../components/FreelancerHeader'
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function freelancerProfile() {
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
        {/* Profile Header */}
        <Card
          className="border-0 shadow-sm mb-4 p-4"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          }}
        >
          <Row className="align-items-center">
            <Col md={3} className="text-center mb-3 mb-md-0">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #9AAFC2",
                }}
              />
            </Col>
            <Col md={9}>
              <h3 style={{ color: "#2d2f33", fontWeight: "700" }}>Sneha Kapoor</h3>
              <p style={{ color: "#7A8797", fontSize: "18px" }}>
                UI/UX Designer • 5+ Years Experience
              </p>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Passionate about crafting modern, user-friendly interfaces and experiences.
                I love combining creativity with usability to deliver meaningful digital products.
              </p>
              <Button
                style={{
                  backgroundColor: "#9AAFC2",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 18px",
                }}
              >
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Skills Section */}
        <Card
          className="border-0 shadow-sm mb-4"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          }}
        >
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Skills</h5>
            <div style={{ marginTop: "15px" }}>
              {["Figma", "Adobe XD", "React", "Tailwind", "HTML", "CSS"].map((skill) => (
                <Badge
                  key={skill}
                  bg="light"
                  text="dark"
                  style={{
                    marginRight: "8px",
                    marginBottom: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#e3e8ef",
                    borderRadius: "12px",
                    fontWeight: "500",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* Portfolio Section */}
        <Card
          className="border-0 shadow-sm mb-4"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          }}
        >
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Portfolio</h5>
            <Row className="mt-3 g-3">
              {[
                "https://via.placeholder.com/300x200?text=App+Design",
                "https://via.placeholder.com/300x200?text=Dashboard+UI",
                "https://via.placeholder.com/300x200?text=Landing+Page",
              ].map((image, index) => (
                <Col md={4} key={index}>
                  <Card className="border-0 shadow-sm" style={{ borderRadius: "12px" }}>
                    <Card.Img
                      src={image}
                      alt="Portfolio"
                      style={{
                        borderRadius: "12px",
                        objectFit: "cover",
                        height: "200px",
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        {/* Experience & Education */}
        <Row>
          <Col md={6}>
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Experience</h5>
                <ul style={{ color: "#555", marginTop: "15px" }}>
                  <li>
                    <strong>Senior UI/UX Designer</strong> – Creative Studio (2021–Present)
                  </li>
                  <li>
                    <strong>Web Designer</strong> – Pixel Labs (2018–2021)
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Education</h5>
                <ul style={{ color: "#555", marginTop: "15px" }}>
                  <li>
                    <strong>Bachelor’s in Design</strong> – Delhi University (2018)
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Reviews & Ratings */}
        <Card
          className="border-0 shadow-sm"
          style={{
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          }}
        >
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Client Reviews</h5>
            <div className="mt-3">
              <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <p style={{ color: "#555", fontStyle: "italic" }}>
                    “Sneha was professional and creative! Delivered the dashboard UI before the deadline.”
                  </p>
                  <p style={{ color: "#7A8797", marginBottom: "0" }}>– Arjun R. ⭐⭐⭐⭐⭐</p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <p style={{ color: "#555", fontStyle: "italic" }}>
                    “Excellent work! Smooth communication and high-quality design.”
                  </p>
                  <p style={{ color: "#7A8797", marginBottom: "0" }}>– Meera S. ⭐⭐⭐⭐☆</p>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default freelancerProfile