import React from 'react'
import FreelancerHeader from '../components/FreelancerHeader'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function FreelancerSettings() {
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
        <h3 className="mb-4" style={{ fontWeight: "700", color: "#2d2f33" }}>
          Account Settings
        </h3>

        <Row className="g-4">
          {/* Profile Picture Edit */}
          <Col md={4}>
            <Card
              className="border-0 shadow-sm p-4 text-center"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <h6 style={{ color: "#2d2f33", fontWeight: "600" }}>Profile Picture</h6>
              <img
                src="https://randomuser.me/api/portraits/women/47.jpg"
                alt="Profile"
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginTop: "15px",
                  border: "4px solid #9AAFC2",
                }}
              />
              <Form.Group controlId="formFile" className="mt-3">
                <Form.Label
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "#9AAFC2",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Upload New
                </Form.Label>
                <Form.Control type="file" style={{ display: "none" }} />
              </Form.Group>
            </Card>
          </Col>

          {/* Personal Info + Security Settings */}
          <Col md={8}>
            {/* Personal Info */}
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h6 style={{ color: "#2d2f33", fontWeight: "600" }}>Personal Info</h6>
                <Form className="mt-3">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    style={{
                      backgroundColor: "#9AAFC2",
                      border: "none",
                      borderRadius: "6px",
                    }}
                  >
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            {/* Password Reset */}
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h6 style={{ color: "#2d2f33", fontWeight: "600" }}>Password Reset</h6>
                <Form className="mt-3">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    style={{
                      backgroundColor: "#9AAFC2",
                      border: "none",
                      borderRadius: "6px",
                    }}
                  >
                    Update Password
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            {/* Notifications */}
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h6 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Notification Settings
                </h6>
                <Form className="mt-3">
                  <Form.Check
                    type="switch"
                    id="email-notifications"
                    label="Email Notifications"
                    className="mb-2"
                  />
                  <Form.Check
                    type="switch"
                    id="project-updates"
                    label="Project Updates"
                    className="mb-2"
                  />
                  <Form.Check
                    type="switch"
                    id="payment-alerts"
                    label="Payment Alerts"
                  />
                </Form>
              </Card.Body>
            </Card>

            {/* Payment Preferences */}
            <Card
              className="border-0 shadow-sm mb-4"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
              }}
            >
              <Card.Body>
                <h6 style={{ color: "#2d2f33", fontWeight: "600" }}>Payment Preferences</h6>
                <Form className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Payment Method</Form.Label>
                    <Form.Select>
                      <option>Bank Transfer</option>
                      <option>PayPal</option>
                      <option>UPI</option>
                    </Form.Select>
                  </Form.Group>
                  <Button
                    style={{
                      backgroundColor: "#9AAFC2",
                      border: "none",
                      borderRadius: "6px",
                    }}
                  >
                    Save Preference
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            {/* Delete Account */}
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: "16px",
                background: "#fff0f0",
              }}
            >
              <Card.Body>
                <h6 style={{ color: "#b32121", fontWeight: "600" }}>Delete Account</h6>
                <p style={{ color: "#7A8797", marginBottom: "10px" }}>
                  Once deleted, your account and data can’t be recovered.
                </p>
                <Button
                  variant="danger"
                  style={{ borderRadius: "6px", backgroundColor: "#d9534f", border: "none" }}
                >
                  Delete Account
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

export default FreelancerSettings