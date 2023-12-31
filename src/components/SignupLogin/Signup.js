import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import the useAuth hook
import axios from "axios";
import { toast } from "react-toastify";

function SignupForm() {
  const { isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "Male", // Default value
    receiveMarketingMessages: false,
    shareDataWithProviders: false,
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleWarningClose = () => {
    setShowWarning(false);
  };

  const showWarningMessage = (message) => {
    setWarningMessage(message);
    setShowWarning(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (
      email === "" ||
      password === "" ||
      username === "" ||
      formData.birthYear === "" ||
      formData.birthMonth === "" ||
      formData.birthDay === ""
    ) {
      toast.error("Fields cannot be empty");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Invalid email address");
      return;
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
    ) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special symbol"
      );
      return;
    }

    try {
      const apiUrl = "https://academics.newtonschool.co/api/v1/user/signup";
      const appType = "music";

      let data = JSON.stringify({
        appType,
        email,
        name: username,
        password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
          projectId: "f104bi07c490",
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios.request(config);
      setUser({ name: username });
      console.log("User data set:", { name: username });
      toast.success("Signup successful! Welcome to Spotify.");
    } catch (error) {
      // Handle network errors or other exceptions
      showWarningMessage("Signup Failed");
      console.error("Error:", error);
    }
  };

  return (
    <div id="spotify-login-page-container">
      {isLoggedIn ? (
        <p>You are already logged in as {username}.</p>
      ) : (
        // <div
        //   style={{
        //     width: "100vw",
        //     height: "100vh",
        //   }}
        // >
        //   <p>Please log in or sign up to access the music player.</p>
        <Link to="/Signup-Page"></Link>
        // </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="logo"
          style={{
            marginTop: "30px",
            marginBottom: "10px",
            backgroundColor: "black",
            width: "10vw",
          }}
        >
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="Spotify_Logo"
            style={{ height: "38px" }}
          />
        </div>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Sign up for free to start listening.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            width: "26vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          {" "}
          <label
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            What’s your email address?
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            // required
            style={{
              padding: "10px",
              width: "28vw",
              height: "40px",
              color: "black",
              border: "1px solid black",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          />
          <label
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            Create a password{" "}
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            // required
            style={{
              padding: "10px",
              width: "28vw",
              height: "40px",
              color: "black",
              border: "1px solid black",
              borderRadius: "4px",
            }}
          />
          <label
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            What should we call you?
          </label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleUsernameChange}
            // required
            style={{
              padding: "10px",
              width: "28vw",
              height: "40px",
              color: "black",
              border: "1px solid black",
              borderRadius: "4px",
            }}
          />
          <label
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            What’s your date of birth?
            <div style={{ display: "flex", width: "28vw" }}>
              <select
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                // required
                style={{
                  width: "32vw",
                  height: "40px",
                  color: "black",
                  border: "1px solid black",
                  margin: "10px 0px",
                  borderRadius: "4px",
                }}
              >
                <option value="" style={{}}>
                  Year
                </option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                // required
                style={{
                  width: "60vw",
                  height: "40px",
                  color: "black",
                  border: "1px solid black",
                  margin: "10px  10px 0px 10px",
                  borderRadius: "4px",
                }}
              >
                {/* Months */}
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                name="birthDay"
                value={formData.birthDay}
                onChange={handleChange}
                // required
                style={{
                  width: "32vw",
                  height: "40px",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "4px",
                  margin: "10px 0px 0px 0px",
                }}
              >
                {/* Days */}
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              fontWeight: "500",
              marginTop: "6px",
            }}
          >
            What’s your gender?
          </label>
          <div
            style={{
              width: "30vw",
            }}
          >
            <input
              type="radio"
              name="gender"
              value="Male"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="male"
              style={{
                borderRadius: "50%",
                marginRight: "20px",

                textAlign: "center",
                marginLeft: "10px",
                fontSize: "16px",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Male
            </label>

            <input
              type="radio"
              name="gender"
              value="Female"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="female"
              style={{
                borderRadius: "50%",
                marginRight: "20px",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
                fontSize: "16px",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Female
            </label>

            <input
              type="radio"
              id="Non-binary"
              name="gender"
              value="Non-binary"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="Non-binary"
              style={{
                borderRadius: "50%",
                marginRight: "20px",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
                fontSize: "16px",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Non-binary
            </label>

            <input
              type="radio"
              id="  Other"
              name="gender"
              value="  Other"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor="  Other"
              style={{
                borderRadius: "50%",
                marginRight: "20px",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
                fontSize: "16px",
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              Other
            </label>
            <br />
            <input
              type="radio"
              id=" Prefer not to say"
              name="gender"
              value=" Prefer not to say"
              style={{ cursor: "pointer" }}
            />
            <label
              htmlFor=" Prefer not to say"
              style={{
                borderRadius: "50%",
                marginRight: "20px",
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "10px",
                fontSize: "16px",
                marginBottom: "8px",
                marginTop: "20px",
              }}
            >
              Prefer not to say
            </label>
          </div>
          <label
            style={{
              fontSize: "14px",
              marginBottom: "2px",
              fontWeight: "500",
              marginTop: "20px",
              width: "32vw",
              // required
            }}
          >
            {" "}
            <input
              type="checkbox"
              name="receiveMarketingMessages"
              checked={formData.receiveMarketingMessages}
              onChange={handleChange}
              style={{
                marginRight: "10px",
                marginTop: "6px",
                cursor: "pointer",
              }}
            />
            I would prefer not to receive marketing messages from Spotify
          </label>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#1db954",
                color: "black",
                border: "none",
                borderRadius: "50px",
                padding: "10px 40px",
                cursor: "pointer",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Sign up
            </button>
            <p style={{ fontSize: "16px", marginTop: "10px" }}>
              Have an account?{" "}
              <Link
                to="/login-Page"
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#1db954",
                  fontWeight: "bold",
                }}
              >
                Log in.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
