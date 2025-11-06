import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Card, Table, Image } from "react-bootstrap";

function Dashboard() {
     const clientName = "Riya";
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
        {/* Header Text */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>
            Welcome Back 👋
          </h2>
          <p style={{ color: "#7A8797", fontSize: "18px" }}>
            Here’s your current project status and new freelancers to explore.
          </p>
        </div>

        {/* Statistics Cards */}
        <Row className="g-4 mb-5 justify-content-center">
          <Col lg={3} md={6}>
            <Card
              className="shadow-sm border-0 text-center p-4"
              style={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.transform = "translateY(-6px)")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.transform = "translateY(0)")
            //   }
            >
              <h4 style={{ color: "#9AAFC2", fontWeight: "700" }}>12</h4>
              <p style={{ color: "#2d2f33", fontWeight: "500" }}>
                Total Projects
              </p>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              className="shadow-sm border-0 text-center p-4"
              style={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.transform = "translateY(-6px)")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.transform = "translateY(0)")
            //   }
            >
              <h4 style={{ color: "#9AAFC2", fontWeight: "700" }}>4</h4>
              <p style={{ color: "#2d2f33", fontWeight: "500" }}>
                Active Projects
              </p>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              className="shadow-sm border-0 text-center p-4"
              style={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.transform = "translateY(-6px)")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.transform = "translateY(0)")
            //   }
            >
              <h4 style={{ color: "#9AAFC2", fontWeight: "700" }}>6</h4>
              <p style={{ color: "#2d2f33", fontWeight: "500" }}>
                Completed Projects
              </p>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card
              className="shadow-sm border-0 text-center p-4"
              style={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.transform = "translateY(-6px)")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.transform = "translateY(0)")
            //   }
            >
              <h4 style={{ color: "#9AAFC2", fontWeight: "700" }}>2</h4>
              <p style={{ color: "#2d2f33", fontWeight: "500" }}>
                Pending Payments
              </p>
            </Card>
          </Col>
        </Row>

        {/* Recent Projects Overview */}
        <section className="mb-5">
          <h4
            style={{
              color: "#2d2f33",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Recent Projects Overview
          </h4>
          <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
            <Card.Body>
              <Table hover responsive className="align-middle">
                <thead>
                  <tr style={{ color: "#7A8797" }}>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website Redesign</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        In Progress
                      </span>
                    </td>
                    <td>₹25,000</td>
                    <td>Nov 10, 2025</td>
                  </tr>
                  <tr>
                    <td>App UI Design</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>₹15,000</td>
                    <td>Oct 25, 2025</td>
                  </tr>
                  <tr>
                    <td>Marketing Campaign</td>
                    <td>
                      <span className="badge bg-info text-dark">Pending</span>
                    </td>
                    <td>₹10,000</td>
                    <td>Nov 20, 2025</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </section>

        {/* Freelancers You May Like */}
        <section className="mb-5">
          <h4
            style={{
              color: "#2d2f33",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Freelancers You May Like
          </h4>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card
                className="border-0 shadow-sm p-4 text-center"
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Image
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  roundedCircle
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Arjun Mehta
                </h5>
                <p style={{ color: "#7A8797" }}>Web Developer</p>
                <button
                  style={{
                    backgroundColor: "#9AAFC2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontWeight: "500",
                  }}
                >
                  View Profile
                </button>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card
                className="border-0 shadow-sm p-4 text-center"
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Image
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  roundedCircle
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Sneha Kapoor
                </h5>
                <p style={{ color: "#7A8797" }}>UI/UX Designer</p>
                <button
                  style={{
                    backgroundColor: "#9AAFC2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontWeight: "500",
                  }}
                >
                  View Profile
                </button>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card
                className="border-0 shadow-sm p-4 text-center"
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Image
                  src="https://randomuser.me/api/portraits/men/60.jpg"
                  roundedCircle
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>
                  Rahul Jain
                </h5>
                <p style={{ color: "#7A8797" }}>App Developer</p>
                <button
                  style={{
                    backgroundColor: "#9AAFC2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontWeight: "500",
                  }}
                >
                  View Profile
                </button>
              </Card>
            </Col>
          </Row>
        </section>

      
      </Container>
    </div>
    </>
  )
}

export default Dashboard