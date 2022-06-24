import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg99.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              _________________________________________________________________________________
              <h6 className="title">
                <Row>
                  <Col md="6">
                    - Preparación de impuestos <br />
                    - Impuestos de Compañía <br />
                    - Apertura de Negocio <br />
                    - Matrimonio <br />
                    - Divorcio
                    <br />
                    - Preparación de formularios de Inmigración
                    <br />
                    - Traducciones certificadas <br />
                    - Interpretaciones <br />
                    - Clases de Ciudadanía <br />
                    - Clases de Inglés
                    <br />
                    - Aplicación para estampillas
                    <br />- Medicaid{" "}
                  </Col>
                  <Col>
                    - Tax preparation <br />
                    - Company Taxes <br />
                    - Opening a new business <br />
                    - Marriage <br />
                    - Divorce
                    <br />
                    - Immigration formulary preparation
                    <br />
                    - Certified translation <br />
                    - Interpreter services <br />
                    - Citizenship courses <br />
                    - English courses
                    <br />
                    - Food stamps applications
                    <br />- Medicaid{" "}
                  </Col>
                </Row>
              </h6>
              _________________________________________________________________________________
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
