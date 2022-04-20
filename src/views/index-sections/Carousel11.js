import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Carousel11() {
  return (
    <>
      <div className="section" id="carousel" data-background-color="white">
        <Container>
          <Row>
            <center>
              <Col md="7">
                <Carousel autoPlay="true" interval="1900" infiniteLoop="true">
                  <div>
                    <img src="114.jpg" />
                    <p className="legend">
                      Driveways
                      <br />
                      Don't settle for ugly! Enhance your curb appeal and
                      upgrade your home's entrance with an eye-catching, and
                      long-lasting paver driveway.
                    </p>
                  </div>
                  <div>
                    <img src="/127.jpg" />
                    <p className="legend">
                      Patios
                      <br />
                      We specialize in making your living space something to be
                      desired. Your patio can become as modern and refined as
                      the rest of your home.
                    </p>
                  </div>

                  <div>
                    <img src="/a33.jpg" />
                    <p className="legend">
                      Pools
                      <br />
                      Refresh the look of your pool deck -- allow us to renew
                      your favorite spaces.
                    </p>
                  </div>
                </Carousel>
              </Col>
            </center>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Carousel11;
