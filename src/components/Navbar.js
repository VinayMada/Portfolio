import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

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
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => updateExpanded(!expand)}
        >
          <div className={`hamburger-icon ${expand ? "open" : ""}`}></div>
          <div className={`hamburger-icon ${expand ? "open" : ""}`}></div>
          <div className={`hamburger-icon ${expand ? "open" : ""}`}></div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              <ImBlog /> Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              href="https://github.com/VinayMada/Portfolio"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork /> <AiFillStar />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
