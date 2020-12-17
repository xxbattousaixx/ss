import React from "react";
// javascript library that creates a parrallax effect
// reactstrap components
import { Container, Button, Link } from 'react-floating-action-button'
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PricingHeader from "components/Headers/PricingHeader.js";
import ProductPageHeader from "components/Headers/ProductPageHeader.js";

import FooterBlack from "components/Footers/FooterBlack.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import ContactUsHeader2 from "components/Headers/ContactUsHeader2.js";


// sections for this page

import Testimonials from "./presentation-sections/Testimonials.js";


function Testimonials2() {
  React.useEffect(() => {
    document.body.classList.add("Testimonials2-page");
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
      document.body.classList.remove("Testimonials2-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>

    <ScrollTransparentNavbar />


      <div className="wrapper">
<ProfilePageHeader/>
<ContactUsHeader2/>

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
    </>
  );
}

export default Testimonials2;
