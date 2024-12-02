import React from "react";

export default function Image({ url, title }) {
  return (
    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <img
        src={url}
        alt={title}
        className="w-full h-auto rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-spotifyGreen"
      />
    </li>
  );
}
