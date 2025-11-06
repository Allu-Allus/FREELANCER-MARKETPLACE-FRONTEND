import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../../service/allAPI";
import { toast } from "react-toastify";

function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  });
  console.log(userDetails);

  const navigate = useNavigate()
  //register
  const handleRegister = async () => {
    const { username, email, password,role } = userDetails

    if (!username || !email || !password || !role) {
      alert("Fill in the form completely")
    } else {
      const result = await registerAPI({ username, email, password, role })
      console.log(result);
      if (result.status == 200) {
        toast.success("Registered Successfully")
        setUserDetails({
          username: "",
          email: "",
          password: "",
          role : ""
        })
        navigate("/login")
      } else if (result.status == 406) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: "",
           role : ""
        })
      } else {
        toast.error("Something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: "",
           role : ""
        })
      }

    }
  }
  //login
  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Fill the form completely")
    } else {
      const result = await loginAPI({ email, password })
      console.log(result);

      if (result.status == 200) {
            const user = result.data.existingUser;
        const token = result.data.token;
        toast.success("Login Successfull")
       
        sessionStorage.setItem("existingUser", JSON.stringify(user))
        sessionStorage.setItem("token", token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          if (user.role == "Freelancer") {
            navigate("/freelancer-dashboard")
          } else if (user.role == "Client") {
            navigate("/client-dashboard")
          }else if (user.role == "Admin") {
            navigate("/admin-dashboard")
          }else{
            navigate("/")
          }
          
        }, 2000)
      } else if (result.status == 403 || result.status == 406) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error("Something went wrong!!!")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }

    }
  }
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #9AAFC2, #f5f6fa)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  padding: "30px 25px",
                  border: "none",
                }}
              >
                <div className="text-center mb-4">
                  <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>
                    <span style={{ color: "#9AAFC2" }}>Freelance</span> Hub
                  </h2>
                  <p style={{ color: "#6c757d", fontSize: "14px" }}>
                    Login or create an account to continue
                  </p>
                </div>

                {/* Role Selection */}
                <Form.Select value={userDetails.role}
  onChange={(e) => setUserDetails({ ...userDetails, role: e.target.value })}
                  style={{
                    borderRadius: "10px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    background: "#f9f9f9",
                  }}
                >
                  <option>Select Role</option>
                  <option>Freelancer</option>
                  <option>Client</option>
                  <option>Admin</option>
                </Form.Select>

                {/* Login / Register Form */}
                <form>
                  {register && (
                    <div style={{ marginBottom: "15px" }}>
                      <label
                        htmlFor="username"
                        style={{
                          display: "block",
                          marginBottom: "6px",
                          color: "#555",
                          fontWeight: "500",
                        }}
                      >
                        Username
                      </label>
                      <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        id="username"
                        type="text"
                        placeholder="Enter your name"
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          padding: "10px",
                          border: "1px solid #ccc",
                        }}
                      />
                    </div>
                  )}

                  <div style={{ marginBottom: "15px" }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#555",
                        fontWeight: "500",
                      }}
                    >
                      Email
                    </label>
                    <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label
                      htmlFor="password"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        color: "#555",
                        fontWeight: "500",
                      }}
                    >
                      Password
                    </label>
                    <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>

                  {register ? <Button type="button" onClick={handleRegister}

                    style={{
                      width: "100%",
                      backgroundColor: "#9AAFC2",
                      border: "none",
                      borderRadius: "10px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Register
                  </Button>
                    :
                    <Button type="button" onClick={handleLogin}

                      style={{
                        width: "100%",
                        backgroundColor: "#9AAFC2",
                        border: "none",
                        borderRadius: "10px",
                        padding: "12px",
                        fontWeight: "600",
                      }}
                    >
                      Login
                    </Button>}
                </form>

                {register ?
                  <div className="text-center mt-3">
                    <p style={{ color: "#6c757d", fontSize: "14px", marginBottom: "10px" }}>
                      Already a user?
                    </p>
                    <Link to="/login">
                      <span
                        style={{
                          // backgroundColor: "#9AAFC2",
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontWeight: "600",
                        }}
                      >
                        Login
                      </span>
                    </Link>
                  </div>
                  :
                  <div className="text-center mt-3">
                    <p style={{ color: "#6c757d", fontSize: "14px", marginBottom: "10px" }}>
                      Don’t have an account?
                    </p>
                    <Link to="/register">
                      <span
                        style={{
                          // backgroundColor: "#9AAFC2",
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontWeight: "600",
                        }}
                      >
                        Register
                      </span>
                    </Link>
                  </div>
                }


              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Auth;
