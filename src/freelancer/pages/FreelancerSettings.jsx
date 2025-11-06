import React from 'react'
import FreelancerHeader from '../components/FreelancerHeader'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { IoCameraSharp } from "react-icons/io5";
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
          <Col md={3} className="text-center mb-3 mb-md-0">
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "140px",
          height: "140px",
        }}
      >
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

        {/* Camera Icon for Upload */}
        <Form.Label
          htmlFor="uploadProfile"
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            backgroundColor: "#9AAFC2",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            border: "2px solid #fff",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
        >
            <IoCameraSharp />
          {/* <i className="bi bi-camera"></i> */}
        </Form.Label>

        <Form.Control
          type="file"
          id="uploadProfile"
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>

      <p className="mt-2 mb-0" style={{ color: "#7A8797", fontSize: "14px" }}>
        Change / Upload Profile
      </p>
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