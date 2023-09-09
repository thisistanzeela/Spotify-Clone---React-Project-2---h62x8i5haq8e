import React from "react";
import { Link } from "react-router-dom";


function Auth() {
  const user = {
    name: "",
    avatar: "",
  };

  return (
    <>
    <Link to="/Signup-Page">
      <button
        className={`flex items-center h-8 rounded-3xl pr-2 ${
          open ? "bg-black text-white": "bg-active" 
        } hover:bg-active hover:text-white bg-black px-4 py-2 rounded-full m-2`}
        style={{ marginLeft: "10px", padding: "22px 18px", fontSize: "16px" }}
      >
        <span>Sign up</span>
      </button>
      </Link>
      {/* <Link to="/login-Page">
      <button
        style={{ marginLeft: "10px", padding: "22px 18px", fontSize: "16px" }}
        className={`flex items-center h-8 rounded-3xl pr-2 ${
          open ? "bg-white text-black": "bg-active" 
        } hover:bg-active hover:text-white bg-black px-4 py-2 rounded-full m-2`}
      >
        <span className="text-sm mr-2">{user.name}</span>
        <span style={{  borderRadius: "22px" }}>Log in</span>
      </button>
      </Link> */}
    </>
  );
}

export default Auth;




