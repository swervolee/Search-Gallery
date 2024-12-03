import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form className="flex items-center max-w-lg mx-auto" onSubmit={(e) => handleSubmit(e, searchEntry)}>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
          </svg>
        </div>
        <input type="text"
        name="search"
        className="bg-gray-50
        border
        border-gray-300
        text-gray-900 
        text-sm 
        rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 
        w-full 
        ps-10 
        p-2.5" 
        placeholder="Search.." 
        required 
        onChange={updateSearchInput}
        value={searchEntry}/>
      </div>
      <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 bg-spotifyBlack hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    </form>
  )
  }

  /*

  return (
    <form
      className="flex items-center space-x-6 mx-autobg-white p-6 rounded-lg shadow-lg border border-gray-200"
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
*/