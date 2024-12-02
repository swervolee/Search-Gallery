import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white p-5 rounded-lg shadow-md mt-6">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <li>
          <NavLink
            to="/mountain"
            className={({ isActive }) =>
              `px-4 py-2 sm:px-6 sm:py-3 text-spotifyGreen font-medium rounded-md transition-all duration-300 ${
                isActive ? "bg-spotifyGreen text-white" : "hover:bg-spotifyGreen hover:text-white"
              }`
            }
          >
            Mountain
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/beach"
            className={({ isActive }) =>
              `px-4 py-2 sm:px-6 sm:py-3 text-spotifyGreen font-medium rounded-md transition-all duration-300 ${
                isActive ? "bg-spotifyGreen text-white" : "hover:bg-spotifyGreen hover:text-white"
              }`
            }
          >
            Beaches
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bird"
            className={({ isActive }) =>
              `px-4 py-2 sm:px-6 sm:py-3 text-spotifyGreen font-medium rounded-md transition-all duration-300 ${
                isActive ? "bg-spotifyGreen text-white" : "hover:bg-spotifyGreen hover:text-white"
              }`
            }
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food"
            className={({ isActive }) =>
              `px-4 py-2 sm:px-6 sm:py-3 text-spotifyGreen font-medium rounded-md transition-all duration-300 ${
                isActive ? "bg-spotifyGreen text-white" : "hover:bg-spotifyGreen hover:text-white"
              }`
            }
          >
            Food
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
