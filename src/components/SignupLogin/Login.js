import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUserEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "https://academics.newtonschool.co/api/v1/user/login";
      const data = JSON.stringify({
        email,
        password,
        appType: "music",
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
          projectId: "f104bi07c490",
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.data.name);
        localStorage.setItem("email", response.data.data.email);
        login(response.data.data.name);
        navigate("/");
        toast.success("Login Successful");
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal server problem. Please try again later.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <nav>
        <div
          className="logo"
          style={{
            padding: "16px",
            backgroundColor: "black",
          }}
        >
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="Spotify_Logo"
            style={{ height: "48px" }}
          />
        </div>
      </nav>
      <div
        id="spotify-login-page-container"
        style={{
          background: "linear-gradient(#1C1C1C)",
          width: "100vw",
          height: "100vh",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id="auth-container"
          style={{
            height: "80vh",
            width: "36vw",
            backgroundColor: "black",
            borderRadius: "7px",
            marginBottom: "50px",
          }}
        >
          <div
            className="title-logo"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="title"
              style={{
                marginTop: "20px",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              <p className="load">Log in to Spotify</p>
            </div>
            <div
              className="login-form-container"
              style={{
                marginTop: "40px",
              }}
            >
              <div className="login_input_container">
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Email address
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{
                    padding: "10px",
                    width: "350px",
                    height: "40px",
                    background: "#1C1C1C",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "4px",
                    marginBottom: "18px",
                  }}
                  value={email}
                  onChange={handleUserEmailChange}
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "6px",
                    marginTop: "10px",
                  }}
                >
                  Password
                </p>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    id=""
                    required
                    style={{
                      padding: "10px",
                      width: "350px",
                      height: "40px",
                      background: "#1C1C1C",
                      color: "white",
                      border: "1px solid white",
                      borderRadius: "4px",
                    }}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    onClick={handleTogglePassword}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    color:"white"
                    }}
                  >
                    {showPassword ? (
                      <svg
                        role="img"
                        height="24"
                        width="24"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 uPxdw"
                        fill="white"
                      >
                        <path
                          d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L0.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        role="img"
                        height="24"
                        width="24"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 uPxdw"
                        fill="white"
                      >
                        <path
                          d="M16.729 4.729a.997.997 0 0 0-1.409 0l-.072.072c-2.055 2.055-4.767 3.185-7.648 3.185-2.882 0-5.593-1.13-7.648-3.185a.997.997 0 0 0-1.409 0l-.072.072a.997.997 0 0 0 0 1.409C2.945 9.274 6.657 10.404 9.64 10.404c2.882 0 5.593-1.13 7.648-3.185a.997.997 0 0 0 0-1.409l-.072-.072a.997.997 0 0 0 0-1.409c-2.055-2.055-4.767-3.185-7.648-3.185-2.882 0-5.593 1.13-7.648 3.185a.997.997 0 0 0 0 1.409l.072.072c2.055 2.055 4.767 3.185 7.648 3.185 2.882 0 5.593-1.13 7.648-3.185a.997.997 0 0 0 0-1.409l-.072-.072zM11.996 14.342c-1.35 0-2.608-.527-3.563-1.482a.997.997 0 1 0-1.409 1.409 7.963 7.963 0 0 0 5.972 2.68c1.983 0 3.842-.77 5.236-2.164a.997.997 0 1 0-1.409-1.409c-2.129 2.129-5.6 2.129-7.729 0a.997.997 0 0 0-1.409 0 .997.997 0 0 0 0 1.409c1.856 1.857 4.312 2.88 6.91 2.88 2.6 0 5.055-1.022 6.911-2.88a.997.997 0 0 0 0-1.409 7.963 7.963 0 0 0-5.971-2.68z"
                        ></path>
                      </svg>
                    )}
                  </span>
                </div>
              </div>
              <div
                className="login-options-container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "22px",
                      backgroundColor: rememberMe ? "green" : "gray",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      justifyContent: rememberMe ? "flex-end" : "flex-start",
                      padding: "4px",
                      transition: "0.2s",
                    }}
                    onClick={toggleRememberMe}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "20px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        transform: rememberMe
                          ? "translateX(8px)"
                          : "translateX(0)",
                        transition: "0.2s",
                      }}
                    ></div>
                  </div>
                  <p style={{ marginLeft: "10px" }}>Remember me</p>
                </div>
              </div>
              <div
                className="login_btn_container"
                style={{
                  width: "340px",
                  marginTop: "30px",
                  height: "42px",
                  borderRadius: "20px",
                }}
              >
                <input
                  type="button"
                  value="Login"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                    transition: "0.1s",
                    borderRadius: "20px",
                    fontSize: "18px",
                    backgroundColor: isHovered ? "#c4f1c0" : "#1DB954",
                    color: isHovered ? "black" : "white",
                  }}
                  className="login_btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleSubmit}
                />
              </div>
            </div>
            <div
              className="signup_container"
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/Update-Password"
                style={{ textAlign: "center", textDecoration: "underline" }}
              >
                Forgot your password?
              </Link>
              <hr style={{ marginTop: "48px", width: "350px" }} />
              <Link
                to="/Signup-Page"
                style={{ textAlign: "center", marginTop: "16px" }}
              >
                Don't have an account?{" "}
                <span
                  style={{ textDecoration: "underline", margin: "0px 4px" }}
                >
                  Sign up For Spotify
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
