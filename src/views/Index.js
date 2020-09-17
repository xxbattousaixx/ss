import React from "react";

// reactstrap components
import { Container, Button, Link } from 'react-floating-action-button'

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page

import Carousel2 from "./index-sections/Carousel.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <WhiteNavbar />

      <div className="wrapper">
        <BlogPostsHeader />
        <div className="main">

          <Carousel2 />
          <Container>
                      <Link href="/contact-us"
                          tooltip="E-Mail"
                          icon="far fa-sticky-note" />
                      <Link href="/contact-us"
                          tooltip="Call Us"
                          icon="fas fa-user-plus" />
                      <Button
                          tooltip="Get a quote!"
                          icon="fas fa-plus"
                          rotate={true}
                          onClick={() => alert('Contact us here!')} />
                  </Container>
          <FooterBlack />
        </div>
      </div>
    </>
  );
}

export default Index;
