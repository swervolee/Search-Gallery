import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Page Not Found</h2>
      <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
