import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import robertSawyer from "./images/Robert_j_sawyer_in_2005.jpg";
import arnold from "./images/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg";
import arlene from "./images/Arlene_Dickinson_2021.jpg";
import robertKiyosaki from "./images/Robert_Kiyosaki_2.jpg";
import dalaiLama from "./images/Dalailama1.jpg";

function RandomSearch() {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [randomSearchOn, setRandomSearchOn] = useState(false);
    let famouseSearchChoice = ""

    useEffect(() => {
        if (searchValue === "") {
            setIsSearching(false);
        }
    }, [searchValue])

    const displayData = data.map((data, key) => {
        return (
            <div key={key}>
                <h2>Username: {data.username ?? "Unknown"}</h2>
                <p>Full text: {data.full_text ?? "No tweet text"}</p>
                <p>Image: <img src={data.image} alt="Tweet Picture Missing"></img></p>
                <p>Retweet count: {data.retweet_count ?? 0}</p>
                <p>Favourited: {data.favorite_count ?? 0}</p>
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
                setData(data)
                console.log(data);
                // do something with the response data
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
    // return (
    //     <>
    //         <nav>
    //             <Navbar
    //                 data={data}
    //                 setData={setData}
    //                 setSearchValue={setSearchValue}
    //                 searchValue={searchValue}
    //                 setIsSearching={setIsSearching}
    //                 isSearching={isSearching}
    //                 setIsLoading={setIsLoading}
    //                 isLoading={isLoading}
    //             />
    //         </nav>
    //         {!isSearching && !randomSearchOn ? (
    //             <div className="famous_people d-flex justify-content-evenly">
    //                 <p className="body_text text-justify">
    //                     This is the random search page! Click on any of the pictures below
    //                     to display a random tweet.
    //                 </p>
    //                 <img
    //                     src={robertSawyer}
    //                     alt="robert J Sawyer"
    //                     style={imageStyle}
    //                     onClick={handleRobertJ}
    //                 />
    //                 <img
    //                     src={arnold}
    //                     alt="Arnold Schwarnegger"
    //                     style={imageStyle}
    //                     onClick={handleArnold}
    //                 />
    //                 <img
    //                     src={arlene}
    //                     alt="Arlene Dickinson"
    //                     style={imageStyle}
    //                     onClick={handleArlene}
    //                 />
    //                 <img
    //                     src={robertKiyosaki}
    //                     alt="Robert Kiyosaki"
    //                     style={imageStyle}
    //                     onClick={handleKiyosaki}
    //                 />
    //                 <img
    //                     src={dalaiLama}
    //                     alt="Dalai Lama"
    //                     style={imageStyle}
    //                     onClick={handleDalai}
    //                 />
    //             </div>
    //         ) : (
    //             <div className="famous_people d-flex justify-content-evenly">
    //                 <button className="btn btn-danger" onClick={() => setRandomSearchOn(false)}>
    //                     Back to famous people
    //                 </button>
    //                 {isLoading ? (
    //                     <div className="spinner-border text-primary" role="status">
    //                         <span className="sr-only">Loading...</span>
    //                     </div>
    //                 ) : data[0].full_text ? (
    //                     displayData
    //                 ) : (
    //                     <h2>No tweet found.</h2>
    //                 )}
    //             </div>
    //         )}
    //     </>
    // );

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
                    {randomSearchOn ? (<div>
                        <h2>Username: {data.username}</h2>
                        <p>Full text: {data.full_text}</p>
                        <p>Image:</p>
                        {/* <ul>
                                {data.entities?.media &&
                                    data.entities.media.map((media, index) => (
                                        <li key={index}>
                                            <img src={media.media_url_https} alt="tweet media" />
                                        </li>
                                    ))}
                            </ul> */}
                        <img src={data.image} alt="Tweet Picture Missing" className="img-style"></img>
                        <p>Retweet count: {data.retweet_count}</p>
                        <p>Favourited: {data.favorite_count}</p>
                    </div>
                    ) : (
                        <div>
                            {displayData}
                        </div>
                    )
                    }
                </div>
            )}
        </>
    )
}

export default RandomSearch;