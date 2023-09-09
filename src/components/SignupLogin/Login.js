// import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const [isHovered, setIsHovered] = useState(false);

//   const handleUserEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const toggleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const apiUrl = "https://academics.newtonschool.co/api/v1/user/login";
//       const appType = "music";
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           projectId: "5fwpxj9fh6yy",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           appType: appType,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("username", data.data.name);
//         localStorage.setItem("email", data.data.email);
//         setLogin(true);
//         navigate("/");
//       } else {
//         console.log("Login Failed: Invalid Username or Password");
//       }
//     } catch (error) {
//       console.error("Internal server problem. Please try again later.");
//     }
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <nav>
//         <div
//           className="logo"
//           style={{
//             padding: "16px",
//             backgroundColor: "black",
//           }}
//         >
//           <img
//             src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
//             alt="Spotify_Logo"
//             style={{ height: "48px" }}
//           />
//         </div>
//       </nav>
//       <div
//         id="spotify-login-page-container"
//         style={{
//           background: "linear-gradient(#1C1C1C)",
//           width: "100vw",
//           height: "100vh",
//           padding: "50px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           id="auth-container"
//           style={{
//             height: "80vh",
//             width: "36vw",
//             backgroundColor: "black",
//             borderRadius: "7px",
//             marginBottom: "50px",
//           }}
//         >
//           <div
//             className="title-logo"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <div
//               className="title"
//               style={{
//                 marginTop: "20px",
//                 color: "white",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 color: "white",
//                 fontSize: "32px",
//                 fontWeight: "bold",
//               }}
//             >
//               <p>Log in to Spotify </p>
//             </div>
//             <div
//               className="login-form-container"
//               style={{
//                 marginTop: "40px",
//               }}
//             >
//               <div className="login_input_container">
//                 <p
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   Email address
//                 </p>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   required
//                   style={{
//                     padding: "10px",
//                     width: "350px",
//                     height: "40px",
//                     background: "#1C1C1C",
//                     color: "white",
//                     border: "1px solid white",
//                     borderRadius: "4px",
//                     marginBottom: "18px",
//                   }}
//                   value={email}
//                   onChange={handleUserEmailChange}
//                 />
//                 <p
//                   style={{
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                     marginBottom: "6px",
//                     marginTop: "10px",
//                   }}
//                 >
//                   Password
//                 </p>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   id=""
//                   required
//                   style={{
//                     padding: "10px",
//                     width: "350px",
//                     height: "40px",
//                     background: "#1C1C1C",
//                     color: "white",
//                     border: "1px solid white",
//                     borderRadius: "4px",
//                   }}
//                   value={password}
//                   onChange={handlePasswordChange}
//                 />
//               </div>
//               <div
//                 className="login-options-container"
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   color: "white",
//                   marginTop: "20px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "40px",
//                       height: "22px",
//                       backgroundColor: rememberMe ? "green" : "gray",
//                       borderRadius: "14px",
//                       display: "flex",
//                       alignItems: "center",
//                       cursor: "pointer",
//                       justifyContent: rememberMe ? "flex-end" : "flex-start",
//                       padding: "4px",
//                       transition: "0.2s",
//                     }}
//                     onClick={toggleRememberMe}
//                   >
//                     <div
//                       style={{
//                         width: "18px",
//                         height: "20px",
//                         backgroundColor: "white",
//                         borderRadius: "50%",
//                         transform: rememberMe
//                           ? "translateX(8px)"
//                           : "translateX(0)",
//                         transition: "0.2s",
//                       }}
//                     ></div>
//                   </div>
//                   <p style={{ marginLeft: "10px" }}>Remember me</p>
//                 </div>
//               </div>
//               <div
//                 className="login_btn_container"
//                 style={{
//                   width: "340px",
//                   marginTop: "30px",
//                   height: "42px",
//                   borderRadius: "20px",
//                 }}
//               >
//                 <input
//                   type="button"
//                   value="Login"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     background: "none",
//                     border: "none",
//                     cursor: "pointer",
//                     outline: "none",
//                     transition: "0.1s",
//                     borderRadius: "20px",
//                     fontSize: "18px",
//                     backgroundColor: isHovered ? "#c4f1c0" : "#1DB954",
//                     color: isHovered ? "black" : "white",
//                   }}
//                   className="login_btn"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                   onClick={handleSubmit}
//                 />
//               </div>
//             </div>
//             <div
//               className="signup_container"
//               style={{
//                 marginTop: "20px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <Link to="/Update-Password" style={{ textAlign: "center", textDecoration: "underline" }}>
//   Forgot your password?
// </Link>

//               <hr style={{ marginTop: "48px", width: "350px" }}></hr>
//               <Link
//                 to="/Signup-Page"
//                 style={{ textAlign: "center", marginTop: "16px" }}
//               >
//                 Don't have an account?{" "}
//                 <span style={{ textDecoration: "underline", margin: "0px 4px" }}>
//                   Sign up For Spotify
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;







import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleUserEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "https://academics.newtonschool.co/api/v1/user/login";
      const appType = "music";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "5fwpxj9fh6yy",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: appType,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.data.name);
        localStorage.setItem("email", data.data.email);
        setlogin(true);
        navigate("/");
      } else {
        toast.error("Login Failed: Invalid Username or Password");
        console.log(error);
      }
    } catch (error) {
      toast.error("Internal server problem. Please try again later.");
    }
    setEmail("");
    setPassword("");
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
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              <p>Log in to Spotify </p>
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
                <input
                  type="password"
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
                <span style={{ textDecoration: "underline", margin: "0px 4px" }}>
                  Sign up For Spotify
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
