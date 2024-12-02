import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";

export default function Search() {
  const { searchTerm } = useParams();

  console.log(searchTerm);

  return (
    <div className="px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {searchTerm} Images
      </h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
}
