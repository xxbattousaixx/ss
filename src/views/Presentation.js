import React from "react";
// javascript library that creates a parrallax effect
// reactstrap components
import { Container, Button, Link } from "react-floating-action-button";

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar";
import PresentationHeader from "components/Headers/PresentationHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial";

import Content from "views/presentation-sections/Content.js";
import PlainCards from "./index-sections/PlainCards.js";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

   
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
        <Content />
        {/* 
       <Carousel11/>
<Image/>
*/}

        <PlainCards />
        <Container>
          <Link
            href="/contact-us"
            tooltip="Book online"
            icon="far fa-sticky-note"
          />
          <Link href="/contact-us" tooltip="Call us" icon="fas fa-user-plus" />
          <Button
            tooltip="Get a quote!"
            icon="fas fa-plus"
            rotate={true}
            onClick={() => alert("Call us at 941-518-1657")}
          />
        </Container>
        <FooterBlackSocial />
      </div>
    </>
  );
}

export default Presentation;
