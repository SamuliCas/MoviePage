import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Container } from 'react-bootstrap';

const MyNavbar = ({ loggedInUser }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {loggedInUser ? (
            <Nav>
              <Nav.Item>
                <Nav.Link disabled>{loggedInUser}</Nav.Link>
              </Nav.Item>
            </Nav>
          ) : (
            <Form inline={true.toString()}>
              {/* Your login form goes here */}
              {/* ... */}
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
