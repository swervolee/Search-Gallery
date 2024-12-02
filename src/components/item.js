import React from "react";
import Container from "./Container";

export default function Item( { searchTerm }) {
    return (
        <div>
            <Container searchTerm={searchTerm} />
        </div>
    )
}