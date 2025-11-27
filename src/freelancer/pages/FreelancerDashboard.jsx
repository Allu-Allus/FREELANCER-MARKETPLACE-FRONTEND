import React, { useEffect, useState } from 'react'
import FreelancerHeader from '../components/FreelancerHeader'
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { getFindProjectsAPI } from '../../service/allAPI';

function FreelancerDashboard() {
  
       const [allFindProjects, setAllFindProjects] = useState([])
       
         const getAllProjects = async () => {
           const result = await getFindProjectsAPI()
           setAllFindProjects(result.data)
         }
         console.log(allFindProjects);
       
          useEffect(()=>{
                  getAllProjects()
                  const interval = setInterval(()=>{
                    getAllProjects()
                  },1000)
                  return()=>clearInterval(interval)
                },[]) 
  return (
    <>
<FreelancerHeader/>
  <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9eef3 100%)",
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>
            Welcome back, <span style={{ color: "#9AAFC2" }}>Freelancer 👋</span>
          </h2>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Here’s your performance and latest project opportunities.
          </p>
        </div>

        {/* Dashboard Cards */}
        <Row className="g-4 mb-5">
          <Col md={3}>
            <Card className="text-center border-0 shadow-sm p-3 rounded-4">
              <Card.Body>
                <div style={{ fontSize: "30px" }}>💼</div>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Active Projects
                </h5>
                <h3 style={{ color: "#9AAFC2", fontWeight: "700" }}>5</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-center border-0 shadow-sm p-3 rounded-4">
              <Card.Body>
                <div style={{ fontSize: "30px" }}>📑</div>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Submitted Proposals
                </h5>
                <h3 style={{ color: "#9AAFC2", fontWeight: "700" }}>12</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-center border-0 shadow-sm p-3 rounded-4">
              <Card.Body>
                <div style={{ fontSize: "30px" }}>⭐</div>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Ratings & Reviews
                </h5>
                <h3 style={{ color: "#9AAFC2", fontWeight: "700" }}>4.8</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-center border-0 shadow-sm p-3 rounded-4">
              <Card.Body>
                <div style={{ fontSize: "30px" }}>💰</div>
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Total Earnings
                </h5>
                <h3 style={{ color: "#9AAFC2", fontWeight: "700" }}>$3,200</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Proposals */}
        <div className="mb-5">
          <h4
            style={{
              color: "#2d2f33",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            📋 Recent Proposals Status
          </h4>
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr style={{ color: "#7A8797" }}>
                    <th>Project Title</th>
                    <th>Client</th>
                    <th>Budget</th>
                    <th>MyStatus</th>
                    <th>ClientStatus</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>React Landing Page</td>
                    <td>Riya S.</td>
                    <td>$250</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Under Review
                      </span>
                    </td>
                    <td>In Progress</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        style={{ borderRadius: "6px" }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>

        {/* Suggested Projects */}
        <div className="mb-5">
          <h4
            style={{
              color: "#2d2f33",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            💡 Suggested Projects
          </h4>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h5>UI/UX Dashboard Design</h5>
                  <p style={{ color: "#555" }}>
                    Create a clean dashboard UI using Figma.
                  </p>
                  <Button
                    variant="outline-primary"
                    style={{
                      borderColor: "#9AAFC2",
                      color: "#9AAFC2",
                      borderRadius: "8px",
                    }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h5>React Portfolio Website</h5>
                  <p style={{ color: "#555" }}>
                    Build a modern portfolio using React and Tailwind.
                  </p>
                  <Button
                    variant="outline-primary"
                    style={{
                      borderColor: "#9AAFC2",
                      color: "#9AAFC2",
                      borderRadius: "8px",
                    }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h5>Logo Design</h5>
                  <p style={{ color: "#555" }}>
                    Create a creative brand logo for startup.
                  </p>
                  <Button
                    variant="outline-primary"
                    style={{
                      borderColor: "#9AAFC2",
                      color: "#9AAFC2",
                      borderRadius: "8px",
                    }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

     
      </Container>
    </div>
    </>
  )
}

export default FreelancerDashboard