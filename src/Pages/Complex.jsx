import { Container, Image, Card, CardGroup } from "react-bootstrap";
import styles from "./Complex.module.css";
const Complex = () => {
  return (
    <>
      <br />
      <Container>
        <CardGroup className="complexGrip">
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/1.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/2.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/10.jpeg"
            />
          </Card>
        </CardGroup>
        <CardGroup className="complexGrip">
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/11.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/12.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              style={{ width: "100%", height: "40vh" }}
              className="complexImage"
              variant="top"
              src="./img/complex/13.jpeg"
            />
          </Card>
        </CardGroup>
        <p className=''>
        Nuestra sala de estar sirve las veces de recepción y comunicador entre las habataciones y el complejo. Es uno de nuestros espacios comunes y cuenta con espacios de trabajo, televisión, mesas, sillones, biblioteca y juegos de mesa.
        </p>
        <p className=''>
        Rodeado de árboles frutales disfruten, plantas y flores, el parque es otro de los espacio más elegido huéspedes. Cuenta con una piscina de medianas dimensiones, multijuegos, mesas y sillas de jardín, zona de parrillas con una cocina equipada con sus elementos básicos para ser utilizados en común con los huéspedes de la posada.     
        </p>   
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
