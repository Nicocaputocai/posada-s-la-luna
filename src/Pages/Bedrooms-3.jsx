import {Container, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import {Helmet} from "react-helmet"
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const Bedrooms3 = () =>{
  const images = ["1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG"].map((number) => ({
    src: `/img/hab-3/${number}`
  }));
    return (
        <>
                     <Helmet>
                     <title>Habitaciones Triples - Siguendo la Luna</title>
      <meta name="description" content="Habitaciones Triples - Siguiendo la Luna"/>
    </Helmet>
      <Container></Container>
           <> <br />
      <Container>
      <Carousel objectFit="scale-down" isAutoPlaying="true" images={images} style={{ height: 600, width: "auto" }} />
        <p>
        Nuestras habitaciones para 3 personas cuentan con baño privado, heladera, pava eléctrica, utensilios de cocina, tv satelital y ventilador de techo. 
        </p>
        <p>
        Pueden ser con cama matrimonial más una cama individual o tres camas individuales. 
Están distribuidas cuatro habitaciones en planta alta y dos habitaciones en planta alta. 

        </p>
        <CardGroup className="text-center">
          <Card border="white" >
          <i class="fas fa-concierge-bell fa-2x"></i>
            <Card.Body>
              <Card.Text>
              <ListGroup variant="flush"style={{ textDecoration: 'none'}}>
                    <ListGroupItem>
                        Wi-fi
                    </ListGroupItem>
                    <ListGroupItem>
                        Desayuno seco
                    </ListGroupItem>
                    <ListGroupItem>
                        Limpieza
                    </ListGroupItem>
                    <ListGroupItem>
                      Ropa blanca
                      </ListGroupItem>
                    </ListGroup>  
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
          <i class="fas fa-bed fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
              <ListGroup variant="flush"style={{ textDecoration: 'none'}}>
                    <ListGroupItem>
                       Pava eléctrica
                    </ListGroupItem>
                    <ListGroupItem>
                        Heladera
                    </ListGroupItem>
                    <ListGroupItem>
                        Utencillos de cocina
                    </ListGroupItem>
                    <ListGroupItem>
                      Tv satelital
                      </ListGroupItem>
                    </ListGroup>  
                </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
          <i class="fas fa-tree fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
              <ListGroup variant="flush"style={{ textDecoration: 'none'}}>
                    <ListGroupItem>
                        Parque
                    </ListGroupItem>
                    <ListGroupItem>
                        Piscina
                    </ListGroupItem>
                    <ListGroupItem>
                        Parrilla
                    </ListGroupItem>
                    <ListGroupItem>
                      Juegos de plaza
                      </ListGroupItem>
                    </ListGroup>  
                </Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
          <i class="fas fa-users fa-2x"></i>
            <Card.Body>
              <Card.Text className="">
              <ListGroup variant="flush"style={{ textDecoration: 'none'}}>
                    <ListGroupItem>
                        Sala de estar
                    </ListGroupItem>
                    <ListGroupItem>
                      Microondas
                      </ListGroupItem>
                    <ListGroupItem>
                        Cocina de uso común
                    </ListGroupItem>
                    <ListGroupItem>
                        Biblioteca y juegos de mesa
                    </ListGroupItem>

                    </ListGroup>  
                </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
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
    </>
        
        </>
    );
};

export default Bedrooms3