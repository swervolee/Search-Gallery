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
    <div className="bg-spotifyBlack text-white py-8 rounded-lg shadow-2xl">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-spotifyGreen">Explore the Gallery</h2>
        <Form handleSubmit={handleSubmit} />
        <Navigation />
      </div>
    </div>
  );
}
