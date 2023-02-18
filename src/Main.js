import React from 'react';
import Randomsearch from "./Randomsearch";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import mainPicture from "./images/Inspired_motivational_Quotes-Small.png";
// import axios from 'axios';

// import { Navbar, Nav, Container } from 'react-bootstrap';

function MainNavBar() {

    const [searchValue, setSearchValue] = useState("");

    function handleSearchInputChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSearchButtonClick() {
        console.log("Search button clicked with search value:", searchValue);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                        <li className="nav-item col">
                            <Link className="nav-link" to="/">Main</Link>
                        </li>
                        {/* <div className="vr mx-5"></div> */}
                        <li className="nav-item col-8">
                            <form className="d-flex flex-row justify-content-evenly m-0 p-0">
                                <input className="form-control w-75" type="search" placeholder="Enter your twitter search here" aria-label="Search" value={searchValue} onChange={handleSearchInputChange} />
                                <button className="btn btn-outline-success" type="submit" onClick={handleSearchButtonClick}>Search</button>
                            </form>
                            {/* <a className="nav-link" href="#">Search</a> */}
                        </li>
                        {/* <div className="vr mx-5"></div> */}
                        <li className="nav-item col">
                            <Link className="nav-link" to="/Randomsearch">Random Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main_header text-center">
                <h1 className="h2">WELCOME TO</h1>
                <h1 className="h1">THE SHOWCASE TWITTER APP</h1>
            </div>
            <p className="body_text text-justify">Just enter your search in the search bar above and we will search the last 7 days on twitter for you.  We also offer a random search as well, so feel free to give that shot.</p>
            {/* {showRandomSearch && <Randomsearch />} */}
            <img src={mainPicture} alt="Logo" className="w-10" />
        </>

    );
}

export default MainNavBar;