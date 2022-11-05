import { Carousel, Card, Button, CardGroup } from "react-bootstrap";
import {Helmet} from "react-helmet"
import styles from "./Home.module.css";
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
const Home = () => {
  return (
    <div className="container">
                           <Helmet>
      <title>Home - Siguendo la Luna</title>
      <meta name="description" content="Página principal de la Posada de Mar Siguiendo la Luna"/>
    </Helmet>
      <br />
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Frente.jpeg"
            alt="Frente"
            height={450}
            
          />
          <Carousel.Caption>
            <h3> Veni a vivir la experiencia Siguiendo la Luna </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/parque.jpeg"
            alt="Parque"
            height={450}
          />

          <Carousel.Caption>
            <h3 color="black"> Veni a vivir la experiencia Siguiendo la Luna </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/amanecer muelle.jpg"
            alt="Desayuno"
            height={450}
          />

          <Carousel.Caption>
            <h3> Veni a vivir la experiencia Siguiendo la Luna </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h2 className={styles.h2}  >La Posada</h2>
      <p className="text-center">
        Situada en el barrio residencial El Pinar de La lucila del Mar podrás
        disfrutar de caminatas por el bosque acompañado del canto de pájaros
        hasta llegar a nuestras amplias playas que conservan sus tradicionales
        postales familiares.
      </p>
      <p className="text-center">
        Nuestro proyecto tuvo como principal objetivo hacer sentir a nuestros
        huéspedes como en su propia casa atendiendo con calidez y estando
        presente las 24 horas lo que nos permitió a lo largo de los años
        nutrirnos de diversas culturas y experiencias de nuestros huéspedes. Es
        difícil de explicar en palabras , no quisimos ser un hotel ni un hostel
        tampoco un complejo de departamentos o un apart, desde 2012 quisimos ser
        Posada de mar Siguiendo la luna.
      </p>
      <p className="text-center">Vení a descubrirnos.</p>
      <div align="center">
        <iframe
          width="80%"
          height="400px"
          src="https://www.youtube.com/embed/VQu0ZOGU-t0?autoplay=1&mute=1"
          title="YouTube video player"
          playing={true}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />

      <div>
        
        <p>
        Nuestro Complejo está pensado como una gran casa familiar donde nuestros huéspedes podrán tener independencia con habitaciones equipadas como pequeños monoambientes, espacios comunes y en su exterior podrán disfrutar de un entorno natural inmejorable para compartir momentos de relax y relacionarse con nosotros y otros visitantes alojados en la posada .
        </p>
        <h2 className={styles.h2}>Nuestras Habitaciones</h2>
        <CardGroup>
          <Card>
            <a href="/base-doble" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/Habitacion-2p.JPG" />
              <Card.Body>
                <Card.Title>Habitaciones Dobles</Card.Title>
              </Card.Body>
            </a>
          </Card>
          <Card>
            <a href="/base-triple" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/hab-3/2.JPG" />
              <Card.Body>
                <Card.Title>Habitaciones Triples</Card.Title>
              </Card.Body>
            </a>
          </Card>
          <Card>
            <a href="/base-cuadruple" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/Habitacion-4p.JPG" />
              <Card.Body>
                <Card.Title>Habitaciones Cuádruples</Card.Title>
              </Card.Body>
            </a>
          </Card>
        </CardGroup>
      </div>
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
    </div>
  );
};

export default Home;
