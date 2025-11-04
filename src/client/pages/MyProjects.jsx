import React from 'react'
import Header from '../components/Header'
import { useState } from "react";
import { Container, Table, Button, Card, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

function MyProjects() {
    
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
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>My Projects</h2>
          <p style={{ color: "#7A8797" }}>
            Manage all your posted projects easily from one place.
          </p>
        </div>

        {/* Project Table */}
        <Card
          className="border-0 shadow-sm p-4"
          style={{
            borderRadius: "16px",
            backgroundColor: "#fff",
          }}
        >
          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead>
                <tr style={{ backgroundColor: "#e9ecef" }}>
                  <th>Project Title</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Proposals</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* Example Project 1 */}
                <tr>
                  <td>React Portfolio Website</td>
                  <td>$400</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#d1ecf1",
                        color: "#0c5460",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Active
                    </span>
                  </td>
                  <td>12</td>
                  <td>
                   <Link to={"/project-details"}>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        style={{
                          borderColor: "#9AAFC2",
                          color: "#9AAFC2",
                          fontWeight: "500",
                          borderRadius: "6px",
                          marginRight: "10px",
                        }}
                      >
                        View
                      </Button>
                   </Link>
                    {/* <Button
                      variant="outline-danger"
                      size="sm"
                      style={{
                        borderRadius: "6px",
                        fontWeight: "500",
                      }}
                    >
                      Close
                    </Button> */}
                  </td>
                </tr>

                {/* Example Project 2 */}
                <tr>
                  <td>Logo Design</td>
                  <td>$100</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#d4edda",
                        color: "#155724",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Completed
                    </span>
                  </td>
                  <td>8</td>
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

                {/* Example Project 3 */}
                <tr>
                  <td>Landing Page UI</td>
                  <td>$250</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#fff3cd",
                        color: "#856404",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Pending
                    </span>
                  </td>
                  <td>5</td>
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

                {/* Example Project 4 */}
                <tr>
                  <td>Mobile App UI</td>
                  <td>$600</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#f8d7da",
                        color: "#721c24",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "14px",
                      }}
                    >
                      Cancelled
                    </span>
                  </td>
                  <td>3</td>
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

export default MyProjects