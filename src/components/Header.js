import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import './Style.css';

function Header() {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/proiect-practica">MARVEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/#/series">Series</Nav.Link>
            <Nav.Link href="/#/movies">Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
