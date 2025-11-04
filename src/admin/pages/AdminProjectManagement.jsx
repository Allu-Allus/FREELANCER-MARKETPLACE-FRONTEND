import React from 'react'
import AdminHeader from '../components/AdminHeader'

function AdminProjectManagement() {
  return (
    <>
    <AdminHeader/>


      <div
        style={{
          display: "flex",
          background: "#f5f6fa",
          minHeight: "100vh",
        }}
      >

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            marginTop: "80px", // prevents overlap with fixed header
          }}
        >
          <h3 style={{ fontWeight: "700", marginBottom: "25px" }}>
            💼 Projects Management
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
            <input
              type="text"
              placeholder="Search projects..."
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                width: "280px",
              }}
            />

            <select
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Suspended</option>
            </select>
          </div>

          {/* Projects Table */}
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              padding: "20px",
            }}
          >
            <h5 style={{ marginBottom: "15px", fontWeight: "600" }}>
              All Projects
            </h5>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
              }}
            >
              <thead style={{ background: "#f0f3f8" }}>
                <tr>
                  <th style={{ padding: "10px" }}>Project Title</th>
                  <th style={{ padding: "10px" }}>Client</th>
                  <th style={{ padding: "10px" }}>Freelancers</th>
                  <th style={{ padding: "10px" }}>Status</th>
                  <th style={{ padding: "10px" }}>Budget</th>
                  <th style={{ padding: "10px" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>Web App</td>
                  <td style={{ padding: "10px" }}>Riya</td>
                  <td style={{ padding: "10px" }}>John</td>
                  <td style={{ padding: "10px", color: "green" }}>Active</td>
                  <td style={{ padding: "10px" }}>$800</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        marginRight: "5px",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        border: "1px solid #007bff",
                        background: "transparent",
                        color: "#007bff",
                      }}
                    >
                      View
                    </button>
                    <button
                      style={{
                        padding: "5px 10px",
                        borderRadius: "5px",
                        border: "1px solid #dc3545",
                        background: "transparent",
                        color: "#dc3545",
                      }}
                    >
                      Suspend
                    </button>
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>E-commerce Website</td>
                  <td style={{ padding: "10px" }}>Manoj</td>
                  <td style={{ padding: "10px" }}>Aditi</td>
                  <td style={{ padding: "10px", color: "#ffc107" }}>
                    Pending
                  </td>
                  <td style={{ padding: "10px" }}>$650</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        marginRight: "5px",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        border: "1px solid #007bff",
                        background: "transparent",
                        color: "#007bff",
                      }}
                    >
                      View
                    </button>
                    <button
                      style={{
                        padding: "5px 10px",
                        borderRadius: "5px",
                        border: "1px solid #dc3545",
                        background: "transparent",
                        color: "#dc3545",
                      }}
                    >
                      Suspend
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProjectManagement