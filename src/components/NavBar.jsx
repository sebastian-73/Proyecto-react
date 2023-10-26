import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWIdget";

export const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SERVICIOS PARA BODEGAS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">MAQUINAS</Nav.Link>
            <Nav.Link href="#features">REPUESTOS</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
          </Nav> <CartWidget />
        </Container>
      </Navbar>
    );
};
