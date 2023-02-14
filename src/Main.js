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
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Main</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Random Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default mainNavBar;