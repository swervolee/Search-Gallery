import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/photoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

export default function Container({ searchTerm }) {
    const { images, loading, runSearch } = useContext(PhotoContext)
    useEffect(() => {
        runSearch(searchTerm);
    }, [searchTerm])

    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} />}
        </div>
    );
};