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

    useEffect(() => {
        if (searchValue === "") {
            setIsSearching(false);
        }
    }, [searchValue])
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
    const handleRobertJ = () => {
        console.log('Robert J. Sawyer random tweet will go here!');
    };
    const handleArnold = () => {
        console.log('Arnold S random tweet will go here!');
    };
    const handleArlene = () => {
        console.log('Arlene random tweet will go here!');
    };
    const handleKiyosaki = () => {
        console.log('Kiyosaki random tweet will go here!');
    };
    const handleDalai = () => {
        console.log('Dalai Lama random tweet will go here!!');
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
                />
            </nav>
            <p className="body_text text-justify">This is the random search page!  Click on any of the pictures below to display a random tweet.</p>
            {/* <div className="d-flex justify-content-around"> */}
            {!isSearching && <div className="famous_people d-flex justify-content-evenly">
                <img src={robertSawyer} alt="robert J Sawyer" style={imageStyle} onClick={handleRobertJ} />
                <img src={arnold} alt="Arnold Schwarnegger" style={imageStyle} onClick={handleArnold} />
                <img src={arlene} alt="Arlene Dickinson" style={imageStyle} onClick={handleArlene} />
                <img src={robertKiyosaki} alt="Robert Kiyosaki" style={imageStyle} onClick={handleKiyosaki} />
                <img src={dalaiLama} alt="Dalai Lama" style={imageStyle} onClick={handleDalai} />
            </div>}
            <div>
                {displayData}
            </div>
        </>
    )
}

export default RandomSearch;