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
            Non-Lawyer Disclaimer: We are a non-lawyer self-help service that
            provides document preparation assistance at your specific direction.
            We are not attorneys or paralegals, and cannot provide legal advice.
            The contents of this page nor of any conversation you have with us
            should or may be construed as legal advice. If you have legal
            questions you are encouraged to consult with or retain an attorney.
            <br />
            Descargo de Responsabilidad: Somos un servicio de autoayuda que
            brinda asistencia para la preparación de documentos en su dirección
            específica. No somos abogados ni asistentes legales por tanto no
            podemos brindar asesoramiento legal. El contenido de esta página ni
            de ninguna conversación que tenga con nuestros representantes debe o
            puede interpretarse como asesoramiento legal. Si tiene preguntas
            legales, le recomendamos que consulte o contrate a un abogado.
            <br />
            <br />
            <br />
            <ul>
              <li>
                <a href="/presentation">Solafide</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
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

export default FooterBlack;
