import React from "react";
import { NavLink, Link } from "react-router-dom";

function Title({ title, more = false }) {
  return (
    <header className="flex items-center justify-between mb-4">
      <NavLink to={more ?? "#"}>
        <h3 className="text-2xl text-white font-semibold tracking-tight ">
          {title}
        </h3>
      </NavLink>
      {more && (
        <Link
		className={"text-xs  font-semibold uppercase text-link tracking-wider"}
          to={more.to} // Use the "to" prop for navigation
        >
          SEE ALL
        </Link>
      )}
    </header>
  );
}

export default Title;
