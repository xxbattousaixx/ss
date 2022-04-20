import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";

// reactstrap components
import { Container, Button, Link } from "react-floating-action-button";
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";

import FooterBlack from "components/Footers/FooterBlack.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import ContactUsHeader2 from "components/Headers/ContactUsHeader2.js";

// sections for this page

function Gallery() {
  React.useEffect(() => {
    document.body.classList.add("Testimonials1-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function () {
        new Rellax(".rellax", {
          center: true,
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }
  });

  return (
    <>
      <ScrollTransparentNavbar />

      <div className="wrapper">
        <ProfilePageHeader />
        <ContactUsHeader2 />

        <Container>
          <Link href="/contact-us" tooltip="E-Mail" icon="far fa-sticky-note" />
          <Link href="/contact-us" tooltip="Call Us" icon="fas fa-user-plus" />
          <Button
            tooltip="Get a Free Estimate!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Contact us here!")}
          />
        </Container>
        <FooterBlack />
      </div>
    </>
  );
}

export default Gallery;
