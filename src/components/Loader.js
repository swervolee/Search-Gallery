import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader-spinner border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
}
