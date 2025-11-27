import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import Header from "../components/Header";
import { getFindProjectsAPI } from "../../service/allAPI";

function ProjectDetails() {
  
  const[allFindProjects,setAllFindProjects]=useState([])
     
       const getAllProjects = async()=>{
         const result = await getFindProjectsAPI()
         setAllFindProjects(result.data)
       }
       console.log(allFindProjects);

    //  status update
const statusVariantMap = {
  active: "warning",
  completed: "success",
  cancelled: "danger",
};
const getStatusVariant = (status) =>
  statusVariantMap[status?.toLowerCase()] || "secondary";

const formatStatus = (status) =>
  status ? status[0].toUpperCase() + status.slice(1).toLowerCase() : "";





       useEffect(()=>{
         getAllProjects()
         const interval = setInterval(()=>{
           getAllProjects()
         },1000)
         return()=>clearInterval(interval)
       },[]) 
  return (
    <>
    <Header/>
      <div
        style={{
          background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
          minHeight: "100vh",
          paddingTop: "90px",
          paddingBottom: "50px",
        }}
      >
        <Container>
          {/* ===== Header ===== */}
          <div className="text-center mb-5">
            <h2
              style={{
                fontWeight: "700",
                color: "#2d2f33",
                marginBottom: "10px",
              }}
            >
              Project Details
            </h2>
            <p style={{ color: "#555" }}>
              Review your project overview, proposals, messages, and payments.
            </p>
          </div>

         <Row className="g-4">

  {/* LEFT SIDE: PROJECT DETAILS */}
  <Col lg={8}>
    {allFindProjects.length > 0 ? (
      allFindProjects.map((project) => (
        <Card
          key={project._id}
          className="border-0 shadow-sm rounded-4 p-4 mb-4"
          style={{ background: "#ffffff" }}
        >
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <h4
                style={{
                  color: "#1d1f25",
                  fontWeight: 700,
                  marginBottom: "5px",
                }}
              >
                {project.title}
              </h4>

              <Badge bg={getStatusVariant(project.status)} className="px-3 py-2">
                {formatStatus(project.status)}
              </Badge>
            </div>

            <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.7" }}>
              {project.description}
            </p>

            {/* Budget + Deadline */}
            <div
              className="d-flex justify-content-between align-items-center mt-4 flex-wrap"
              style={{ gap: "15px" }}
            >
              <div>
                <strong style={{ color: "#2d2f33" }}>Budget:</strong>{" "}
                <span
                  style={{
                    color: "#4a90e2",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  ₹{project.minbudget} - ₹{project.maxbudget}
                </span>
              </div>

              <div>
                <strong style={{ color: "#2d2f33" }}>Deadline:</strong>{" "}
                <span
                  style={{
                    color: "#4a90e2",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  {project.deadline}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))
    ) : (
      <p className="text-center text-muted">No projects found.</p>
    )}
  </Col>

  {/* RIGHT SIDE: PROPOSALS */}
  <Col lg={4}>
    <Card
      className="border-0 shadow-sm rounded-4 p-4 mb-4"
      style={{
        position: "sticky",
        top: "100px",
        background: "#ffffff",
      }}
    >
      <Card.Body>
        <h5
          style={{
            fontWeight: 700,
            color: "#1d1f25",
            marginBottom: "15px",
          }}
        >
          📑 Proposals
        </h5>

        <hr className="mt-0 mb-3" />

        <Table responsive borderless hover className="align-middle mb-3">
          <tbody>
            <tr>
              <td>
                <strong>Arjun R.</strong> <br />
                <span style={{ color: "#7A8797" }}>4.9 ⭐ | 25 projects</span>
              </td>
              <td className="text-end fw-semibold">$400</td>
            </tr>

            <tr>
              <td>
                <strong>Meera K.</strong> <br />
                <span style={{ color: "#7A8797" }}>4.7 ⭐ | 18 projects</span>
              </td>
              <td className="text-end fw-semibold">$380</td>
            </tr>
          </tbody>
        </Table>

       <Button variant="outline-secondary" size="sm" style={{ borderRadius: "8px", width: "100%", borderColor: "#9AAFC2", color: "#9AAFC2", fontWeight: "500", padding: "8px 0", }} > View All Proposals </Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

        </Container>
      </div>
    </>
  );
}

export default ProjectDetails;
