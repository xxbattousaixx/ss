/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg") +
                ")",
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-buildings.png") +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            Solafide
          </h1>
          <div className="pro">SS</div>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          At your service.
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >We offer residential and commercial services alike -- we are driven to please and look forward to adding value to your project.
        <br/>
        We are trusted to work with the highest quality materials and bring you an exceptional experience.
        <br/>
        <br/>
        We specialize in pavement, painting, and pressure washing.
        </h6>

      </div>
    </>
  );
}

export default PresentationHeader;
