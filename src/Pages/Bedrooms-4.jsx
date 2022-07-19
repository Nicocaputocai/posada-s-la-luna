import {

  Container,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const Bedrooms4 = () => {
  const images = ["1.JPG","2.JPG","3.jpeg","4.jpeg","5.jpeg","6.JPG","7.jpeg","8.jpeg","9.jpeg","10.JPG","11.JPG","12.JPG"].map((number) => ({
    src: `/img/hab-4/${number}`
  }));
  return (
        <Container>
          <Carousel objectFit="scale-down" isAutoPlaying="true" images={images} style={{ height: 600, width: "auto" }} />

          <br />

          <h3>Descripción</h3>
          <p>
            Contamos con dos habitaciones en planta baja con cama matrimonial
            mas dos camas tipo nido y cuatro en planta alta con cama matrimonial
            mas dos camas tipo cucheta ,algunas poseen balcón tipo deck o
            terrazas con mesas y sillas para disfrutar de los desayunos o
            meriendas al aire libre.
          </p>
          <CardGroup className="text-center">
            <Card border="white">
              <i class="fas fa-concierge-bell fa-2x"></i>
              <Card.Body>
                <Card.Text>
                  <ListGroup variant="flush" style={{ textDecoration: "none" }}>
                    <ListGroupItem>Wi-fi</ListGroupItem>
                    <ListGroupItem>Desayuno seco</ListGroupItem>
                    <ListGroupItem>Limpieza</ListGroupItem>
                    <ListGroupItem>Ropa blanca</ListGroupItem>
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
  );
};

export default Bedrooms4;
