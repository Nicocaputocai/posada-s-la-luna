import { Carousel, Container, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";

const Bedrooms4 = () =>{

    return (
        <>
            <> <br />
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
        <h3>Descripción</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut labore corrupti nemo suscipit itaque ratione quam quidem a. Dolor veniam quod repellat. Et, tempora quam magni repudiandae assumenda perspiciatis facilis deleniti, aliquid error rerum qui distinctio velit atque eum ut porro maiores iure quae dicta necessitatibus nostrum id cumque, blanditiis sit. Id, velit aperiam porro odit nemo laboriosam facilis doloribus quam ea voluptas cum? Quas dolore aliquid tempora voluptas! Omnis voluptatibus accusamus tempore laudantium praesentium beatae cumque eaque quae molestiae quas harum incidunt exercitationem nam minima pariatur ipsum, tempora magni esse est dignissimos consectetur. Nisi deserunt architecto assumenda labore blanditiis ut porro id error? Voluptas debitis possimus, eos mollitia quas asperiores ipsum totam voluptatem magni esse autem aperiam tenetur delectus maiores vitae quidem ea qui sint adipisci ab unde porro nulla sed consequatur. Doloribus temporibus expedita veniam inventore suscipit perferendis error quis aliquam voluptates repudiandae, numquam nemo dolor saepe quo hic accusamus ab, quasi odio. Cupiditate fuga delectus, nulla dicta suscipit odio, recusandae, beatae maxime aspernatur sapiente ab quidem voluptate reprehenderit itaque ex voluptatibus exercitationem ratione ipsum aliquam minus. Nam sunt tempore incidunt eaque asperiores facilis ducimus itaque nemo, tenetur aliquid qui? Voluptatum nihil commodi doloribus illo cumque nulla accusamus.
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
    </>
        
        </>
    );
};

export default Bedrooms4