/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="/presentation">Solafide</a>
              </li>
              <li>
                <a href="/Testimonials1">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a href="mailto:dcarrassi@outlook.com">DC7</a>. Coded by{" "}
            <a href="mailto:dcarrassi@outlook.com">DC7</a>.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
