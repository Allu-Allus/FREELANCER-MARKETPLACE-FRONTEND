import Container from "react-bootstrap/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: "#7A8797", color: "#FFFFFF" }} className="py-4">
        <Container className="text-center">
          {/* 🔹 Social Icons */}
          <div className="mb-3 d-flex justify-content-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
              <FaFacebookF className="fs-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
              <FaTwitter className="fs-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
              <FaInstagram className="fs-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
              <FaLinkedinIn className="fs-5" />
            </a>
          </div>

          {/* 🔹 Footer Text */}
          <p className="mb-0" style={{ fontSize: "15px" }}>
            © 2025 FreelanceHub. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer