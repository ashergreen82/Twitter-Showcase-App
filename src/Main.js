import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import { Navbar, Nav, Container } from 'react-bootstrap';

function mainNavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row w-100 justify-content-between border border-warning">
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#">Main</a>
                        </li>
                        {/* <div className="vr mx-5"></div> */}
                        <li className="nav-item col-8">
                            <form className="d-flex flex-row flex-nowrap m-0 p-0">
                                <input className="form-control col-8" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn col-4 btn-outline-success" type="submit">Search</button>
                            </form>
                            {/* <a className="nav-link" href="#">Search</a> */}
                        </li>
                        {/* <div className="vr mx-5"></div> */}
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#">Random Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main_header text-center">
                <h1 className="h2">WELCOME TO</h1>
                <h1 className="h1">THE SHOWCASE TWITTER APP</h1>
            </div>
        </>

    )
}

export default mainNavBar;