import React, { useState } from 'react';
import "../../bootstrap.min.css"
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

import "./Nav.css"

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
      };

    return (
        <BootstrapNavbar bg="light" expand="md" expanded={expanded}>
          <Container>
            <BootstrapNavbar.Brand href="#home">Your Logo</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbar" onClick={handleToggle} />
            <BootstrapNavbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      );
    
}

export default NavBar