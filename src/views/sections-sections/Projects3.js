/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Projects3() {
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="cd-section" id="projects">

        <div className="projects-4" data-background-color="gray">
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h6 className="category text-muted">Pressure Washing</h6>
                <h4 className="title">We proudly serve the Tampa Bay Area pressure washing needs.</h4>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project14.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/contact-us" >
                          Get a quote now.
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons objects_globe"></i>
                          Commercial
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <a href="/contact-us" >
                        <h4>
                          Commercial Projects
                        </h4>
                      </a>
                    </CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons education_paper"></i>
Excellence is our priority.
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pressure.jpg") + ")",
                    }}
                  ></Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pressure2.jpg") + ")",
                    }}
                  ></Card>
                  <Card className="card-fashion arrow-left">
                    <CardTitle tag="div">
                      <h4>
                        <a href="/contact-us" >
                          Get a quote now.
                        </a>
                      </h4>
                    </CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons design_app"></i>
                            Residential
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/pressure1.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/contact-us" >
                          Residential projects
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          Quality is our standard.
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </>
  );
}

export default Projects3;
