import React, { useState } from "react";
import { createApi } from "unsplash-js";
import MosaicPictures from "./MosaicPictures";
import debounce from 'lodash.debounce';

const unsplash = createApi({
    accessKey: "GkLAml1cOQNewkDCqzLlB7LEW1fvx4cw5_skYgyHKsk",

})

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const [picsPage, setPicsPage] = useState(1);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [loadMore, setLoadMore] = useState(true);

    window.onscroll = debounce(() => {
        if(error || isLoading || !hasMore || !loadMore) return;

        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
            searchPhotos();
        }
    }, 400)
 
    const searchPhotos = async (e) => {
        if (e) {
            e.preventDefault();
        }
        unsplash.search.getPhotos({ query: query, page: picsPage })
            .then((result) => {
                if (result.type === 'success') {
                    if(result.response.results < 10){
                        setPics(prevState => (prevState.concat(result.response.results)));
                        setHasMore(false);
                    }
                    setPics(prevState => (prevState.concat(result.response.results)));
                    setPicsPage(prevState => prevState + 1);
                }
                else{
                    setError(true);
                }
            });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setPicsPage(1);
        setPics([]);
        searchPhotos();
    }

    return (
        <>
            <form className="form" onSubmit={onSubmitForm}>
                <label className="label" htmlFor="query">
                    {" "}
                    📷
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button type="submit" className="button">
                    Search
                </button>
            </form>
            <div className="card-list">
                <MosaicPictures pictures={pics} />  
            </div>
        </>
    );
}