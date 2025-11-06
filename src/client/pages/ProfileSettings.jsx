import React from "react";
import { Container, Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import Header from "../components/Header";
import { IoCameraSharp } from "react-icons/io5";
function ProfileSettings() {
  return (
    <>
      <Header />
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
            {/* ===== Left: Personal Info + Profile Picture ===== */}
            <Col lg={6}>
              <Card
                className="border-0 shadow-sm p-4"
                style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
              >
                <h5
                  style={{
                    color: "#2d2f33",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Personal Information
                </h5>

                {/* ===== Profile Picture Upload ===== */}
    {/* ===== Profile Picture Upload ===== */}
<div className="text-center mb-4">
  <div
    style={{
      position: "relative",
      display: "inline-block",
      width: "130px",
      height: "130px",
    }}
  >
    <Image
      src="https://via.placeholder.com/130"
      roundedCircle
      alt="Profile"
      style={{
        width: "130px",
        height: "130px",
        objectFit: "cover",
        border: "3px solid #9AAFC2",
      }}
    />

    {/* Camera Icon Overlay */}
    <Form.Label
      htmlFor="profilePic"
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        backgroundColor: "#9AAFC2",
        color: "#fff",
        borderRadius: "50%",
        width: "42px",
        height: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "20px",
        border: "2px solid #fff",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      }}
    >
      <IoCameraSharp />
    </Form.Label>

    <Form.Control
      type="file"
      id="profilePic"
      accept="image/*"
      style={{ display: "none" }}
    />
  </div>

  <p className="mt-3 mb-0" style={{ color: "#7A8797", fontSize: "14px" }}>
    Upload a profile picture (JPG or PNG)
  </p>
</div>



                {/* ===== Form ===== */}
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

            {/* ===== Right: Security Section ===== */}
            <Col lg={6}>
              <Card
                className="border-0 shadow-sm p-4"
                style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
              >
                <h5
                  style={{
                    color: "#2d2f33",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
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

                  {/* <Form.Check
                    type="switch"
                    id="twofa-switch"
                    label="Enable Two-Factor Authentication (2FA)"
                    className="mb-3"
                  /> */}

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
        </Container>
      </div>
    </>
  );
}

export default ProfileSettings;
