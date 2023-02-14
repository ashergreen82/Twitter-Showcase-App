import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

import { Navbar, Nav, Container } from 'react-bootstrap';

function mainNavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Twitter Showcase App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Search</Nav.Link>
                        <Nav.Link href="#link">Random Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default mainNavBar;