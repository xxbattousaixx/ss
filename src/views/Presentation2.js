import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import { Container, Button, Link } from 'react-floating-action-button'
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Components from "./presentation-sections/Components.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import Carousel from "./index-sections/Carousel.js";
import BasicComponents from "./presentation-sections/BasicComponents.js";
import Cards from "./presentation-sections/Cards.js";
import Content from "./presentation-sections/Content.js";
import Sections from "./presentation-sections/Sections.js";
import Examples from "./presentation-sections/Examples.js";
import FreeDemo from "./presentation-sections/FreeDemo.js";
import Icons from "./presentation-sections/Icons.js";
import Image from "./presentation-sections/Image.js";
import Testimonials from "./presentation-sections/Testimonials.js";
import Pricing from "./presentation-sections/Pricing.js";
import PlainCards from "./index-sections/PlainCards.js";

function Presentation2() {
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

      <ScrollTransparentNavbar />


      <div className="wrapper">
<BlogPostsHeader/>
        <Carousel/>
        <div className="services">
        <PlainCards/>
</div>
        <Container>
                    <Link href="presentation#PlainCards"
                        tooltip="Get a quote"
                        icon="far fa-sticky-note" />
                    <Link href="presentation2#PlainCards"
                        tooltip="Call us"
                        icon="fas fa-user-plus" />
                    <Button
                        tooltip="Get a quote!"
                        icon="fas fa-plus"
                        rotate={true}
                        onClick={() => alert('FAB Rocks!')} />
                </Container>
            <FooterBlack />

      </div>
    </>
  );
}

export default Presentation2;
