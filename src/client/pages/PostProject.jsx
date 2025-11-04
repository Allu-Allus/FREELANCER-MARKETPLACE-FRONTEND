import React from 'react'
import Header from '../components/Header'
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

function PostProject() {
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
        <Card
          className="shadow-sm border-0 p-5 mx-auto"
          style={{
            maxWidth: "700px",
            borderRadius: "16px",
            backgroundColor: "#fff",
          }}
        >
          {/* Page Header */}
          <div className="text-center mb-4">
            <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>
              Post a New Project
            </h2>
            <p style={{ color: "#7A8797" }}>
              Share your project details and find the best freelancers to work with.
            </p>
          </div>

          {/* Form Starts */}
          <Form>
            {/* Project Title */}
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                Project Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a brief title for your project"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  padding: "10px 12px",
                }}
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe your project, goals, and requirements"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  padding: "10px 12px",
                }}
              />
            </Form.Group>

            {/* Skills Required */}
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                Skills Required
              </Form.Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span
                  className="px-3 py-2"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #9AAFC2",
                    color: "#9AAFC2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  HTML
                </span>
                <span
                  className="px-3 py-2"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #9AAFC2",
                    color: "#9AAFC2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  CSS
                </span>
                <span
                  className="px-3 py-2"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #9AAFC2",
                    color: "#9AAFC2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  JavaScript
                </span>
                <span
                  className="px-3 py-2"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #9AAFC2",
                    color: "#9AAFC2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  React
                </span>
                <span
                  className="px-3 py-2"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #9AAFC2",
                    color: "#9AAFC2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Node.js
                </span>
              </div>
            </Form.Group>

            {/* Budget Range */}
            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                    Minimum Budget (₹)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 5000"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      padding: "10px 12px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                    Maximum Budget (₹)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 20000"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      padding: "10px 12px",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Deadline / Duration */}
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                Deadline / Duration
              </Form.Label>
              <Form.Control
                type="date"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  padding: "10px 12px",
                }}
              />
            </Form.Group>

            {/* File Upload */}
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500", color: "#2d2f33" }}>
                File Upload (optional)
              </Form.Label>
              <Form.Control
                type="file"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  padding: "10px 12px",
                }}
              />
            </Form.Group>

            {/* Button */}
            <div className="text-center mt-4">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#9AAFC2",
                  border: "none",
                  padding: "10px 30px",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                Post Project
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default PostProject