import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EDModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mainColor = "#7A8797"; // your matching color

  return (
    <>
      <Button
        variant="outline-success"
        size="sm"
        style={{
          borderColor: mainColor,
          color: mainColor,
          fontWeight: "500",
          borderRadius: "6px",
          marginRight: "8px",
        }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ borderBottomColor: mainColor }}>
          <Modal.Title style={{ color: mainColor }}>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label
                htmlFor="projectTitle"
                className="form-label"
                style={{ color: mainColor }}
              >
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="projectTitle"
                placeholder="Enter project title"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label"
                style={{ color: mainColor }}
              >
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Enter project description"
                style={{ borderColor: mainColor }}
              ></textarea>
            </div>

            <div className="mb-3">
              <label
                htmlFor="skills"
                className="form-label"
                style={{ color: mainColor }}
              >
                Skills Required
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                placeholder="e.g. React, Node.js"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="minBudget"
                className="form-label"
                style={{ color: mainColor }}
              >
                Minimum Budget (₹)
              </label>
              <input
                type="number"
                className="form-control"
                id="minBudget"
                placeholder="Enter minimum budget"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="maxBudget"
                className="form-label"
                style={{ color: mainColor }}
              >
                Maximum Budget (₹)
              </label>
              <input
                type="number"
                className="form-control"
                id="maxBudget"
                placeholder="Enter maximum budget"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="deadline"
                className="form-label"
                style={{ color: mainColor }}
              >
                Deadline / Duration
              </label>
              <input
                type="text"
                className="form-control"
                id="deadline"
                placeholder="Enter deadline or duration"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="fileUpload"
                className="form-label"
                style={{ color: mainColor }}
              >
                File Upload (optional)
              </label>
              <input
                type="file"
                className="form-control"
                id="fileUpload"
                style={{ borderColor: mainColor }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: "#ccc", borderColor: mainColor, color: mainColor }}
          >
            Close
          </Button>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: mainColor,
              borderColor: mainColor,
              color: "white",
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EDModal;
