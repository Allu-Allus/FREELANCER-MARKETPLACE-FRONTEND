import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

function BrowseCategories() {
  const categories = [
    {
      title: "Web Development",
      icon: <FaCode />,
      color: "#7A8797",
      desc: "Responsive websites & MERN stack apps",
    },
    {
      title: "Graphic Design",
      icon: <FaPaintBrush />,
      color: "#9AAFC2",
      desc: "Creative branding, UI/UX & illustrations",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      color: "#7A8797",
      desc: "SEO, advertising & social campaigns",
    }
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e7ecf0 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Accent */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "250px",
          height: "250px",
          backgroundColor: "#9AAFC2",
          borderRadius: "50%",
          opacity: "0.15",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#2d2f33",
              marginBottom: "10px",
            }}
          >
            Browse <span style={{ color: "#7A8797" }}>Categories</span>
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore our most in-demand fields and find talented professionals ready to bring your ideas to life.
          </p>
        </div>

        {/* Category Grid */}
        <Row className="g-4 justify-content-center">
          {categories.map((cat, idx) => (
            <Col key={idx} lg={4} md={6}>
              <Card
                className="text-center border-0 h-100 shadow-sm"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  padding: "40px 25px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    backgroundColor: `${cat.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "38px",
                    color: cat.color,
                    margin: "0 auto 20px",
                  }}
                >
                  {cat.icon}
                </div>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#2d2f33",
                      marginBottom: "10px",
                    }}
                  >
                    {cat.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      color: "#555",
                      lineHeight: "1.6",
                    }}
                  >
                    {cat.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* View All Button */}
        <div className="text-center mt-5">
  <Link to={"/category"}>
            <button
              style={{
                background: "linear-gradient(90deg, #7A8797, #9AAFC2)",
                color: "#fff",
                border: "none",
                padding: "12px 40px",
                borderRadius: "30px",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #9AAFC2, #7A8797)")
              }
              onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #7A8797, #9AAFC2)")
              }
            >
              View All Categories
            </button>
  </Link>
        </div>
      </Container>
    </section>
  );
}

export default BrowseCategories;
