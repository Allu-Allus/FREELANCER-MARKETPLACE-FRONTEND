import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
  FaMobileAlt,
  FaChartLine,
  FaVideo,
  FaUserTie,
} from "react-icons/fa";

function BrowseCategories() {
  const categories = [
    {
      title: "Web Development",
      icon: <FaCode />,
      color: "#6C63FF",
      desc: "Responsive sites & full-stack apps",
    },
    {
      title: "Graphic Design",
      icon: <FaPaintBrush />,
      color: "#FF6584",
      desc: "Branding, UI/UX & creative visuals",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      color: "#00C49F",
      desc: "SEO, campaigns & lead generation",
    },
    {
      title: "Content Writing",
      icon: <FaPenNib />,
      color: "#FFB347",
      desc: "Blogs, articles & product copy",
    },
   
  ];

  return (
     <section
      style={{
        background: "linear-gradient(135deg, #f1f4f8 0%, #e6ebf1 100%)",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <Container>
        {/* Title */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2d2f33",
              position: "relative",
              display: "inline-block",
            }}
          >
            Browse <span style={{ color: "#7A8797" }}>Categories</span>
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#7A8797",
              margin: "10px auto 0",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              color: "#555",
              textAlign: "center",
              fontSize: "18px",
              marginTop: "15px",
            }}
          >
            Discover professionals across every skill — build your dream team today.
          </p>
        </div>

        {/* Category Grid */}
        <Row className="g-4 justify-content-center">
          {categories.map((cat, idx) => (
            <Col key={idx} lg={3} md={4} sm={6}>
              <Card
                className="text-center border-0 h-100"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "30px 15px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    color: cat.color,
                    marginBottom: "15px",
                    backgroundColor: `${cat.color}15`,
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginInline: "auto",
                  }}
                >
                  {cat.icon}
                </div>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#2d2f33",
                      marginBottom: "8px",
                    }}
                  >
                    {cat.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {cat.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Button */}
        <div className="text-center mt-5">
          <button
            style={{
              background: "linear-gradient(90deg, #7A8797, #9AAFC2)",
              color: "#fff",
              border: "none",
              padding: "12px 35px",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "16px",
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
        </div>
      </Container>
    </section>
  );
}

export default BrowseCategories;
