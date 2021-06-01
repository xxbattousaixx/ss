import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col md="5">
                <h1 className="title">Solafide Services</h1>
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
                It’s time to think beyond tired old asphalt and concrete. Don’t settle for boring - brick pavers are a lasting, beautiful solution for driveways, pool decks, walls, patios, and more. Find out why we’re the Tampa Bay Area's most trusted hardscape design and installation company. Let us create a hardscape solution that you and your family will enjoy for years to come.
                </h5>
                <center><Button
                    color="info"
                      href="/contact-us"
                    >
                      FREE ESTIMATE
                    </Button>
                    </center>              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Content;
