import React from 'react';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import './Header.css';

const Header = (props) => {
    const { fixedHeader } = props;
    console.log(fixedHeader)
    return (
        <Navbar expand="lg" className={`custom-header ${fixedHeader ? 'fixedHeader' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={require('../../../assets/images/Logo.png')} className="header-logo" draggable={false} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="m-r">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Service</Nav.Link>
                        <Nav.Link href="#work">Work</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <button className="nav-button">
                            Lets Connect
                        </button>
                        {/* <Nav.Link href="#contact">lets Connect</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

