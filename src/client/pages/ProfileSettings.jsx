import React from 'react'
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import Header from '../components/Header';

function ProfileSettings() {
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
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>Profile & Settings</h2>
          <p style={{ color: "#7A8797" }}>
            Manage your account details, password, and preferences here.
          </p>
        </div>

        <Row className="g-4">
          {/* Personal Info */}
          <Col lg={6}>
            <Card
              className="border-0 shadow-sm p-4"
              style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
            >
              <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>
                Personal Information
              </h5>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="you@example.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company (optional)</Form.Label>
                  <Form.Control type="text" placeholder="Company name" />
                </Form.Group>

                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontWeight: "500",
                  }}
                >
                  Save Changes
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Security */}
          <Col lg={6}>
            <Card
              className="border-0 shadow-sm p-4"
              style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
            >
              <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>
                Security
              </h5>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter current password" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter new password" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control type="password" placeholder="Re-enter new password" />
                </Form.Group>

                <Form.Check
                  type="switch"
                  id="twofa-switch"
                  label="Enable Two-Factor Authentication (2FA)"
                  className="mb-3"
                />

                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontWeight: "500",
                  }}
                >
                  Update Password
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Preferences Section */}
        <Card
          className="border-0 shadow-sm p-4 mt-4"
          style={{
            borderRadius: "16px",
            backgroundColor: "#ffffff",
          }}
        >
          <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>
            Preferences
          </h5>

          <Form>
            <Form.Check
              type="switch"
              id="notifications"
              label="Receive Email Notifications"
              className="mb-3"
            />

            <Form.Check
              type="switch"
              id="payment-updates"
              label="Notify me about payment updates"
              className="mb-3"
            />

            <Form.Check
              type="switch"
              id="newsletter"
              label="Subscribe to newsletter"
              className="mb-4"
            />

            <Button
              style={{
                backgroundColor: "#9AAFC2",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                fontWeight: "500",
              }}
            >
              Save Preferences
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default ProfileSettings