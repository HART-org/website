import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from 'react-bootstrap';

import { FaHandHoldingHeart, FaDog, FaHome, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

import logo from "/src/assets/logo_small.png";

function MyNavbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
        updateNavbar(true);
        } else {
        updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
        >
            <Navbar.Brand href="/" className="d-flex">
                <img src={logo} className="img-logo" alt="brand" />
            </Navbar.Brand>
            <Button href='https://www.facebook.com/homelessangelsrescueteam' target='_blank' style={{ marginRight:'10px', marginLeft:'10px'}} className="social-btn">
                <FaFacebookSquare size={30} style={{ verticalAlign: "middle", marginBottom: '5px' }} />
            </Button>
            <button className="social-btn">
                <FaEnvelope size={30} style={{ verticalAlign: "middle", marginBottom: '5px' }} />
            </button>
            
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    updateExpanded(!expand);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                            <FaHome size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> Home
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                            <FaDog size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> About
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/help" onClick={() => updateExpanded(false)}>
                            <FaHandHoldingHeart size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> How to Help
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar