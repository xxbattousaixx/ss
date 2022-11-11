// reactstrap components
import React from "react";

import { Button, Container, Row, Col } from "reactstrap";
import Slide from "react-reveal/Slide";
// core components
import LightSpeed from "react-reveal/LightSpeed";
import RubberBand from "react-reveal/RubberBand";
import Wobble from "react-reveal/Wobble";
function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col md="5">
              <LightSpeed left>
                {" "}
                <h1 className="title">Solafide Services</h1>
              </LightSpeed>
              We are Document Preparers for individuals who need help filling
              out their tax, court, immigration or various paperwork! <br />
              <br />
              <br />
              Somos Preparadores de Documentos para aquellos que necesitan ayuda
              para llenar sus formas de impuestos, la corte, inmigracion y
              muchos mas! <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Slide right>
                <div style={{ border: "solid white 2px", textAlign: "center" }}>
                  <br />
                  <br /> RENEW YOUR COMPANY NOW! <br />
                  <br />
                  RENUEVA TU COMPAÑÍA!
                  <br />
                  <br />
                </div>
              </Slide>
              {/*    
          <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/presentation-page/124.JPG")}
                ></img>
  </div> 
  */}
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <div className="section-description">
                <h5 className="description">
                  <RubberBand>
                    <br />
                    SolaFide provides interpreter services for different
                    purposes -- We are experts in USCIS interviews, mediations,
                    civil court audiences, family law, medical appointments, and
                    driving exams.
                    <br />
                    <hr />
                    <br />
                    SolaFide presta servicios de Intérprete -- Somos expertos en
                    la interpretación para entrevistas con el Servicio de
                    Inmigración de Estados Unidos (USCIS), mediaciones,
                    audiencias en corte civil, Ley de familia, citas médicas y
                    examenes de licencia de conducción. <br />
                    <hr />
                    <br />
                  </RubberBand>
                </h5>
                <center>
                  <Wobble>
                    <Button color="info" href="/contact-us">
                      Book Online
                    </Button>
                  </Wobble>
                </center>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Content;
