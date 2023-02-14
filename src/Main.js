import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import { Navbar, Nav, Container } from 'react-bootstrap';

function mainNavBar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100" id="navbarNav">
                    <ul class="navbar-nav d-flex flex-row w-100 justify-content-between border border-warning">
                        <li class="nav-item col-2">
                            <a class="nav-link" href="#">Main</a>
                        </li>
                        {/* <div class="vr mx-5"></div> */}
                        <li class="nav-item col-8">
                            <form class="d-flex flex-row flex-nowrap m-0 p-0">
                                <input class="form-control col-8" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn col-4 btn-outline-success" type="submit">Search</button>
                            </form>
                            {/* <a class="nav-link" href="#">Search</a> */}
                        </li>
                        {/* <div class="vr mx-5"></div> */}
                        <li class="nav-item col-2">
                            <a class="nav-link" href="#">Random Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default mainNavBar;