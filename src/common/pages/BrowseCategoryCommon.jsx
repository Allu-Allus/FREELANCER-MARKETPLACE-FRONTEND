import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";

function BrowseCategoryCommon() {
      const categories = [
    { name: "Web Development", desc: "React, Node, MERN, Next.js, etc.", color: "#E8F1F8" },
    { name: "Mobile App Development", desc: "Flutter, React Native, Android, iOS", color: "#FFF3E2" },
    { name: "UI/UX Design", desc: "Figma, Adobe XD, Product Design", color: "#EAFBF1" },
    { name: "Graphic Design", desc: "Logo, Banner, Poster, Branding", color: "#FBE9E7" },
    { name: "Content Writing", desc: "Blogs, Copywriting, SEO Articles", color: "#F4F0FA" },
    { name: "Digital Marketing", desc: "SEO, Google Ads, Social Media", color: "#E0F7FA" },
    { name: "Video Editing", desc: "YouTube, Reels, Commercials", color: "#FFFDE7" },
    { name: "Data Science", desc: "Python, ML, Data Visualization", color: "#E3F2FD" },
  ];
  return (
    <>
<Header/>
 <div
      style={{
        background: "#f5f6fa",
        minHeight: "100vh",
        padding: "100px 40px 60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>🎯 Browse Categories</h2>
          <p style={{ color: "#6c757d" }}>
            Choose a category to explore related freelance projects and talent.
          </p>
        </div>

        <Row className="g-4">
          {categories.map((cat, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{
                  borderRadius: "15px",
                  background: cat.color,
                  border: "none",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
                className="h-100 text-center p-3 hover-shadow"
              >
                <Card.Body>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      margin: "0 auto 15px",
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span style={{ fontSize: "25px" }}>💼</span>
                  </div>
                  <Card.Title style={{ fontWeight: "600" }}>{cat.name}</Card.Title>
                  <Card.Text style={{ color: "#6c757d", fontSize: "14px" }}>
                    {cat.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </>
  )
}

export default BrowseCategoryCommon