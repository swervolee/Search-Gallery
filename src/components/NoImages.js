import React from "react";

export default function NoImages() {
  return (
    <div className="text-center bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Images Found</h2>
      <p className="text-gray-600">Please try a different search term</p>
    </div>
  );
}
