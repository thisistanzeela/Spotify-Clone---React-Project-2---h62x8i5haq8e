import React from "react";
import Navigation from "./NavbarCompo/Navigation";
import Auth from "./NavbarCompo/Auth";
import SubscriptionModal from "./NavbarCompo/SubscriptionModal";

function Navbar() {
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <div className="flex items-center">
        <Navigation />
      </div>
      <div className="flex items-center">
        <SubscriptionModal />
        <Auth />
      </div>
    </nav>
  );
}

export default Navbar;
