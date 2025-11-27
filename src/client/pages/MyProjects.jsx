import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container, Table, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EDModal from "../components/EDModal";
import { getFindProjectsAPI, updateProjectAPI } from "../../service/allAPI";
import DeleteModal from "../components/DeleteModal";

function MyProjects() {
  const [allFindProjects, setAllFindProjects] = useState([]);

  const getAllProjects = async () => {
    const result = await getFindProjectsAPI();
    setAllFindProjects(result.data);
  };

  // const handleStatusChange = async (projectId, newStatus) => {
  //   setAllFindProjects((prev) =>
  //     prev.map((p) =>
  //       p._id === projectId ? { ...p, status: newStatus } : p
  //     )
  //   );
  // };


const handleStatusChange = async (projectId, newStatus) => {
  try {
    const reqBody = { status: newStatus };

    // If you are using token:
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    const result = await updateProjectAPI(projectId, reqBody, reqHeader);

    if (result.status === 200) {
      // update UI
      setAllFindProjects(prev =>
        prev.map(p =>
          p._id === projectId ? { ...p, status: newStatus } : p
        )
      );
    }
  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => {
    getAllProjects();
  }, []);

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
          {/* Header Section */}
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>My Projects</h2>
            <p style={{ color: "#7A8797" }}>
              Manage, edit, or remove your posted projects easily.
            </p>
          </div>

          {/* Project Table */}
          <Card
            className="border-0 shadow-sm p-3 p-md-4"
            style={{
              borderRadius: "16px",
              backgroundColor: "#fff",
            }}
          >
            <div className="table-responsive">
              {allFindProjects.length > 0 ? (
                <Table hover responsive="sm" className="align-middle text-nowrap">
                  <thead>
                    <tr style={{ backgroundColor: "#e9ecef" }}>
                      <th>Project Title</th>
                      <th>Budget</th>
                      <th>Status</th>
                      <th>Proposals</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allFindProjects.map((project, index) => (
                      <tr key={index}>
                        <td style={{ wordBreak: "break-word" }}>
                          {project.title}
                        </td>
                        <td>
                          ₹{project.minbudget} - ₹{project.maxbudget}
                        </td>
                        <td>
                          <div
                            style={{
                              backgroundColor:
                                project.status === "active"
                                  ? "#fff3cd"
                                  : project.status === "completed"
                                  ? "#d4edda"
                                  : project.status === "cancelled"
                                  ? "#f8d7da"
                                  : "#f8f9fa",
                              borderRadius: "15px",
                              padding: "4px 10px",
                              display: "inline-block",
                            }}
                          >
                            <select
                              value={project.status || "active"}
                              onChange={(e) =>
                                handleStatusChange(project._id, e.target.value)
                              }
                              style={{
                                background: "transparent",
                                border: "none",
                                color:
                                  project.status === "Active"
                                    ? "#856404"
                                    : project.status === "Completed"
                                    ? "#155724"
                                    : project.status === "Cancelled"
                                    ? "#721c24"
                                    : "#6c757d",
                                fontSize: "14px",
                                fontWeight: "500",
                                outline: "none",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                maxWidth: "100%",
                              }}
                            >
                              <option value="Active">Active</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </td>

                        <td>12</td>
                        <td className="text-center">
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <Link to="/project-details">
                              <Button
                                variant="outline-primary"
                                size="sm"
                                style={{
                                  transition: "none",
                                  borderRadius: "6px",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = "transparent";
                                  e.target.style.color = "#0d6efd";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = "transparent";
                                  e.target.style.color = "#0d6efd";
                                }}
                              >
                                View
                              </Button>
                            </Link>

                            <EDModal project={project} onUpdate={getAllProjects} />

                            <DeleteModal  projectId={project._id} onDelete={getAllProjects} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p className="text-center text-muted mb-0 py-3">
                  No projects found yet.
                </p>
              )}
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default MyProjects;
