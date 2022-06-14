import { ListGroup } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <footer
        className=" text-white text-center container-fluid"
        color="white"
        style={{backgroundColor:"#320021"}}
      >
        <ListGroup horizontal className="row">
          <ListGroup.Item className="text-center text-white text-center col-lg-6 col-sm-12" style={{backgroundColor:"#320021"}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.838940873883!2d-56.69257108477523!3d-36.65432507636041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6e82214c66c5%3A0x2f40ea8f875d04a9!2sPosada%20De%20Mar%20Siguiendo%20La%20Luna!5e0!3m2!1ses!2sar!4v1654727542463!5m2!1ses!2sar"
              allowfullscreen=""
              loading="lazy"
              className="embed-responsive-item rounded"
            />
          </ListGroup.Item>
          <ListGroup className="ListGroup col-lg-6 col-sm-12">
            <ListGroup.Item className="text-center text-white text-center col-lg-6 col-sm-12" style={{backgroundColor:"#320021"}}>
              <a
                href="https://goo.gl/maps/H5UFCgZAfpBUuGyG8"
                target="__blank"
                className="text-decoration-none"
                color="white"
                textDecoration="inherit"
                style={{ textDecoration: 'none', color:'white'}}
              >
                <i className="fas fa-map-marker-alt"></i> Santa fe 891, La
                Lucila del Mar, Buenos Aires
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="text-center text-white text-center col-lg-6 col-sm-12" style={{backgroundColor:"#320021"}}>
              <a href="https://api.whatsapp.com/send?phone=+5491156536531"
              style={{ textDecoration: 'none', color:'white'}}>
               <i class="fab fa-whatsapp"></i> (+54) 01156536531
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="text-center text-white text-center col-lg-6 col-sm-12" style={{backgroundColor:"#320021"}}>
              <a
                href="mailto:slaluna_lucila@yahoo.com"
                target="__blank"
                style={{ textDecoration: 'none', color:'white'}}
              >
                <i class="fas fa-at"></i> slaluna_lucila@yahoo.com
              </a>
            </ListGroup.Item>

            <ListGroup.Item className="text-center text-white text-center col-lg-6 col-sm-12" style={{backgroundColor:"#320021"}}>
              <a href="https://www.instagram.com/slaluna.lucila/"
              target="_blank"
              style={{ textDecoration: 'none', color:'white'}}>
            <i class="fab fa-instagram fa-2x"></i>
            </a>
            <span>   </span>
            <a href="https://www.facebook.com/Posada-de-mar-siguiendo-la-luna-1416900111952653"
              target="_blank">
            <i class="fab fa-facebook fa-2x"
            style={{ textDecoration: 'none', color:'white'}}></i>
            
            </a>
            </ListGroup.Item>
          </ListGroup>
          
        </ListGroup>

        <div className="text-center text-white" style={{backgroundColor:"#320021"}}>
          <a href="https://api.whatsapp.com/send?phone=+5491153796531" target="_blank"  style={{ textDecoration: 'none', color:'white'}}>
            <span>&copy; 2021 The Division Code   </span>
            <i class="fab fa-whatsapp fa-1x"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
