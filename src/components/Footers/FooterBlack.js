/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
          <ul>
            <li>
              <a
                href="/presentation"
              >
                Solafide
              </a>
            </li>
            <li>
              <a
                href="/AboutUs"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"

              >
                Contact
              </a>
            </li>
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
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
