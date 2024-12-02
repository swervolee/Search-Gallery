import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form
      className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
      onSubmit={(e) => handleSubmit(e, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
        className="flex-grow px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spotifyGreen text-gray-800"
      />
      <button
        type="submit"
        className={`px-5 py-3 bg-spotifyGreen text-white font-semibold rounded-md transition-colors duration-300 ${
          searchEntry.trim() ? "hover:bg-spotifyDarkGreen" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!searchEntry.trim()}
      >
        <svg height={"24"} width={"24"} className="fill-current">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
          />
        </svg>
      </button>
    </form>
  );
}
