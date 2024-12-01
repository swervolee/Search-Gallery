import React from "react";
import Container from "./Container";


export default function Search({ searchTerm }) {
    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <Container searchTerm={searchTerm} />
        </div>
    )
}