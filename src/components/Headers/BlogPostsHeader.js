import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function BlogPostsHeader() {
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
            backgroundImage: "url(" + require("assets/img/bg44.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              _________________________________________________________________________________
              <h6 className="title">
                We provide document preparation services at a cost effective
                price. Please contact us today to inquire about any of our
                services.
                <br />
                <br />
                Ofrecemos servicios de preparacion de documentos a un precio
                economico. Contactanos si tienes alguna pregunta sobre nuestros
                servicios.
              </h6>
              _________________________________________________________________________________
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostsHeader;
