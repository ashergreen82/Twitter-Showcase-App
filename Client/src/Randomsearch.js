import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import robertSawyer from "./images/Robert_j_sawyer_in_2005.jpg";
import arnold from "./images/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg";
import arlene from "./images/Arlene_Dickinson_2021.jpg";
import robertKiyosaki from "./images/Robert_Kiyosaki_2.jpg";
import dalaiLama from "./images/Dalailama1.jpg";
import Tweet from "./components/TweetDisplay";

function RandomSearch({ bodyClass, setBodyClass }) {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [randomSearchOn, setRandomSearchOn] = useState(false);
    const [noTweetsFound, setNoTweetsFound] = useState(false);
    let famouseSearchChoice = ""

    // This code removes the background picture when there is search activity
    useEffect(() => {
        if (isSearching === true) {
            setBodyClass("");
        }
    }, [isSearching, setBodyClass])

    // This code puts the background picture in place when there is no search activity
    useEffect(() => {
        if (searchValue === "") {
            setIsSearching(false);
            setBodyClass("body-background");
        }
    }, [searchValue, setBodyClass, setIsSearching])

    const displayData = data.length ? (
        data.map((data, key) => {
            return (
                <div key={key}>
                    <Tweet
                        data={data}
                        setData={setData}
                    />
                </div>
            )
        })) : (
        <div className="main_search background-color-bg-primary">
            <h2>Sorry, No Tweets Found</h2>
        </div>
    );

    // Function that does the actual search and then random selection of what to display.
    function ActualRandomSearch(searchValue) {
        setIsSearching(true);
        setIsLoading(true);
        setRandomSearchOn(true);
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
            })
            .catch(error => {
                console.error(error);
            });
        setIsLoading(false)
    }

    // Search handlers for Random search for famous people.
    const handleRobertJ = (event) => {
        event.preventDefault();
        famouseSearchChoice = "@RobertJSawyer"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleArnold = (event) => {
        event.preventDefault();
        famouseSearchChoice = "@Schwarzenegger"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleArlene = (event) => {
        event.preventDefault();
        famouseSearchChoice = "@ArleneDickinson"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleKiyosaki = (event) => {
        event.preventDefault();
        famouseSearchChoice = "@theRealKiyosaki"
        ActualRandomSearch(famouseSearchChoice);
    };
    const handleDalai = (event) => {
        event.preventDefault();
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