import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ApplyProjectModal({ handleApply }) {

  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      {/* Apply Button */}
      <Button
        onClick={handleShow}
        size="sm"
        style={{
          backgroundColor: "#9AAFC2",
          border: "none",
          borderRadius: "6px",
          fontWeight: "500",
        }}
      >
        Apply
      </Button>

      {/* Modal */}
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#f0f4ff",
            borderBottom: "none",
            padding: "20px 24px",
          }}
        >
          <Modal.Title style={{ fontWeight: "700", color: "#2d2f33" }}>
            Apply for Project
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
            padding: "25px",
          }}
        >
          {/* Name */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-100 mb-3"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />

          {/* Previous Project Links */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            Previous Project Links
          </label>
          <input
            type="text"
            placeholder="Enter your project links"
            className="w-100 mb-3"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />

          {/* Portfolio Link */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            Portfolio Link
          </label>
          <input
            type="text"
            placeholder="Enter your portfolio URL"
            className="w-100 mb-3"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />

          {/* LinkedIn Link */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            LinkedIn Link
          </label>
          <input
            type="text"
            placeholder="Enter your LinkedIn profile URL"
            className="w-100 mb-3"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />

          {/* Expected Budget */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            Expected Budget
          </label>
          <input
            type="number"
            placeholder="Enter your expected amount"
            className="w-100 mb-3"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />

          {/* Deadline */}
          <label style={{ fontWeight: "500", color: "#2d2f33" }}>
            Deadline
          </label>
          <input
            type="date"
            className="w-100 mb-2"
            style={{
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #c9d6f0",
            }}
          />
        </Modal.Body>

        <Modal.Footer
          style={{
            backgroundColor: "#f0f4ff",
            borderTop: "none",
            padding: "16px 24px",
          }}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#7A8797",
              border: "none",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={handleApply}
            style={{
              backgroundColor: "#9AAFC2",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
            }}
          >
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ApplyProjectModal;
