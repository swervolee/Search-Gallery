import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_FLICK_API;

export const PhotoContext = createContext();

export default function PhotoContextProvider(props) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    const runSearch = useCallback((newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setLoading(true);
        setImages([])
        axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${newQuery}&per_page=24&page=1&format=json&nojsoncallback=1`
        )
        .then(response => {
            setImages(response.data.photos.photo);
            setLoading(false);
        })
        .catch(error => {
            console.error("Encountered error while parsing data", error);
            setLoading(false);
        });
    }, []);

    const loadMore = useCallback(() => {
        if (loading) return;

        setLoading(true);
        axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=${page + 1}&format=json&nojsoncallback=1`
        )
        .then(response => {
            setImages(prevImages => [...prevImages, ...response.data.photos.photo]);
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        })
        .catch(error => {
            console.error("Encountered error while loading more data", error);
            setLoading(false);
        });
    }, [query, page, loading]);

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 200
        ) {
            loadMore();
        }
    }, [loadMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <PhotoContext.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </PhotoContext.Provider>
    );
}
