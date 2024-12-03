import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {

  const elements = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <nav className="bg-white p-5 rounded-lg shadow-md mt-6">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {elements.map(element => (
          <li key={element}>
            <NavLink
              to={element}
              className={({ isActive }) =>
                `px-4 py-2 sm:px-6 sm:py-3 text-spotifyGreen font-medium rounded transition-all duration-300
                ${isActive ? "bg-spotifyGreen text-white" : "hover:bg-spotifyGreen hover:text-white"}`
              }
            >
              {element}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
