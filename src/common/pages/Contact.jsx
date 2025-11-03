import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {  FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
function Contact() {
  return (
    <>
 
      {/* --- CONTACT FORM & MAP --- */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
        <Container>
          <Row className="align-items-center">
            {/* FORM */}
            <Col md={6} className="mb-5 mb-md-0">
              <Card
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#7A8797",
                  color: "#fff",
                  padding: "40px",
                  border: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <h4 style={{ fontWeight: "700", marginBottom: "25px" }}>Get In Touch</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                  </Form.Group>
                  <Button
                    style={{
                      backgroundColor: "#9AAFC2",
                      border: "none",
                      padding: "10px 30px",
                      borderRadius: "30px",
                      fontWeight: "600",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#AEBBCC")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9AAFC2")}
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>

            {/* MAP + SOCIAL */}
            <Col md={6}>
              <div
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  marginBottom: "25px",
                }}
              >
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.01402790545!2d-0.11982479999999999!3d51.5032972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760351813fb2b5%3A0x7dc6e74091896af!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1696082212264!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div>
                <h5 style={{ fontWeight: "600", marginBottom: "15px" }}>Follow Us</h5>
                <div className="d-flex gap-3">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      style={{
                        color: "#7A8797",
                        fontSize: "20px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#9AAFC2")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8797")}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact