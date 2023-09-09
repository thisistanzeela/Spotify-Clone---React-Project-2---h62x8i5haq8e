import React, { useState} from "react";

function UpdatePassword() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      
      setShowErrorMessage(true);
      return;
    }
    const jwttoken = localStorage.getItem("token");
    try {
      const apiUrl =
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword";
        const projectId = "5fwpxj9fh6yy";
      const appType = "music";
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
          Authorization: `Bearer ${jwttoken}`,
        },
        body: JSON.stringify({
          name: username,
          email: email,
          passwordCurrent: currentPassword,
          password: newPassword,
          appType: appType,
        }),
      });

      if (response.ok) {
        // Password updated successfully, show a success message
        // const data = await response.json();
        setShowSuccessMessage(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        // Password update failed, show an error message
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error("Internal server problem. Please try again later.");
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
              marginTop: "20px",
              color: "white",
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
            
            }}
          > <h2 >Update Password</h2>
            <div
              style={{
                marginTop: "80px",
              }}
            >
                     

              {showSuccessMessage && (
                <div className="success-message">
                  Password updated successfully!
                </div>
              )}
              {showErrorMessage && (
                <div className="error-message">
                  Password update failed. Please check your current password.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <p
                    htmlFor="newPassword"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                    }}
                  >
                    Current Password:
                  </p>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
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
                  />
                  <p
                    htmlFor="newPassword"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    New Password:
                  </p>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
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
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                    htmlFor="confirmNewPassword"
                  >
                    Confirm New Password:
                  </p>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={handleConfirmNewPasswordChange}
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
                  />
                </div>
              </form>
              <div
                style={{
                  width: "340px",
                  marginTop: "40px",
                  height: "42px",
                  borderRadius: "20px",
                }}
              >
                <button
                  style={{
                    background: "#1DB954",
                    borderRadius: "20px",
                    fontSize: "18px",
                    width: "100%",
                    height: "100%",
                    border: "none",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default UpdatePassword;
