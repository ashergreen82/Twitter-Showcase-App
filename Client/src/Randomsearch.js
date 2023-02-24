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

    // const [searchValueRandom, setSearchValueRandom] = useState("");

    // function handleSearchInputChangeRandom(event) {
    //     setSearchValueRandom(event.target.value);
    // }

    // function handleSearchButtonClickRandom() {
    //     console.log("Search button clicked with search value:", searchValueRandom);
    // }

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
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                        <li className="nav-item col">
                            <Link className="nav-link" to="/">Main</Link>
                        </li>
                        <div className="vr mx-5"></div>
                        <li className="nav-item col-8">
                            <form className="d-flex flex-row justify-content-evenly m-0 p-0">
                                <input className="form-control w-75" type="search" placeholder="Enter your twitter search here" aria-label="Search" value={searchValueRandom} onChange={handleSearchInputChangeRandom} />
                                <button className="btn btn-outline-success" type="submit" onClick={handleSearchButtonClickRandom}>Search</button>
                            </form>
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <div className="vr mx-5"></div>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/Randomsearch">Random Search</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
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
            {!isSearching && <div className="d-flex justify-content-evenly">
                <img src={robertSawyer} alt="robert J Sawyer" style={imageStyle} onClick={handleRobertJ} />
                <img src={arnold} alt="Arnold Schwarnegger" style={imageStyle} onClick={handleArnold} />
                <img src={arlene} alt="Arlene Dickinson" style={imageStyle} onClick={handleArlene} />
                <img src={robertKiyosaki} alt="Robert Kiyosaki" style={imageStyle} onClick={handleKiyosaki} />
                <img src={dalaiLama} alt="Dalai Lama" style={imageStyle} onClick={handleDalai} />
            </div>}
        </>
    )
}

export default RandomSearch;