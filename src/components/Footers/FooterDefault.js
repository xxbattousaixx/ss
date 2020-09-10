/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterDefault() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="www.google.com"
                  target="_blank"
                >
                  SOLAFIDE
                </a>
              </li>
              <li>
                <a
                  href="www.google.com"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="www.solafide-service.com"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="www.google.com"
              target="_blank"
            >
              DC7
            </a>
            . Coded by{" "}
            <a
              href="www.google.com"
              target="_blank"
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

export default FooterDefault;
