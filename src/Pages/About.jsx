import { Container, Card, Row, Col } from "react-bootstrap";
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/logo3.jpg"
const About = () => {
  return (
    <>
      <Container>
        <br />
        <Card>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Dancing Script",
              fontSize: "2.5rem",
            }}
          >
            Nosotros
          </h2>
          <Row>
            <Col md={6}>
              <br />
              <br />
              <Card.Img variant="bottom" src="./img/Nosotros.jpg" style={{}} />
              <Card.Text style={{ paddingLeft: "5px" }}>
                Nuestra posada es un lugar armonioso donde nuestros huéspedes
                por algunos días se olvidan de la vida acelerada que llevan
                durante el año laboral y disfrutar de la paz del entorno y de
                ser atendido con calidez.
              </Card.Text>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Misión</Card.Title>
                <Card.Text>
                  Cuidar a nuestros huéspedes como familiares, disfrutando de la
                  magia de la posada y descubran a nuestra Lucila del mar para
                  adoptarla como propia.
                </Card.Text>
                <Card.Title>Visión</Card.Title>
                <Card.Text>
                  Cuidar nuestro planeta y fomentar acciones colectivas en favor
                  de una sociedad mejor. Es por eso que año tras año vamos
                  sumando conductas separando residuos y colaborar con el
                  reciclaje como así también insistir con el cuidado del agua y
                  el ahorro de energía.
                </Card.Text>
                <Card.Title>Valores</Card.Title>
                <Card.Text>
                  <ul style={{ listStyle: "none", padding: "0" }}>
                    <li>
                      Calidez, cercanía y predisposición para cuando lo
                      necesites.
                    </li>
                    <br />
                    <li>
                      Solidaridad: buscamos el bienestar colectivo ante el
                      privilegio individual.
                    </li>
                    <br />
                    <li>
                      Confianza: nuestros colaboradores tienen nuestra confianza
                      y ellos la transmiten a nuestros huéspedes.
                    </li>
                    <br />
                    <li>
                      Originalidad: seguir adelante con nuestra propuesta
                      estando convencidos de que nos diferenciamos del resto de
                      las opciones de hospedaje.
                    </li>
                    <br />
                    <li>
                      Humanidad: transmitirconfianza, sentimientos y
                      personalidad para empatizar con nuestros visitantes,
                      hacerlos sentir cuidados y contenidos en lo cotidiano de
                      sus vacaciones.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
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

export default About;
