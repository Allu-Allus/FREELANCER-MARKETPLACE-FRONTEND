import { Container, Card, ProgressBar, Table, Button, Form } from "react-bootstrap";


function FreelancerMyProjectView() {
  return (
    <>
 <div
      style={{
        background: "linear-gradient(135deg, #f9fafc 0%, #e8edf3 100%)",
        minHeight: "100vh",
        paddingTop: "90px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        {/* Project Header */}
        <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>React Dashboard Development</h2>
        <p style={{ color: "#555" }}>
          Client: <strong>Riya K.</strong> • Budget: <strong>$400</strong> • Deadline: <strong>Oct 30</strong>
        </p>

        {/* Project Overview Card */}
        <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: "16px" }}>
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Project Description</h5>
            <p style={{ color: "#555", marginBottom: "0" }}>
              Build a responsive React admin dashboard with charts, API integration, and modern UI using Bootstrap and Tailwind. 
              The project should include login, analytics, and user management sections.
            </p>
          </Card.Body>
        </Card>

        {/* Milestones / Task List */}
        <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: "16px" }}>
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>Milestones</h5>

            <Table hover responsive className="align-middle">
              <thead>
                <tr style={{ backgroundColor: "#f8f9fb" }}>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UI Layout Design</td>
                  <td><span className="badge bg-success">Completed</span></td>
                  <td><ProgressBar now={100} variant="success" style={{ height: "6px" }} /></td>
                  <td>Oct 10</td>
                </tr>
                <tr>
                  <td>API Integration</td>
                  <td><span className="badge bg-warning text-dark">In Progress</span></td>
                  <td><ProgressBar now={60} variant="warning" style={{ height: "6px" }} /></td>
                  <td>Oct 25</td>
                </tr>
                <tr>
                  <td>Testing & Deployment</td>
                  <td><span className="badge bg-secondary">Pending</span></td>
                  <td><ProgressBar now={0} variant="secondary" style={{ height: "6px" }} /></td>
                  <td>Oct 30</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Payment Status */}
        <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: "16px" }}>
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>Payment Status</h5>
            <Table responsive>
              <thead>
                <tr style={{ backgroundColor: "#f8f9fb" }}>
                  <th>Milestone</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Design Phase</td>
                  <td>$150</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>API Integration</td>
                  <td>$150</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
                <tr>
                  <td>Deployment</td>
                  <td>$100</td>
                  <td><span className="badge bg-secondary">Not Paid</span></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

       

        {/* File Upload / Download */}
        <Card className="border-0 shadow-sm" style={{ borderRadius: "16px" }}>
          <Card.Body>
            <h5 style={{ color: "#2d2f33", fontWeight: "600", marginBottom: "20px" }}>Files</h5>
            <ul style={{ color: "#555" }}>
              <li>
                UI_Design.zip{" "}
                <Button variant="link" style={{ color: "#9AAFC2" }}>
                  Download
                </Button>
              </li>
              <li>
                Preview_Report.pdf{" "}
                <Button variant="link" style={{ color: "#9AAFC2" }}>
                  Download
                </Button>
              </li>
            </ul>
            <Form.Group controlId="formFile" className="mt-3">
              <Form.Label>Upload new file</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button
              className="mt-3"
              style={{
                backgroundColor: "#9AAFC2",
                border: "none",
              }}
            >
              Upload
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>

    </>
  )
}

export default FreelancerMyProjectView