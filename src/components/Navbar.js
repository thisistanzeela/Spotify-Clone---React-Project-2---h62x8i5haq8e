import React from "react";
import Navigation from "./NavbarCompo/Navigation";
import Auth from "./NavbarCompo/Auth";
import SubscriptionModal from "./NavbarCompo/SubscriptionModal";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { user, logout } = useAuth(); 
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <div className="flex items-center">
        <Navigation />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <span>{user}</span>
          </>
        ) : (
          <>
            <SubscriptionModal />
            <Auth />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
