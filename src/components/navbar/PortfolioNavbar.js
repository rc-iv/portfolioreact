import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./PortfolioNavbar.module.css";

function PortfolioNavbar(props) {
    const homeScrollHandler = () => {
        props.scrollHandler('home')
    };
    const resumeScrollHandler = () => {
        props.scrollHandler('resume')
    };
    const portfolioScrollHandler = () => {
        props.scrollHandler('portfolio')
    };
    const contactScrollHandler = () => {
        props.scrollHandler('contact')
    };

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand onClick={homeScrollHandler} className={style.name}>Ray Cook</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Portfolio" id="navbarScrollingDropdown" onClick={portfolioScrollHandler}>
                    <NavDropdown.Item
                            href="https://rmndrbot.com/"
                            target="_blank"
                        >RMNDR Discord Bot</NavDropdown.Item>
                        <NavDropdown.Item
                            href="https://abyssalinfinity.com/"
                            target="_blank"
                        >Abyssal Infinity</NavDropdown.Item><NavDropdown.Item
                            href="https://ezthanks.cards"
                            target="_blank"
                        >ezthanks.cards</NavDropdown.Item>
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