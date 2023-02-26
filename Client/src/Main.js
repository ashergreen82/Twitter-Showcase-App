import React from 'react';
import Randomsearch from "./Randomsearch";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import mainPicture from "./images/Inspired_motivational_Quotes-Small.png";
import heartPicture from "./images/heart.png";
import reTweetPicture from "./images/retweet.png";
import Navbar from './Navbar';


function Main({ bodyClass, setBodyClass }) {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     console.log("useEffect was executed")
    //     fetch("/api")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data)
    //         })
    // }, []);

    useEffect(() => {
        if (isSearching === true) {
            setBodyClass("");
        }
    }, [isSearching])

    useEffect(() => {
        if (searchValue === "") {
            setIsSearching(false);
            setBodyClass("body-background");
        }
    }, [searchValue])

    function createSearchResultHTML(result) {
        return `
          <li>
            <a href="${result.url}">${result.title}</a>
            <p>${result.description}</p>
          </li>
        `;
    }
    const displayData = data.map((data, key) => {
        return (
            <div className="main_search background-color-bg-primary" key={key}>
                <h2>{data.username}</h2>
                <p>{data.full_text}</p>
                {/* <ul>
                    {data.entities?.media &&
                        data.entities.media.map((media, index) => (
                            <li key={index}>
                                <img src={media.media_url_https} alt="tweet media" />
                            </li>
                        ))}
                </ul> */}
                <img src={data.image} alt="No Image Available" className="img-style"></img>
                {/* <p>Retweet: {data.retweet_count}</p> */}
                {/* <p>Favourited: {data.favorite_count}</p> */}
                {/* <p><img src={reTweetPicture} alt="Retweet: " className="img-icon"></img> {data.retweet_count}</p> */}
                {/* <p><img src={heartPicture} alt="Favourited: " className="img-icon"></img> {data.favorite_count}</p> */}
                <div className="tweet-icons">
                    <img src={reTweetPicture} alt="Retweet: " className="img-icon" id="retweet_icon"></img>
                    <p className="img-value" id="retreat_Value">{data.retweet_count}</p>
                    <img src={heartPicture} alt="Favourited: " className="img-icon" id="favourite_icon"></img>
                    <p className="img-value" id="favourite_value">{data.favorite_count}</p>
                </div>
            </div>
        );
    });
    return (
        <>
            <div>
                <Navbar
                    data={data}
                    setData={setData}
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    setIsSearching={setIsSearching}
                    isSearching={isSearching}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                />
            </div>
            {!isSearching ? (
                <div className="main_header text-center">
                    <h1 className="h2">WELCOME TO</h1>
                    <h1 className="h1">THE SHOWCASE TWITTER APP</h1>
                    <p className="body_text text-justify">
                        Just enter your search in the search bar above and we will grab the last few tweets on twitter for you.  We also offer a random search as well, so feel free to give that shot.
                    </p>
                    <img src={mainPicture} alt="The main picture for this page has somehow went missing." className="w-10" />
                </div>
            ) : (
                <div>
                    {displayData}
                </div>
            )}
        </>

    );
}

export default Main;