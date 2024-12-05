import React from "react";
import { saveAs } from "file-saver";

export default function Image({ url, title }) {
  const downloadImage = (event) => {
    event.preventDefault();
    saveAs(url, title || 'image.jpg');
  };

  return (
    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="relative group">
        <img
          src={url}
          alt={title}
          className="w-full h-auto rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-spotifyGreen"
        />
        <button
          onClick={downloadImage}
          className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-white transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          aria-label={`Download ${title || 'image'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}