import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link} from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="success" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/administrador'>Administrador</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/registrar'>Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
