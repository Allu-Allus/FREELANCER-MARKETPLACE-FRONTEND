import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BrowseCategories from "../components/BrowseCategories";
import { FaRegClock, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import Header from "../components/Header";
function Home() {
    
  return (
    <>
          <Header />

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
<section id="about"
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
  style={{
    position: "relative",
    background: "linear-gradient(135deg, #e7ecf0 0%, #f8f9fa 100%)",
    padding: "100px 0",
    overflow: "hidden",
  }}
>
  {/* Decorative circle (same style as About) */}
  <div
    style={{
      position: "absolute",
      bottom: "-80px",
      left: "-80px",
      width: "220px",
      height: "220px",
      backgroundColor: "#9AAFC2",
      borderRadius: "50%",
      opacity: "0.2",
      zIndex: 0,
    }}
  ></div>

  <Container style={{ position: "relative", zIndex: 1 }}>
    <h2
      className="text-center mb-5"
      style={{
        fontWeight: "700",
        color: "#2d2f33",
        fontSize: "38px",
        letterSpacing: "1px",
      }}
    >
      How It Works
    </h2>

    {/* Step 1 */}
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 1</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}>Post Your Project</h3>
          <p style={{ color: "#555", fontSize: "17px", lineHeight: "1.7" }}>
            Share details about your project, required skills, and budget.
            Our platform connects you instantly with the best freelancers.
          </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
            alt="Step 1"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              position: "relative",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-15px",
              left: "-15px",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              border: "3px solid #7A8797",
              zIndex: 0,
            }}
          ></div>
        </div>
      </Col>
    </Row>

    {/* Step 2 */}
    <Row className="align-items-center mb-5 flex-md-row-reverse">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 2</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}>Browse & Hire</h3>
          <p style={{ color: "#555", fontSize: "17px", lineHeight: "1.7" }}>
            Review freelancer profiles, portfolios, and ratings. Choose your
            perfect match and start collaborating securely.
          </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
            alt="Step 2"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              position: "relative",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              border: "3px solid #7A8797",
              zIndex: 0,
            }}
          ></div>
        </div>
      </Col>
    </Row>

    {/* Step 3 */}
    <Row className="align-items-center">
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "#7A8797", fontWeight: "700" }}>Step 3</h4>
          <h3 style={{ fontWeight: "600", color: "#2d2f33" }}>
            Complete & Get Paid
          </h3>
          <p style={{ color: "#555", fontSize: "17px", lineHeight: "1.7" }}>
            Once the work is done, review, approve, and release secure
            payments. Build long-term professional relationships.
          </p>
        </div>
      </Col>
      <Col md={6} className="text-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
            alt="Step 3"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              position: "relative",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-15px",
              left: "-15px",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              border: "3px solid #7A8797",
              zIndex: 0,
            }}
          ></div>
        </div>
      </Col>
    </Row>
  </Container>
</section>




{/* TESTIMONIALS */}
<section
  style={{
    position: "relative",
    background: "linear-gradient(135deg, #e7ecf0 0%, #f8f9fa 100%)",
    padding: "100px 0",
    overflow: "hidden",
    textAlign: "center",
  }}
>
  {/* Decorative shape */}
  <div
    style={{
      position: "absolute",
      top: "-80px",
      right: "-80px",
      width: "220px",
      height: "220px",
      backgroundColor: "#9AAFC2",
      borderRadius: "50%",
      opacity: "0.15",
      zIndex: 0,
    }}
  ></div>

  <Container style={{ position: "relative", zIndex: 1 }}>
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
  {[
    {
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Riya Sharma",
      role: "Startup Founder",
      text: "This platform helped me find the perfect developer for my app idea. Great experience and easy to use!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Arjun Mehta",
      role: "Digital Marketer",
      text: "I’ve completed several projects here — the process is smooth and payments are always on time.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sneha Kapoor",
      role: "Graphic Designer",
      text: "A great platform for creative freelancers! I’ve built long-term clients and improved my portfolio.",
    },
  ].map((item, index) => (
    <Col lg={4} md={6} key={index} className="d-flex">
      <Card
        className="border-0 shadow-lg p-4 flex-fill"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(145deg, #ffffff, #f3f6f8)",
          transition: "all 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-10px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div className="d-flex flex-column align-items-center text-center flex-grow-1">
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
              border: "3px solid #7A8797",
            }}
          />
          <h5 style={{ color: "#2d2f33", fontWeight: "600" }}>{item.name}</h5>
          <p style={{ color: "#7A8797", fontWeight: "500", marginBottom: "10px" }}>
            {item.role}
          </p>
          <p
            style={{
              color: "#555",
              fontStyle: "italic",
              lineHeight: "1.7",
              flexGrow: 1,
            }}
          >
            “{item.text}”
          </p>
        </div>
      </Card>
    </Col>
  ))}
</Row>

  </Container>
</section>

    </>
  )
}

export default Home