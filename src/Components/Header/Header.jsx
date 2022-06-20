
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";
// import Button from '../Button'
const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="light"
        variant="dark"
        style={{ backgroundColor: "#320021" }}
      >
        <Container >
          <Navbar.Brand href="/" className="logos" >
            <img
              src="/logo3.jpg"
              alt="logo"
              width="100"
              height="80"
              style={{ borderRadius: "50%",margin:"auto", display: "block" }}
            />
            <h1 className={styles.title}>  Siguiendo la Luna</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <NavDropdown title="Habitaciones" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/double-base">
                  Dobles
                </NavDropdown.Item>
                <NavDropdown.Item href="/triple-base">
                  Triples
                </NavDropdown.Item>
                <NavDropdown.Item href="/quadruple-base">
                  Cuádruples
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/complex" >
                Complejo
              </Nav.Link>
              <Nav.Link href="/recomendations" >
                Recomendaciones
              </Nav.Link>
              <Nav.Link href="/about" >
                Nosotros
              </Nav.Link>
              {/* <Nav.Link href="/contact" >
                Contacto
              </Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link
                href="https://www.instagram.com/slaluna.lucila/"
                target="_blank"
              >
                <i
                  class="fab fa-instagram fa-2x"
                 
                ></i>
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/Posada-de-mar-siguiendo-la-luna-1416900111952653"
                target="_blank"
              >
                <i
                  class="fab fa-facebook fa-2x"
                  
                ></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
