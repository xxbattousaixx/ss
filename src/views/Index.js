import React from "react";

// reactstrap components
import { Container, Button, Link } from 'react-floating-action-button'

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Images from "./index-sections/Images.js";
import Basic from "./index-sections/Basic.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pills from "./index-sections/Pills.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import PreFooter from "./index-sections/PreFooter.js";
import Footers from "./index-sections/Footers.js";
import Typography from "./index-sections/Typography.js";
import ContentAreas from "./index-sections/ContentAreas.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";

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

          <Carousel />
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
