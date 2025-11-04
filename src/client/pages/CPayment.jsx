import React from 'react'
import { Container, Card, Table, Button, Row, Col } from "react-bootstrap";
import Header from '../components/Header';

function CPayment() {
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
        <div className="text-center mb-4">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>Payments</h2>
          <p style={{ color: "#7A8797" }}>
            Track your transactions, pending payments, and escrow funds.
          </p>
        </div>

        {/* Summary Cards */}
        <Row className="g-4 mb-4 text-center">
          <Col md={4}>
            <Card
              className="border-0 shadow-sm py-4"
              style={{
                backgroundColor: "#e9f1f7",
                borderRadius: "16px",
              }}
            >
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Total Paid</h5>
              <h3 style={{ color: "#9AAFC2", fontWeight: "700" }}>$2,350</h3>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="border-0 shadow-sm py-4"
              style={{
                backgroundColor: "#fff3cd",
                borderRadius: "16px",
              }}
            >
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Pending</h5>
              <h3 style={{ color: "#856404", fontWeight: "700" }}>$420</h3>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="border-0 shadow-sm py-4"
              style={{
                backgroundColor: "#d1ecf1",
                borderRadius: "16px",
              }}
            >
              <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>In Escrow</h5>
              <h3 style={{ color: "#0c5460", fontWeight: "700" }}>$780</h3>
            </Card>
          </Col>
        </Row>

        {/* Payments Table */}
        <Card className="border-0 shadow-sm p-4" style={{ borderRadius: "16px" }}>
          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead>
                <tr style={{ backgroundColor: "#e9ecef" }}>
                  <th>Project</th>
                  <th>Freelancer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Portfolio Website</td>
                  <td>Arjun R.</td>
                  <td>$250</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#d4edda",
                        color: "#155724",
                        padding: "4px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Paid
                    </span>
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      style={{
                        borderColor: "#9AAFC2",
                        color: "#9AAFC2",
                        fontWeight: "500",
                        borderRadius: "6px",
                      }}
                    >
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>Logo Design</td>
                  <td>Sneha Kapoor</td>
                  <td>$100</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#fff3cd",
                        color: "#856404",
                        padding: "4px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Pending
                    </span>
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      style={{
                        borderColor: "#9AAFC2",
                        color: "#9AAFC2",
                        fontWeight: "500",
                        borderRadius: "6px",
                      }}
                    >
                      View
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>App UI Design</td>
                  <td>Vikram S.</td>
                  <td>$400</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#d1ecf1",
                        color: "#0c5460",
                        padding: "4px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Escrow
                    </span>
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      style={{
                        borderColor: "#9AAFC2",
                        color: "#9AAFC2",
                        fontWeight: "500",
                        borderRadius: "6px",
                      }}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
    </div>
    
    
    </>
  )
}

export default CPayment