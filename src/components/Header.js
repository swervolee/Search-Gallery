import React from "react";
import Form from "./Form";
import Navigation from "./navigation";


export default function Header({ history, handleSubmit }) {
    return (
        <div>
            <h1>Search Gallery</h1>
            <Form history={history} handleSubmit={handleSubmit} />
            <Navigation />
        </div>
    );
};