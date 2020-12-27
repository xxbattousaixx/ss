/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function FooterBlackSocial() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <div className="content">
          <nav>
          <ul>
          <center>  <li>
              <a
                href="/presentation"
              >
                Solafide
              </a>
            </li>
            <li>
              <a
                href="/Testimonials1"
              >
                About Us
              </a>
            </li>
</center>
          </ul>
          </nav>

          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="mailto:dcarrassi@outlook.com"
            >
              DC7
            </a>
            . Coded by{" "}
            <a
              href="mailto:dcarrassi@outlook.com"
            >
              DC7
            </a>
            .
          </div>
          </div><Row>
              <Col md="12">
                <h6>Follow Us On Social Media&nbsp;&nbsp;&nbsp;&nbsp;


                </h6>




                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="twitter"
                      href="http://www.twitter.com"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>

                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="facebook"
                      href="https://www.facebook.com/pages/category/Product-Service/Solafide-Services-LLC-111971494018129/"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>



                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="google"
                      href="http://www.google.com"
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>

                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="instagram"
                      href="http://www.instagram.com"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>

              </Col>
            </Row>
          <hr></hr>

        </Container>
      </footer>
    </>
  );
}

export default FooterBlackSocial;
