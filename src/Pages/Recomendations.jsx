import logo from "./assets/logo3.jpg";
import FloatingWhatsApp from "react-floating-whatsapp";
import { Container } from "react-bootstrap";
const Recomendations = () => {
  return (
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: "2.5rem",
          }}
        >
          Recomendaciones
        </h2>
        <p>A continuación te dejamos un mapa interactivo con los lugares que recomendamos no te pierdas en tu visita a La Lucila del Mar</p>
        <iframe
          src="https://www.google.com/maps/d/u/2/embed?mid=1ZkXcaDvb_3PGNdxOQnkeDcUTe334wDc&ehbc=2E312F"
          loading="lazy"
          className="embed-responsive-item rounded"
          height="500px"
          width="100%"
          overflow="visible"
        />
        <FloatingWhatsApp
          phoneNumber="5491156536531"
          accountName="Posada Siguiendo la luna"
          avatar={logo}
          statusMessage=""
          chatMessage="Hola 👋🏽 ¿En que podemos ayudarte?"
          placeholder="Escriba su mensaje"
          darkMode="true"
          allowClickAway="true"
          allowEsc="true"
        />
      </Container>
  );
};

export default Recomendations;
