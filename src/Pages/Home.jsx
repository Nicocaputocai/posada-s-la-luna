import { Carousel, Card,Button,CardGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container">
<br />
      <Carousel>
        <Carousel.Item>
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
        <Carousel.Item>
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
      <br />
      <h2 className="text-center">
        La Posada
      </h2>
      <p className="text-center">
      A principios del Siglo XIX en América Latina surgen de las Posadas turísticas. El concepto “atendido por su propietario” adquiere el más noble significado para quien se hospeda en una posada turística. La atención cálida, espontánea y sincera que recibe un huésped por parte de la familia o pareja encargada de la posada, En ellas se canjea el confort de cinco estrellas por una experiencia de vida. La riqueza natural, cultural, gastronómica y humana en la que se sumerge un huésped en estas acogedoras viviendas donde a cambio de lujo se ofrece la oportunidad de conocer una región, su gente y sus costumbres. Esto es lo que buscamos recibir con sencillez, calidez y mucha predisposición a nuestros huéspedes para que disfruten de unos días de vacaciones en un lugar muy parecido a una casa donde se mezclan los ruidos de la naturaleza con los olores de tortas o comidas caseras y al retirarse se lleve un grato recuerdo de la Lucila del Mar.
        </p>
      <div align="center">
        <iframe
          width="80%"
          height="400px"
          src="https://www.youtube.com/embed/0MkrRH1_MOk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      
      <div>
        <h2 className="text-center">Nuestras Habitaciones</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit soluta veritatis necessitatibus omnis quas assumenda labore earum autem similique incidunt, magni harum natus quasi iste dolorem nemo obcaecati ex! Odit illo voluptas esse? Aut quae quas perferendis rem sint, itaque dicta vitae officia debitis animi amet laborum placeat temporibus, nemo voluptatem. Beatae fugit nisi aspernatur recusandae ratione nostrum officiis dolor officia repellat pariatur? Dolores voluptatum qui, reprehenderit facilis nihil quo corporis aut provident odit excepturi impedit quam sit culpa hic porro eos expedita mollitia obcaecati dolore numquam accusamus quos! Aliquid distinctio, doloremque nostrum dolorum at sint maiores! Enim, maxime.</p>
      <CardGroup>
  <Card>
    <a href="http://localhost:3000/double-base">
    <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
    <Card.Body>
      <Card.Title>Habitaciones Dobles</Card.Title>
    </Card.Body>
    </a>
  </Card>
  <Card>
  <a href="http://localhost:3000/triple-base">
    <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
    <Card.Body>
      <Card.Title>Habitaciones Triples</Card.Title>
    </Card.Body>
    </a>
  </Card>
  <Card>
  <a href="http://localhost:3000/quadruple-base">
    <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
    <Card.Body>
      <Card.Title>Habitaciones Cuádruples</Card.Title>
    </Card.Body>
    </a>
  </Card>
</CardGroup>
        
      </div>
    </div>
  );
};

export default Home;
