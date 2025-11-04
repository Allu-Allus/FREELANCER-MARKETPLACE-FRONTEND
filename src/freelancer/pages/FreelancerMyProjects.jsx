import React from 'react'
import FreelancerHeader from '../components/FreelancerHeader'
import { Container, Table, Card, Button, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
function FreelancerMyProjects() {
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
        {/* Page Header */}
        <h2
          style={{
            fontWeight: "700",
            color: "#2d2f33",
            marginBottom: "10px",
          }}
        >
          My Projects
        </h2>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Manage your ongoing and completed freelance projects.
        </p>

        {/* Table Card */}
        <Card
          className="border-0 shadow-sm"
          style={{
            borderRadius: "16px",
            background: "#fff",
          }}
        >
          <Card.Body>
            {/* Table Header Tabs */}
            <div className="d-flex gap-3 mb-4">
              <Button
                variant="light"
                style={{
                  backgroundColor: "#9AAFC2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 16px",
                }}
              >
                Active
              </Button>
              <Button
                variant="outline-secondary"
                style={{
                  borderRadius: "6px",
                  padding: "6px 16px",
                }}
              >
                Completed
              </Button>
              <Button
                variant="outline-secondary"
                style={{
                  borderRadius: "6px",
                  padding: "6px 16px",
                }}
              >
                Cancelled
              </Button>
            </div>

            {/* Projects Table */}
            <Table hover responsive className="align-middle">
              <thead>
                <tr style={{ backgroundColor: "#f8f9fb" }}>
                  <th>Project Title</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Dashboard</td>
                  <td>Riya K.</td>
                  <td>
                    <Badge
                      bg="success"
                      style={{
                        backgroundColor: "#9AAFC2",
                        color: "#fff",
                        fontWeight: "500",
                      }}
                    >
                      Active
                    </Badge>
                  </td>
                  <td>Oct 30</td>
                  <td>
                  <Link to={"/freelancer-projectview"}>
                        <Button
                          style={{
                            backgroundColor: "#9AAFC2",
                            border: "none",
                            borderRadius: "6px",
                            padding: "5px 12px",
                            fontSize: "14px",
                          }}
                        >
                          View
                        </Button>
                  </Link>
                  </td>
                </tr>

               
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default FreelancerMyProjects