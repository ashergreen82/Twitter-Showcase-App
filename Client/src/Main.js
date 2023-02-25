import React from 'react';
import Randomsearch from "./Randomsearch";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import mainPicture from "./images/Inspired_motivational_Quotes-Small.png";
import Navbar from './Navbar';

function Main() {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);

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
        if (searchValue === "") {
            setIsSearching(false);
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
            <div key={key}>
                <h2>Username: {data.username}</h2>
                <p>Full text: {data.full_text}</p>
                <p>Images:</p>
                <ul>
                    {data.entities?.media &&
                        data.entities.media.map((media, index) => (
                            <li key={index}>
                                <img src={media.media_url_https} alt="tweet media" />
                            </li>
                        ))}
                </ul>
                <p>Retweet count: {data.retweet_count}</p>
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
                />
            </div>
            {!isSearching ? (
                <div className="main_header text-center">
                    <h1 className="h2">WELCOME TO</h1>
                    <h1 className="h1">THE SHOWCASE TWITTER APP</h1>
                    <p className="body_text text-justify">
                        Just enter your search in the search bar above and we will search the last 7 days on twitter for you.  We also offer a random search as well, so feel free to give that shot.
                    </p>
                    <img src={mainPicture} alt="Logo" className="w-10" />
                </div>
            ) : (
                <div>
                    {displayData}
                </div>
            )}

            {/* {!isSearching && <img src={mainPicture} alt="The main picture for this page that somehow went missing." className="w-10" />} */}
        </>

    );
}

export default Main;