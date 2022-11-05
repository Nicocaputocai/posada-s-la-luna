import logo from "./assets/logo3.jpg";
import {Helmet} from "react-helmet"
import FloatingWhatsApp from "react-floating-whatsapp";
import { Container } from "react-bootstrap";
const Recomendations = () => {
  return (
    <Container>
                           <Helmet>
      <title>Recomendaciones - Siguendo la Luna</title>
      <meta name="description" content="Recomendaciones turísticas de las cercanías de la Posada de Mar - Siguiendo la Luna"/>
    </Helmet>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Dancing Script",
          fontSize: "2.5rem",
        }}
      >
        Recomendaciones
      </h2>
      <h4 style={{ fontFamily: "Dancing Script" }}>Playa</h4>
      <p>
        A setecientos metros de la posada podemos disfrutar de amplias playas caracterizadas
        por su ambiente familiar, balnearios con todos los servicios y una zona
        de bajada náutica.
      </p>
      <h4 style={{ fontFamily: "Dancing Script" }}>Pinar</h4>
      <p>
        Estamos dentro de un hermoso Pinar ideal para hacer caminatas, runnig y
        descubrir varias especies de aves y animales autóctonos.
      </p>
      <h4 style={{ fontFamily: "Dancing Script" }}>Terminal de Micros</h4>
      <p>
        A ocho cuadras se encuentra nuestra plaza y frente a ella está ubicada
        la terminal de micros que recibe a todas las empresas de transporte que
        recorren todo el corredor atlántico bonaerense.
      </p>
      <h4 style={{ fontFamily: "Dancing Script" }}>Centro comercial</h4>
      <p>
        Estamos ubicados a diez cuadras del centro comercial de La lucila que
        cuenta con supermercados, restaurantes, bares, confiterías y locales
        comerciales de todos los rubros.
      </p>
      <h4 style={{ fontFamily: "Dancing Script" }}>Muelle de pescadores</h4>
      <p>
        A diez cuadras se encuentra el muelle de pescadores para los amantes de
        la pesca . Desde 1954 es uno de los más antiguos con 100 mts de largo y
        su estructura de madera se convierte en un atractivo para visitar.
      </p>
      <h4 style={{ fontFamily: "Dancing Script" }}>
        Alquiler de caballos y bicicletas
      </h4>
      <p>
        Muy cerquita de la posada podés encontrar varios puntos de alquiler de
        caballos donde se puede disfrutar de la experiencia de la experiencia de
        una cabalgata nocturna o de amanecer.
      </p>
      <p>También se pueden encontrar lugares de alquiler de bicicletas.</p>
      <h4 style={{ fontFamily: "Dancing Script" }}>Lugares históricos</h4>
      <p>
        En la zona podés descubrir una construcción antigua que los pobladores
        llaman "el castillo " propiedad de la familia Duhau que en 1934
        construyó una lujosa casa frente al mar.
      </p>
      <p>
        También en la localidad vecina de Costa azul podemos encontrar los
        restos de una embarcación llamada "mar del sur" que en 1924 encalló y
        quedan como testigo los restos calcinados de su caldera que se podrán
        ver en baja mar. El Mar del sur es una de las tantas embarcaciones que
        en esa época quedaron encalladas a lo largo de la
        costa bonaerense.
      </p>
      
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
