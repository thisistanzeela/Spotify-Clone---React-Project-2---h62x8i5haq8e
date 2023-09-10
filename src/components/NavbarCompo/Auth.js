import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state with false
  const [user, setUser] = useState({ name: "" });

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens and user data
    localStorage.removeItem("token"); 
    localStorage.removeItem("username");
    localStorage.removeItem("email"); 

    setIsLoggedIn(false);

    setUser({ name: "" });
  };

  useEffect(() => {
    // Check local storage for user data on component mount (page reload)
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (storedToken && storedUsername) {
      // User is logged in, set the user data and login status
      setUser({ name: storedUsername });
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {/* <span> {user.name}</span> */}
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button
                  className={`flex items-center h-8 rounded-3xl pr-2 ${
                    open ? "bg-black text-white" : "bg-white text-black"
                  }`}
                  style={{
                    border: "1px solid transparent", 
                    transition: "border-color 0.3s",
                  }}
                >
                  <span
                    className="text-sm font-semibold mr-2"
                    style={{
                      padding: "18px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: open ? "white" : "black", 
                    }}
                  >
                    {user.name}
                  </span>
                  <span className={open && "rotate-180"}>
                    <Icon size={16} name="downDir" />
                  </span>
                </Menu.Button>

                <Menu.Items
                  className={
                    "absolute  top-full right-6 w-52 bg-active rounded translate-y-2"
                  }
                >
                  <Menu.Item>
                    {() => (
                      <a
                        className={`h-10 flex items-center px-2 text-sm rounded `}
                        href="https://www.spotify.com/in-en/download/windows/"
                      >
                        Download App
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <a
                        className={`h-10 flex items-center px-2 text-sm rounded `}
                        href="#"
                        onClick={handleLogout}
                      >
                        Log out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      ) : (
        <Link to="/Signup-Page">
          <button className="bg-black text-white px-4 py-2 rounded-full m-2">
            Sign up
          </button>
        </Link>
      )}
    </div>
  );
}

export default Auth;
