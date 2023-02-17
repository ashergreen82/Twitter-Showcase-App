import React from "react";

function randomSearch() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarNav">
                <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                    <li className="nav-item col">
                        <a className="nav-link" href="#">Main</a>
                    </li>
                    {/* <div className="vr mx-5"></div> */}
                    <li className="nav-item col-8">
                        <form className="d-flex flex-row justify-content-evenly m-0 p-0">
                            <input className="form-control w-75" type="search" placeholder="Enter your twitter search here" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <a className="nav-link" href="#">Search</a> */}
                    </li>
                    {/* <div className="vr mx-5"></div> */}
                    <li className="nav-item col">
                        <a className="nav-link" href="#">Random Search</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default randomSearch;