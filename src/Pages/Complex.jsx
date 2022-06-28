import { Container, Image, Card, CardGroup } from "react-bootstrap";
import styles from "./Complex.module.css";
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const Complex = () => {
  const images = ["1.jpg","2.jpg","10.jpeg","11.jpg","12.JPG","13.jpeg","14.jpeg","15.jpeg","16.jpg","17.jpeg"].map((number) => ({
    src: `/img/complex/${number}`
  }));
  return (
    <>
      <br />
      <Container>
      <Carousel objectFit="scale-down" isAutoPlaying="true" images={images} style={{ height: 500, width: "auto" }} />
      <br />
        <p className=''>
        Nuestra sala de estar sirve las veces de recepción y comunicador entre las habataciones y el complejo. Es uno de nuestros espacios comunes y cuenta con espacios de trabajo, televisión, mesas, sillones, biblioteca y juegos de mesa.
        </p>
        <p className=''>
        Rodeado de árboles frutales disfruten, plantas y flores, el parque es otro de los espacio más elegido huéspedes. Cuenta con una piscina de medianas dimensiones, multijuegos, mesas y sillas de jardín, zona de parrillas con una cocina equipada con sus elementos básicos para ser utilizados en común con los huéspedes de la posada.     
        </p>   
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
      {/* <Container>
            <h2 className={styles.title}>Espacios comunes</h2>
            
        <Image 
        src="./img/DSC05235.jpg"
        width="100%"
        height="600vh"
        alt='Foto sala de estar'
        >
        </Image>
        <p className=''>
        Nuestra sala de estar sirve las veces de recepción y comunicador entre las habataciones y el complejo. Es uno de nuestros espacios comunes y cuenta con espacios de trabajo, televisión, mesas, sillones, biblioteca y juegos de mesa.
        </p>    
        <Image 
        src="./img/parque.jpeg"
        width="100%"
        height="600vh"
        alt='Foto parque'
        >
        </Image>
        <p className=''>
        Rodeado de árboles frutales disfruten, plantas y flores, el parque es otro de los espacio más elegido huéspedes. Cuenta con una piscina de medianas dimensiones, multijuegos, mesas y sillas de jardín, zona de parrillas con una cocina equipada con sus elementos básicos para ser utilizados en común con los huéspedes de la posada.     
        </p>    
        </Container> */}
    </>
  );
};

export default Complex;
