import React from 'react'
import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { useMatch } from "react-router-dom"; // Use useMatch instead of useRouteMatch
import Search from "./Navbar/Search";

function Navbar() {
  const searchRoute = useMatch('/search'); // Use useMatch instead of useRouteMatch

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />

      {searchRoute && <Search />}

      <Auth />
    </nav>
  );
}

export default Navbar;
