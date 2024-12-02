import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Navigation from "./navigation";

export default function Header() {
  const navigate = useNavigate();

  const handleSubmit = (e, searchEntry) => {
    e.preventDefault();
    e.currentTarget.reset();
    navigate(`/search/${searchEntry}`); 
  };

  return (
    <div>
      <h2>Search Gallery</h2>
      {/* Pass handleSubmit and navigate to Form */}
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}
