import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "react-bootstrap";
function PortfolioNavbar(props) {
    const aboutScrollHandler = () => {
        props.scrollHandler('about')
    }
    const resumeScrollHandler = () => {
        props.scrollHandler('resume')
    }
    const portfolioScrollHandler = () => {
        props.scrollHandler('portfolio')
    }
    const contactScrollHandler = () => {
        props.scrollHandler('contact')
    }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Ray Cook</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={aboutScrollHandler}>About</Nav.Link>
                    <NavDropdown title="Portfolio" id="navbarScrollingDropdown" onClick={portfolioScrollHandler}>
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
                    <Nav.Link onClick={resumeScrollHandler}>Resume</Nav.Link>
                    <Nav.Link onClick={contactScrollHandler}>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;