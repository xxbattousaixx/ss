import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import { Container, Button, Link } from 'react-floating-action-button'

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import Content from "views/presentation-sections/Content.js";
import Pricing from "views/presentation-sections/Pricing.js";
import Image from "views/presentation-sections/Image.js";

import Carousel11 from "./index-sections/Carousel11.js";
// sections for this page

import PlainCards from "./index-sections/PlainCards.js";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
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

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });
  return (
    <>
      <WhiteNavbar />

      <div className="wrapper">
        <PresentationHeader />
        <Content/>
       {/* 
       <Carousel11/>
<Image/>
*/}

        <PlainCards/>
        <Container>
                    <Link href="/contact-us"
                        tooltip="Get a Free Estimate"
                        icon="far fa-sticky-note" />
                    <Link href="/contact-us"
                        tooltip="Call us"
                        icon="fas fa-user-plus" />
                    <Button
                        tooltip="Get a quote!"
                        icon="fas fa-plus"
                        rotate={true}
                        onClick={() => alert('Call us at 941-518-1657')} />
                </Container>
        <FooterBlack />
      </div>
    </>
  );
}

export default Presentation;
