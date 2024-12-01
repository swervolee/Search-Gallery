import React, { createContext, useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_FLICK_API;

export const PhotoContext = createContext();

export default function PhotoContextProvider(props) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = query => {
        setLoading(true);
        axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        .then(response => {
            setImages(response.data.photos.photo);
            setLoading(false);
        })
        .catch(error => {
            console.error("Encountered error while parsing data", error);
            setLoading(false);
        });
    };

    return (
        <PhotoContext.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </PhotoContext.Provider>
    );
}
