import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import robertSawyer from "./images/Robert_j_sawyer_in_2005.jpg";
import arnold from "./images/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg";
import arlene from "./images/Arlene_Dickinson_2021.jpg";
import robertKiyosaki from "./images/Robert_Kiyosaki_2.jpg";
import dalaiLama from "./images/Dalailama1.jpg";
import heartPicture from "./images/heart.png";
import reTweetPicture from "./images/retweet.png";

function RandomSearch({ bodyClass, setBodyClass }) {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [randomSearchOn, setRandomSearchOn] = useState(false);
    const [noTweetsFound, setNoTweetsFound] = useState(false);
    let famouseSearchChoice = ""

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

    const displayData = data.map((data, key) => {
        return (
            <div className="main_search background-color-bg-primary" key={key}>
                <h2>{data.username}</h2>
                <p>{data.full_text}</p>
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

    // Function that does the actual search and then random selection of what to display.
    function ActualRandomSearch(searchValue) {
        setIsSearching(true);
        setIsLoading(true);
        setRandomSearchOn(true);
        console.log("Random person selected:", searchValue);
        fetch('/api/random_search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: searchValue
            })
        })
            .then(response => response.json())
            .then(data => {
                setData([data]);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        console.log("Data Received")
        setIsLoading(false)
    }

    // Search handlers for Random search for famous people.
    const handleRobertJ = (event) => {
        event.preventDefault();
        console.log('@RobertJSawyer random tweet will go here!');
        famouseSearchChoice = "@RobertJSawyer"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleArnold = (event) => {
        event.preventDefault();
        console.log('@Schwarzenegger random tweet will go here!');
        famouseSearchChoice = "@Schwarzenegger"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleArlene = (event) => {
        event.preventDefault();
        console.log('@ArleneDickinson random tweet will go here!');
        famouseSearchChoice = "@ArleneDickinson"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleKiyosaki = (event) => {
        event.preventDefault();
        console.log('@theRealKiyosaki random tweet will go here!');
        famouseSearchChoice = "@theRealKiyosaki"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleDalai = (event) => {
        event.preventDefault();
        console.log('@DalaiLama random tweet will go here!!');
        famouseSearchChoice = "@DalaiLama"
        ActualRandomSearch(famouseSearchChoice);
    };

    const imageStyle = {
        width: "315px",
        height: "625px",
    };

    return (
        <>
            <nav>
                <Navbar
                    data={data}
                    setData={setData}
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    setIsSearching={setIsSearching}
                    isSearching={isSearching}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    setNoTweetsFound={setNoTweetsFound}
                    noTweetsFound={noTweetsFound}
                />
            </nav>
            {/* <div className="d-flex justify-content-around"> */}
            {!isSearching ? (
                <div className="famous_people d-flex justify-content-evenly">
                    <p className="body_text text-justify">This is the random search page!  Click on any of the pictures below to display a random tweet.</p>
                    <img src={robertSawyer} alt="robert J Sawyer" style={imageStyle} onClick={handleRobertJ} />
                    <img src={arnold} alt="Arnold Schwarnegger" style={imageStyle} onClick={handleArnold} />
                    <img src={arlene} alt="Arlene Dickinson" style={imageStyle} onClick={handleArlene} />
                    <img src={robertKiyosaki} alt="Robert Kiyosaki" style={imageStyle} onClick={handleKiyosaki} />
                    <img src={dalaiLama} alt="Dalai Lama" style={imageStyle} onClick={handleDalai} />
                </div>
            ) : (
                <div>
                    <div>
                        {displayData}
                    </div>
                </div>
            )}
        </>
    )
}

export default RandomSearch;