import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo di kiri */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/img/logo.png"
            alt="Logo"
            width="80" // Sesuaikan ukuran sesuai kebutuhan
            height="auto"
          />
        </Navbar.Brand>

        {/* Toggle Button untuk Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu di kanan */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/politik">Politik</Nav.Link>
            <Nav.Link as={Link} to="/hukum">Hukum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
