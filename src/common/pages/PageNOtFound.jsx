import React from 'react'
    import { useNavigate } from "react-router-dom";

function PageNOtFound() {
     const navigate = useNavigate();
  return (

    <>
 <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
        color: "#2d2f33",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          fontWeight: "800",
          color: "#9AAFC2",
          marginBottom: "10px",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Oops! Page Not Found
      </h2>
      <p style={{ color: "#6c757d", marginBottom: "30px", maxWidth: "400px" }}>
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or go back to the dashboard.
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#9AAFC2",
          color: "#fff",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#819bb1")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#9AAFC2")}
      >
        ⬅ Back to Dashboard
      </button>
    </div>
    </>
  )
}

export default PageNOtFound