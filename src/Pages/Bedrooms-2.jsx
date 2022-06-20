import {
  Carousel,
  Container,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
const Bedrooms2 = () => {
  return (
    <>
      {" "}
      <br />
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./img/Foto-Posada.jpg"
              alt="First slide"
              height={450}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="./img/Foto-Posada.jpg"
              alt="First slide"
              height={450}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/Foto-Posada.jpg"
              alt="First slide"
              height={450}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p>
          Habitaciones para 2 personas Nuestras habitaciones para 2 personas
          cuentan con baño privado, heladera, pava eléctrica, utensilios de
          cocina, tv satelital y ventilador de techo.
        </p>
        <p>Pueden ser con cama matrimonial o camas individuales.</p>
        <CardGroup className="text-center">
          <Card border="white">
            <i class="fas fa-concierge-bell fa-2x"></i>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush" style={{ textDecoration: "none" }}>
                  <ListGroupItem>Wi-fi</ListGroupItem>
                  <ListGroupItem>Desayuno seco</ListGroupItem>
                  <ListGroupItem>Meriendas y minutas</ListGroupItem>
                  <ListGroupItem>Limpieza y ropa blanca</ListGroupItem>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <i class="fas fa-bed fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
                <ListGroup variant="flush" style={{ textDecoration: "none" }}>
                  <ListGroupItem>Pava eléctrica</ListGroupItem>
                  <ListGroupItem>Heladera</ListGroupItem>
                  <ListGroupItem>Utencillos de cocina</ListGroupItem>
                  <ListGroupItem>Tv satelital</ListGroupItem>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <i class="fas fa-tree fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
                <ListGroup variant="flush" style={{ textDecoration: "none" }}>
                  <ListGroupItem>Parque</ListGroupItem>
                  <ListGroupItem>Piscina</ListGroupItem>
                  <ListGroupItem>Parrilla</ListGroupItem>
                  <ListGroupItem>Juegos de plaza</ListGroupItem>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <i class="fas fa-users fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
                <ListGroup variant="flush" style={{ textDecoration: "none" }}>
                  <ListGroupItem>Sala de estar</ListGroupItem>
                  <ListGroupItem>Microondas</ListGroupItem>
                  <ListGroupItem>Cocina de uso común</ListGroupItem>
                  <ListGroupItem>Biblioteca y juegos de mesa</ListGroupItem>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <FloatingWhatsApp 
        phoneNumber="5491156536531"
        accountName="Posada Siguiendo la luna"
        avatar={logo}
        statusMessage=""
        chatMessage="Hola 👋🏽 ¿En que podemos ayudarte?"
        placeholder="Escriba su mensaje"
        darkMode="true"
        allowClickAway="true"
        allowEsc= "true"
        />
      </Container>
    </>
  );
};

export default Bedrooms2;
