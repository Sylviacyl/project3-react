import React from 'react'
import {  Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router'

function NavbarInstance () {
return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Eleete Consulting</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

        <NavItem eventKey={1} >
          <Link to="/"> Home </Link>
        </NavItem>

        <NavItem eventKey={2} >
          <Link to="/about">About </Link>
        </NavItem>

        <NavItem eventKey={3} >
          <Link to="/contact">Contact </Link>
        </NavItem>

        <NavItem eventKey={4} >
          <Link to="/jobseeker">Job Seeker </Link>
        </NavItem>

        <NavItem eventKey={5} >
          <Link to="/recruitment">Recruitment </Link>
        </NavItem>

        <NavItem eventKey={6} >
          <Link to="/careerservices">Career Services </Link>
        </NavItem>

        <NavItem eventKey={7} >
        <Link to="/jobdetails">Job Details </Link>
        </NavItem>


      </Nav>

    </Navbar.Collapse>
  </Navbar>
);
}

export default NavbarInstance
