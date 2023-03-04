import React from 'react';
import { Link } from "react-router-dom";

function NavBar({ data, setData, searchValue, setSearchValue, isSearching, setIsSearching, isLoading, setIsLoading, setNoTweetsFound, noTweetsFound }) {

    function handleSearchInputChange(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
    }

    function handleSearchButtonClick(event) {
        event.preventDefault();
        setIsSearching(true);
        setIsLoading(true);
        fetch('/api/search', {
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
                setData(data);
                if (data.length === 0) {
                    setNoTweetsFound(true);
                }
            })
            .catch(error => {
                console.error(error);
            });

        setIsLoading(false);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#"></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                        <li className="nav-item col">
                            <Link
                                className="nav-link"
                                to="/"
                                reloadDocument={true}>
                                Main
                            </Link>
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
                            {/* <Link className="nav-link" to="/Randomsearch">Random Search</Link> */}
                            <Link
                                className="nav-link"
                                to="/Randomsearch"
                                reloadDocument={true}>
                                Random Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar