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


    <div className="section section-plain-cards"
    style={{
      backgroundImage: "url(" + require("assets/img/777.jpg") + ")",
    }}
          >
<Container>


  <Container>

    <div className="title">


        <center> <h3>

      <i className="category text-black">Family owned and operated for 15 years...</i>
    <br/><br/><br/><br/>
      </h3></center>
    </div></Container>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
  <a href="/Pavement">
                  <img
                    alt="..."
                    className="img rounded img-raised"
                    src={require("assets/img/card-blog2.jpg")}
                  ></img></a>
                <CardBody>
                  <h6 className="category text-warning">
                    <i className="now-ui-icons design_palette"></i> Pavers
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/Pavement">
                      Only the highest quality work.
                    </a>
                  </CardTitle>
                  <p className="card-description text-warning">
                    We have been in this industry for decades and guarantee quality work.
                  </p>
                  <CardFooter>
                  <center> <Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote
                    </Button></center>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="/Paint">
                    <img

                      alt="..."
                      className="img rounded img-raised"
                      src={require("assets/img/project13.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="category text-info"><i className="now-ui-icons design_app">  </i> Painting </h6>
                  <CardTitle tag="h5">
                    <a href="/Paint">
                      We only utilize premium materials.
                    </a>
                  </CardTitle>
                  <p className="card-description text-info">
                  We can fulfill your commercial and residential painting needs...
                  </p>
                  <CardFooter><center>
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: .70 }}
                    ><Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote
                    </Button></motion.div></center>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">

                  <a href="/PressureWashing">
                    <img
                      alt="..."
                      className="img img-raised rounded"
                      src={require("assets/img/examples/card-blog6.jpg")}
                    ></img>
                  </a>
                <CardBody className="text-center">
                  <h6 className="category text-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i> Pressure Washing
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/PressureWashing">
                      Quality is our only standard.
                    </a>
                  </CardTitle>
                  <p className="card-description text-danger">
                  We will get your pressure washing needs taken care of quickly, reliably, and with the highest level of care.
                  </p>
                  <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: .70 }}
                    >  <Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote.
                    </Button></motion.div>
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
