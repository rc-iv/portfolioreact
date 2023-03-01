import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function PortfolioNavbar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Ray Cook</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                        <NavDropdown.Item
                            href="https://www.floor20.io"
                            target="_blank"
                        >Floor20.io</NavDropdown.Item>
                        <NavDropdown.Item
                            href="https://www.fakestats.io"
                            target="_blank"
                        >FakeStats.io</NavDropdown.Item>
                        <NavDropdown.Item
                            href="https://rciv-web3-blog.herokuapp.com/"
                            target="_blank"
                        >NFT Ecosystem Blog</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;