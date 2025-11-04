import React from 'react'
import AdminHeader from '../components/AdminHeader'

function AdminSettings() {
  return (
    <>
<AdminHeader/>

  <div
  style={{
    padding: "40px",
    marginTop: "80px", // 👈 pushes content below fixed navbar
    background: "#f5f6fa",
    minHeight: "100vh",
  }}
>
  <h2 style={{ fontWeight: "700", marginBottom: "30px" }}>
    ⚙️ Admin Settings
  </h2>

      {/* Change Password Section */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "35px",
        }}
      >
        <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Change Password
        </h4>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
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
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
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
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
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

      {/* Platform Settings */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "35px",
        }}
      >
        <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Platform Settings
        </h4>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
            Commission (%)
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
            Tax (%)
          </label>
          <input
            type="number"
            placeholder="e.g. 18"
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
          Save Changes
        </button>
      </div>

      {/* Notification Preferences */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "35px",
        }}
      >
        <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Notification Preferences
        </h4>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input type="checkbox" style={{ marginRight: "10px" }} /> Email
            Notifications
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input type="checkbox" style={{ marginRight: "10px" }} /> Project
            Updates
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input type="checkbox" style={{ marginRight: "10px" }} /> Payment
            Alerts
          </label>
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
          Save Preferences
        </button>
      </div>

      {/* Manage Other Admins */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "35px",
        }}
      >
        <h4 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Manage Other Admins
        </h4>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f1f3f5" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Role</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px" }}>Ananya Sharma</td>
              <td style={{ padding: "10px" }}>ananya@luminara.com</td>
              <td style={{ padding: "10px" }}>Super Admin</td>
              <td style={{ padding: "10px" }}>
                <button
                  style={{
                    background: "transparent",
                    color: "#007bff",
                    border: "1px solid #007bff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: "transparent",
                    color: "#dc3545",
                    border: "1px solid #dc3545",
                    borderRadius: "6px",
                    padding: "6px 12px",
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px" }}>Rohan Mehta</td>
              <td style={{ padding: "10px" }}>rohan@luminara.com</td>
              <td style={{ padding: "10px" }}>Moderator</td>
              <td style={{ padding: "10px" }}>
                <button
                  style={{
                    background: "transparent",
                    color: "#007bff",
                    border: "1px solid #007bff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: "transparent",
                    color: "#dc3545",
                    border: "1px solid #dc3545",
                    borderRadius: "6px",
                    padding: "6px 12px",
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 18px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          + Add New Admin
        </button>
      </div>
    </div>
    </>
  )
}

export default AdminSettings