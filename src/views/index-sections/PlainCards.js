import React from "react";
import { motion } from "framer-motion";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PlainCards() {
  return (
    <>
      <div
        className="section section-plain-cards"
        style={{
          backgroundImage: "url(" + require("assets/img/777.jpg") + ")",
        }}
      >
        <Container>
          <Container>
            <div className="title">
              <center>
                {" "}
                <h3>
                  <i className="category text-black">
                    Family owned and operated for 15 years...
                  </i>
                  <br />
                  <br />
                  <br />
                  <br />
                </h3>
              </center>
            </div>
          </Container>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <a href="/Pavement">
                  <img
                    alt="..."
                    className="img rounded img-raised"
                    src={require("assets/img/imm.jpg")}
                  ></img>
                </a>
                <CardBody>
                  <h6 className="category text-warning">
                    <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                    Immigration
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/Pavement">Inmigracion.</a>
                  </CardTitle>
                  <p className="card-description text-black">
                    We ensure your paperwork is done correctly and you are well
                    prepared for your interviews.
                    <br />
                    <br />
                    Aseguramos que sus documentos esten en regla y que usted
                    este preparado para su entrevista.
                  </p>
                  <CardFooter>
                    <center>
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.7 }}
                      >
                        <Button color="info" href="/contact-us">
                          Book Online
                        </Button>
                      </motion.div>
                    </center>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="/AboutUs">
                    <img
                      alt="..."
                      className="img rounded img-raised"
                      src={require("assets/img/fm.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="category text-info">
                    <i className="now-ui-icons design_app"> </i> Florida
                    Marriage{" "}
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/AboutUs">Matrimonios en Florida.</a>
                  </CardTitle>
                  <p className="card-description text-black">
                    We provide document translation services as well as
                    interpreter services.
                    <br />
                    <br />
                    Servicios de traduccion de documentos e interpretacion.
                  </p>
                  <CardFooter>
                    <center>
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.7 }}
                      >
                        <Button color="info" href="/contact-us">
                          Book Online
                        </Button>
                      </motion.div>
                    </center>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <a href="/AboutUs">
                  <img
                    alt="..."
                    className="img img-raised rounded"
                    src={require("assets/img/cs.jpg")}
                  ></img>
                </a>
                <CardBody className="text-center">
                  <h6 className="category text-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i> Child
                    Support & Divorce
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/PressureWashing">Divorcios</a>
                  </CardTitle>
                  <p className="card-description text-black">
                    Take care of everything correctly so you don't have to do it
                    twice.
                    <br />
                    <br />
                    Nos encargamos de todo para que no tengas que repetir el
                    proceso.
                  </p>
                  <CardFooter>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.7 }}
                    >
                      {" "}
                      <Button color="info" href="/contact-us">
                        Book Online.
                      </Button>
                    </motion.div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PlainCards;
