import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const Nav_bar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/create">Create User</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/list">User List</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/products/add">Add Products</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/products">Products List</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/login">Logout</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav_bar;
