import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

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
        <br/>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            _________________________________________________________________________________

              <h6 className="title">
              We offer residential and commercial services alike -- we are driven to please and look forward to adding value to your project.
              <br/>
              We are trusted to work with the highest quality materials and bring you an exceptional experience.
              <br/>
              <br/>
              We specialize in pavement, painting, and pressure washing.

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
