import React from 'react'
import AdminHeader from '../components/AdminHeader'

function Transaction() {
  return (
    <>

<AdminHeader/>

   <div
        style={{
          marginTop: "80px",
          padding: "40px",
          background: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        <h3 style={{ fontWeight: "700", marginBottom: "25px" }}>
          💰 Transactions / Payments
        </h3>

        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            padding: "20px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#f0f3f8" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>Transaction ID</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Project</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Client</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Freelancer</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Amount</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px" }}>TX1021</td>
                <td style={{ padding: "10px" }}>Portfolio Site</td>
                <td style={{ padding: "10px" }}>Riya</td>
                <td style={{ padding: "10px" }}>John</td>
                <td style={{ padding: "10px" }}>$300</td>
                <td style={{ padding: "10px", color: "green", fontWeight: "500" }}>
                  Completed
                </td>
                <td style={{ padding: "10px" }}>Oct 14</td>
              </tr>

              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px" }}>TX1022</td>
                <td style={{ padding: "10px" }}>E-commerce App</td>
                <td style={{ padding: "10px" }}>Meena</td>
                <td style={{ padding: "10px" }}>Aryan</td>
                <td style={{ padding: "10px" }}>$450</td>
                <td style={{ padding: "10px", color: "orange", fontWeight: "500" }}>
                  Pending
                </td>
                <td style={{ padding: "10px" }}>Oct 20</td>
              </tr>

              <tr>
                <td style={{ padding: "10px" }}>TX1023</td>
                <td style={{ padding: "10px" }}>Logo Design</td>
                <td style={{ padding: "10px" }}>Kiran</td>
                <td style={{ padding: "10px" }}>Sana</td>
                <td style={{ padding: "10px" }}>$120</td>
                <td style={{ padding: "10px", color: "red", fontWeight: "500" }}>
                  Failed
                </td>
                <td style={{ padding: "10px" }}>Oct 25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Transaction