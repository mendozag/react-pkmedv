import React from "react";
import { Navbar, Nav, NavDropdown, Row } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar id="basic-navbar-nav p-0">
        <Nav>
          <Nav.Link className="signOut" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="signOut" href="/people">
            Users
          </Nav.Link>
          <Nav.Link className="signOut" href="/about">
            AboutUs
          </Nav.Link>
          <Nav.Link className="signOut" href="/counter">
            Counter
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default NavbarComponent;
