import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";

export default function Search() {
    const { searchTerm } = useParams();

    console.log(searchTerm);

    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <Container searchTerm={searchTerm} />
        </div>
    );
}
