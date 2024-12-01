import React from "react";


export default function handleSubmit({e, history, searchInput}) {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
}