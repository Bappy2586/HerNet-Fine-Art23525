import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa"; 
import logo from "./assets/logo-dev.png";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <img src={logo} alt="Logo" width="140" height="40" className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/artis" className="fw-semibold">
              Artists
            </Nav.Link>
            <Nav.Link as={Link} to="/artEvent" className="fw-semibold">
              Art Events
            </Nav.Link>
            <Nav.Link as={Link} to="/artMarket" className="fw-semibold">
              Art Market
            </Nav.Link>
            <Nav.Link as={Link} to="/artHistory" className="fw-semibold">
              Art History
            </Nav.Link>
            <Nav.Link as={Link} to="/artOrg" className="fw-semibold">
              Art Org
            </Nav.Link>
            <Nav.Link as={Link} to="/editorial" className="fw-semibold">
              Editorial
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="fw-semibold">
              Gallery
            </Nav.Link>
            
            <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/artistProfile">Artist Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/preOwnedArts">Pre Owned Arts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/buy">Buy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/training">Training</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/support">Support</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/login" className="fw-semibold">
              Login
            </Nav.Link>
           
          </Nav>
          {/* Right-Side Links */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link  className="fw-semibold">
            <FormControl type="search" placeholder="Search" style={{ padding: "2px" }} />
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs" className="fw-semibold">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" className="fw-semibold">
              Contact
            </Nav.Link>
            <NavDropdown title={<FaUserCircle size={28} />} id="user-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
