import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/photoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

export default function Container({ searchTerm }) {
    const { images, loading, runSearch } = useContext(PhotoContext);

    useEffect(() => {
        runSearch(searchTerm);
    }, [searchTerm]);

    return (
        <div className="w-full max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-spotifyGreen z-2">
                {searchTerm} Images
            </h1>
            <div className="photo-container bg-spotifyGray rounded-lg shadow-md p-4">
                {loading ? (
                    <Loader />
                ) : (
                    <Gallery data={images} />
                )}
            </div>
        </div>
    );
};
