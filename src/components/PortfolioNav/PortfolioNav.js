import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function PortfolioNav() {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Spencer Creer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#web-development">Web Development</Nav.Link>
          <Nav.Link href="#engineering">Engineering</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}