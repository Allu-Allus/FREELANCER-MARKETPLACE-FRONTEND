import React from 'react';
import AdminHeader from '../components/AdminHeader';

function AdminUserManagement() {
  return (
    <>
      <AdminHeader />

      {/* Main Content */}
      <div
        style={{
          padding: "100px 40px 40px", // top padding accounts for fixed header
          background: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        <h3 style={{ fontWeight: "700", marginBottom: "25px" }}>
          👥 Users Management
        </h3>

        {/* Search & Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Search users..."
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                width: "280px",
              }}
            />
          </div>

          <select
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
          </select>
        </div>

        {/* Freelancers Section */}
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            padding: "20px",
            marginBottom: "40px",
          }}
        >
          <h5 style={{ marginBottom: "15px", fontWeight: "600" }}>
            Freelancers
          </h5>
          <div style={{ overflowX: "auto" }}> {/* allow horizontal scroll */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#f0f3f8" }}>
                <tr>
                  <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Skills</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Rating</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>John Doe</td>
                  <td style={{ padding: "10px" }}>john@mail.com</td>
                  <td style={{ padding: "10px" }}>React, Node</td>
                  <td style={{ padding: "10px" }}>4.8⭐</td>
                  <td style={{ padding: "10px", color: "green" }}>Active</td>
                  <td style={{ padding: "10px" }}>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #007bff", background: "transparent", color: "#007bff" }}>View</button>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ffc107", background: "transparent", color: "#ffc107" }}>Block</button>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #dc3545", background: "transparent", color: "#dc3545" }}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>Aryan Patel</td>
                  <td style={{ padding: "10px" }}>aryan@mail.com</td>
                  <td style={{ padding: "10px" }}>UI/UX, React</td>
                  <td style={{ padding: "10px" }}>4.6⭐</td>
                  <td style={{ padding: "10px", color: "green" }}>Active</td>
                  <td style={{ padding: "10px" }}>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #007bff", background: "transparent", color: "#007bff" }}>View</button>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ffc107", background: "transparent", color: "#ffc107" }}>Block</button>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #dc3545", background: "transparent", color: "#dc3545" }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Clients Section */}
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            padding: "20px",
          }}
        >
          <h5 style={{ marginBottom: "15px", fontWeight: "600" }}>Clients</h5>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#f0f3f8" }}>
                <tr>
                  <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Posted Projects</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>Riya Sharma</td>
                  <td style={{ padding: "10px" }}>riya@mail.com</td>
                  <td style={{ padding: "10px" }}>5</td>
                  <td style={{ padding: "10px", color: "green" }}>Active</td>
                  <td style={{ padding: "10px" }}>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #007bff", background: "transparent", color: "#007bff" }}>View</button>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ffc107", background: "transparent", color: "#ffc107" }}>Deactivate</button>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #dc3545", background: "transparent", color: "#dc3545" }}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>Manoj Kumar</td>
                  <td style={{ padding: "10px" }}>manoj@mail.com</td>
                  <td style={{ padding: "10px" }}>2</td>
                  <td style={{ padding: "10px", color: "gray" }}>Blocked</td>
                  <td style={{ padding: "10px" }}>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #007bff", background: "transparent", color: "#007bff" }}>View</button>
                    <button style={{ marginRight: "5px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #28a745", background: "transparent", color: "#28a745" }}>Activate</button>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #dc3545", background: "transparent", color: "#dc3545" }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUserManagement;