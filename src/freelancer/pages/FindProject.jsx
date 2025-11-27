import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";
import FreelancerHeader from "../components/FreelancerHeader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFindProjectsAPI} from "../../service/allAPI"
import ApplyProjectModal from "../components/ApplyProjectModal";


function FindProject() {
  const[allFindProjects,setAllFindProjects]=useState([])

  const getAllProjects = async()=>{
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
        background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        {/* Header */}
        <h2
          style={{
            fontWeight: "700",
            color: "#2d2f33",
            marginBottom: "10px",
          }}
        >
          Find Projects
        </h2>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Discover projects that match your skills and interests.
        </p>

        {/* Search Filters */}
        <Card
          className="border-0 shadow-sm p-4 mb-5"
          style={{ borderRadius: "16px", backgroundColor: "#fff" }}
        >
          <Form>
            <Row className="g-3 align-items-center">
              <Col md={3}>
                <Form.Control
                  type="text"
                  placeholder="Search by skill (e.g., React)"
                />
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Budget Range</option>
                  <option>$100 - $300</option>
                  <option>$300 - $600</option>
                  <option>$600+</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Project Type</option>
                  <option>Fixed</option>
                  <option>Hourly</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Duration</option>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>3+ Months</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Form.Select>
                  <option>Client Rating</option>
                  <option>4★ & up</option>
                  <option>3★ & up</option>
                </Form.Select>
              </Col>
              <Col md={1}>
                <Button
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    width: "100%",
                  }}
                >
                  🔍
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>

        {/* Project Cards */}
        <Row className="g-4">
          { allFindProjects.length > 0 ?(
            allFindProjects.map((projects,index)=>(
                <Col lg={6} key={index}>
              <Card
                className="border-0 shadow-sm p-4"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
                  transition: "all 0.3s ease",
                   height: "320px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
  <h5
    style={{
      color: "#2d2f33",
      fontWeight: "600",
      marginBottom: "0",
    }}
  >
    {projects.title}
  </h5>
  <span
    style={{
      color: "#9AAFC2",
      fontWeight: "600",
      fontSize: "16px",
      whiteSpace: "nowrap",
    }}
  >
    ₹{projects.minbudget} - ₹{projects.maxbudget}
  </span>
</div>

<p
  style={{
    color: "#555",
    fontSize: "15px",
    marginBottom: "10px",
  }}
>
  {projects.description}
</p>


          

                  {/* Footer Info */}
                  <div className="d-flex justify-content-between align-items-center">
                    <small style={{ color: "#777" }}>📅 {projects.deadline}</small>
                    <div>
                    {/* <Link to={"/view-projectdetails"}>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          style={{
                            borderRadius: "6px",
                            borderColor: "#9AAFC2",
                            color: "#9AAFC2",
                            fontWeight: "500",
                            marginRight: "8px",
                          }}
                        >
                          View
                        </Button>
                    </Link> */}
                      {/* <Button
                        size="sm"
                        style={{
                          backgroundColor: "#9AAFC2",
                          border: "none",
                          borderRadius: "6px",
                          fontWeight: "500",
                        }}
                      >
                        Apply
                      </Button> */}
                      <ApplyProjectModal/>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            ))
          )
:
   <p className="text-center text-muted">No projects found yet.</p>       
          }
       
            </Row> 
            {/* Explore More Button */}
<div className="text-center mt-4">
  <Button
    as={Link}
    to="/view-all-projects"
    style={{
      backgroundColor: "#9AAFC2",
      border: "none",
      borderRadius: "8px",
      padding: "10px 24px",
      fontWeight: "500",
      fontSize: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    }}
  >
    Explore More →
  </Button>
</div>

      </Container>
    </div>
    </>
  )
}

export default FindProject