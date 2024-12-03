import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const elements = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <nav className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-6xl mx-auto">
      <ul className="flex flex-wrap justify-center gap-6">
        {elements.map((element) => (
          <li key={element}>
            <NavLink
              to={element}
              className={({ isActive }) =>
                `px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out 
                ${isActive 
                  ? "bg-spotifyGreen text-white shadow-md scale-105" 
                  : "text-spotifyGreen hover:bg-spotifyGreen hover:text-white hover:shadow-lg transform hover:scale-105"}`
              }
            >
              {element}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
