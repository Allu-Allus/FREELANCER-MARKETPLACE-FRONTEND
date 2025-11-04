import React from 'react'

function AdminProjectManagementModal() {
  return (
    <>
 <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      {/* Modal Box */}
      <div
        style={{
          background: "#fff",
          width: "600px",
          borderRadius: "12px",
          padding: "25px 30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#555",
          }}
        >
          ✖
        </button>

        {/* Modal Header */}
        <h2 style={{ marginBottom: "15px", fontWeight: "700" }}>
          Project Details
        </h2>

        {/* Project Info */}
        <div style={{ lineHeight: "1.6", fontSize: "15px", color: "#333" }}>
          <p>
            <strong>Title:</strong> Web App Development
          </p>
          <p>
            <strong>Description:</strong> A full-stack web application for
            managing freelancers and clients with chat, payments, and analytics.
          </p>
          <p>
            <strong>Budget:</strong> $800
          </p>
          <p>
            <strong>Timeline:</strong> Oct 10 – Nov 30, 2025
          </p>

          <div style={{ marginTop: "15px" }}>
            <strong>Participants:</strong>
            <ul style={{ margin: "8px 0 0 20px" }}>
              <li>Client: Riya K.</li>
              <li>Freelancer: John Doe</li>
              <li>Project Manager: Admin (You)</li>
            </ul>
          </div>

          <div style={{ marginTop: "15px" }}>
            <strong>Payments:</strong>
            <ul style={{ margin: "8px 0 0 20px" }}>
              <li>Paid: $400 ✅</li>
              <li>Pending: $400 ⏳</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "25px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default AdminProjectManagementModal