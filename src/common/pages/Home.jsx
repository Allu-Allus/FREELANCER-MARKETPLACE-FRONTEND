import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BrowseCategories from "../components/BrowseCategories";
import { FaRegClock, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
function Home() {
    
  return (
    <>
    {/* HERO SECTION */}
 <section
      style={{ position: "relative", overflow: "hidden", backgroundColor: "#f8f9fa", }} >
      <Container fluid className="px-0">
        <Row className="g-0 align-items-center">
          <Col lg={6}  md={12} className="p-5"  style={{  backgroundColor: "#f8f9fa", position: "relative", zIndex: 2, }}  >
            <h1 style={{   fontSize: "42px",  fontWeight: "700", color: "#2d2f33",  marginBottom: "20px",   }} >  Hire Top Freelancers for Your Projects  </h1>

            <p style={{ fontSize: "18px", color: "#555",  marginBottom: "30px",  }}  >    Connect with skilled professionals and get your work done securely. </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button variant="primary"  style={{  backgroundColor: "#7A8797",  borderColor: "#7A8797",  fontWeight: "600", padding: "10px 20px",  }} >  Post a Project </Button>

              <Button  variant="outline-primary" style={{  color: "#7A8797",  borderColor: "#7A8797",   fontWeight: "600",  padding: "10px 20px",  backgroundColor: "transparent",   }} > Find Work </Button>
            </div>
          </Col>

          {/* 🔹 Right: Full Image with CSS clip-path */}
          <Col   lg={6}  md={12}  style={{   position: "relative",  overflow: "hidden",  padding: 0,   }} >
            <img   src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600" alt="Freelancer working" style={{ width: "100%", height: "100%",objectFit: "cover",clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%", }}/>
          </Col>
        </Row>
      </Container>
    </section>


<BrowseCategories/>

{/* ABOUT */}
<section
  style={{ position: "relative", background: "linear-gradient(135deg, #f8f9fa 0%, #e7ecf0 100%)", padding: "100px 0", overflow: "hidden",}}>
  {/* Decorative circle */}
  <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "200px", height: "200px", backgroundColor: "#9AAFC2", borderRadius: "50%", opacity: "0.2",zIndex: 0,}}></div>

  <Container style={{ position: "relative", zIndex: 1 }}>
    <Row className="align-items-center">
      <Col lg={6} md={12} className="mb-5 mb-lg-0">
        <h2 style={{ fontSize: "38px", fontWeight: "700", color: "#2d2f33", marginBottom: "20px",  }}>  Empowering Connections Between{" "} <span style={{ color: "#7A8797" }}>Talent & Opportunity</span></h2>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "25px", lineHeight: "1.7",}} >  At <strong>FreelanceHub</strong>, we’re redefining how professionals and businesses connect. We believe in empowering people to work on what they love — from anywhere, at any time. </p>

        {/* 🔹 Key Highlights */}
        <div className="d-flex flex-column gap-3 mt-4">
          <div className="d-flex align-items-center">
            <i className="bi bi-people-fill me-3" style={{ fontSize: "28px", color: "#7A8797" }}></i>
            <span style={{ fontSize: "17px", color: "#333" }}>A growing network of 10,000+ freelancers</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-lightbulb-fill me-3" style={{ fontSize: "28px", color: "#7A8797" }}></i>
            <span style={{ fontSize: "17px", color: "#333" }}>Real projects. Real results. Real income.</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-shield-check me-3" style={{ fontSize: "28px", color: "#7A8797" }}></i>
            <span style={{ fontSize: "17px", color: "#333" }}>Secure payments and verified clients</span>
          </div>
        </div>

        <Button style={{ backgroundColor: "#7A8797", borderColor: "#7A8797",  padding: "10px 25px",  marginTop: "30px", fontWeight: "600", }} > Learn More </Button>
      </Col>

      {/* 🔹 Right: Image with overlay shape */}
      <Col lg={6} md={12} className="text-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" alt="Team collaboration" style={{ width: "100%", maxWidth: "480px", borderRadius: "20px", boxShadow: "0 8px 25px rgba(0,0,0,0.15)", zIndex: 1, position: "relative", }} />
          <div style={{ position: "absolute", top: "-20px",left: "-20px", width: "100%", height: "100%", borderRadius: "20px", border: "3px solid #7A8797", zIndex: 0, }} ></div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
{/* HOW IT WORKS */}
<section
  style={{ backgroundColor: "#f8f9fa",padding: "80px 0", }}>
  <Container>
    <h2 className="text-center mb-5"  style={{ fontWeight: "700", color: "#2d2f33" }}  > How It Works </h2>

    {/* Step 1 */}
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 1</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}> Post Your Project </h3>
          <p style={{ color: "#555" }}> Share details about your project, required skills, and budget. Our platform connects you with the best freelancers instantly.  </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"  alt="Step 1"  style={{  width: "100%", maxWidth: "400px", borderRadius: "15px", }} />
      </Col>
    </Row>

    {/* Step 2 (Right Text) */}
    <Row className="align-items-center mb-5 flex-md-row-reverse">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 2</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}> Browse and Hire  </h3>
          <p style={{ color: "#555" }}>  Review freelancer profiles, portfolios, and ratings. Choose the perfect match for your project and start collaborating securely. </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"  alt="Step 2"  style={{  width: "100%",  maxWidth: "400px", borderRadius: "15px",  }}  />
      </Col>
    </Row>

    {/* Step 3 */}
    <Row className="align-items-center">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 3</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}>  Complete & Get Paid </h3>
          <p style={{ color: "#555" }}> Once the project is done, approve the work and release secure  payments. Build long-term partnerships with trusted freelancers. </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800" alt="Step 3"  style={{  width: "100%", maxWidth: "400px", borderRadius: "15px", }}/>
      </Col>
    </Row>
  </Container>
</section>




{/* TESTIMONIALS */}
 <section
      style={{
        backgroundColor: "#f8f9fa",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "700",
            color: "#2d2f33",
            marginBottom: "15px",
          }}
        >
          What Our <span style={{ color: "#7A8797" }}>Clients Say</span>
        </h2>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            marginBottom: "60px",
          }}
        >
          Hear from freelancers and employers who’ve successfully worked together on our platform.
        </p>

        <Row className="g-4 justify-content-center">
          {/* Testimonial 1 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/50.jpg"
                  alt="Client"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Riya Sharma</h5>
                <p style={{ color: "#7A8797", fontWeight: "500" }}>
                  Startup Founder
                </p>
                <p style={{ color: "#555", fontStyle: "italic" }}>
                  “This platform helped me find the perfect developer for my app idea. Great experience and easy to use!”
                </p>
              </div>
            </Card>
          </Col>

          {/* Testimonial 2 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Client"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Arjun Mehta</h5>
                <p style={{ color: "#7A8797", fontWeight: "500" }}>
                  Digital Marketer
                </p>
                <p style={{ color: "#555", fontStyle: "italic" }}>
                  “I’ve completed several projects here — the process is smooth and payments are always on time.”
                </p>
              </div>
            </Card>
          </Col>

          {/* Testimonial 3 */}
          <Col lg={4} md={6}>
            <Card
              className="border-0 shadow-sm p-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Client"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                />
                <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>Sneha Kapoor</h5>
                <p style={{ color: "#7A8797", fontWeight: "500" }}>
                  Graphic Designer
                </p>
                <p style={{ color: "#555", fontStyle: "italic" }}>
                  “A great platform for creative freelancers! I’ve built long-term clients and improved my portfolio.”
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home