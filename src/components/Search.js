import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";

export default function Search() {
  const { searchTerm } = useParams();

  return (
    <div>
      <Container searchTerm={searchTerm} />
    </div>
  );
}
