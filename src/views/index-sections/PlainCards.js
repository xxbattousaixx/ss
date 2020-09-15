import React from "react";

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
      <div className="section section-plain-cards">
        <Container>
          <div className="title">
            <h3>SOLAFIDE SERVICES</h3>
            <h3>
              <small>Service Offered</small>
            </h3>
          </div>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <img
                    alt="..."
                    className="img rounded img-raised"
                    src={require("assets/img/project13.jpg")}
                  ></img>
                </div>
                <CardBody>
                  <h6 className="category text-warning">
                    <i className="now-ui-icons business_bulb-63"></i> Painting
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/contact-us">
                      Premium products and premium painters.
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    We can fulfill your commercial and residential painting needs...
                  </p>
                  <CardFooter>
                    <Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="/contact-us">
                    <img
                      alt="..."
                      className="img rounded img-raised"
                      src={require("assets/img/card-blog2.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="category text-info">Pavement</h6>
                  <CardTitle tag="h5">
                    <a href="/contact-us">
                      Only the highest quality work.
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    We have been in this industry for decades and guarantee quality work.
                  </p>
                  <CardFooter>
                    <Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="/contact-us">
                    <img
                      alt="..."
                      className="img img-raised rounded"
                      src={require("assets/img/examples/card-blog6.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody className="text-center">
                  <h6 className="category text-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i> Pressure Washing
                  </h6>
                  <CardTitle tag="h5">
                    <a href="/contact-us">
                      Perfection is our only standard.
                    </a>
                  </CardTitle>
                  <p className="card-description">
                  We will get your pressure washing needs taken care of quickly, reliably, and with the highest level of care.
                  </p>
                  <CardFooter>
                    <Button
                    color="info"
                      href="/contact-us"
                    >
                      Request a quote.
                    </Button>
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
