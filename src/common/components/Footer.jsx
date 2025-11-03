import Container from "react-bootstrap/Container";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
<footer style={{ backgroundColor: "#7A8797", color: "#FFFFFF" }} className="py-4">
      <Container className="text-center">
        {/* 🔹 Social Icons */}
        <div className="mb-3 d-flex justify-content-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
            <FaFacebookF size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
            <FaTwitter size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
            <FaInstagram size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* 🔹 Footer Text */}
        <p className="mb-0" style={{ fontSize: "15px" }}>
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </Container>
    </footer>
    </>
  )
}

export default Footer