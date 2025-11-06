import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Form } from 'react-bootstrap'
import { IoCameraSharp } from "react-icons/io5"

function AdminSettings() {
  return (
    <>
      <AdminHeader />

      <div
        style={{
          padding: "40px",
          marginTop: "80px",
          background: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ fontWeight: "700", marginBottom: "30px" }}>
          ⚙️ Admin Settings
        </h2>

        {/* Profile Upload Section */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            marginBottom: "35px",
            textAlign: "center",
          }}
        >
          <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
            Profile Picture
          </h4>

          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="Profile"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #9AAFC2",
              }}
            />

            <Form.Label
              htmlFor="adminProfilePic"
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                backgroundColor: "#9AAFC2",
                color: "white",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "18px",
                border: "2px solid #fff",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
            >
              <IoCameraSharp />
            </Form.Label>

            <Form.Control
              type="file"
              id="adminProfilePic"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>

          <p
            className="mt-3 mb-0"
            style={{ color: "#7A8797", fontSize: "14px" }}
          >
            Upload or Change Profile Picture
          </p>
        </div>

        {/* Change Password Section */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
            Change Password
          </h4>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <button
            style={{
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "10px 18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Update Password
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminSettings
