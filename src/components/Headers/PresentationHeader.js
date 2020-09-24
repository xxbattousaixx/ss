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
          <div className="pro">Your Service</div>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
        <a className="text-primary">  Operating in Tampa Bay and Sarasota.</a>
        </h3>
        <h4
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >
        <a className="text-transparent"><i className="now-ui-icons media-2_sound-wave"></i>Value<i className="now-ui-icons media-2_sound-wave"></i>Professionalism<i className="now-ui-icons media-2_sound-wave"></i>Flexibility<i className="now-ui-icons media-2_sound-wave"></i>Reliability<i className="now-ui-icons media-2_sound-wave"></i>Efficiency<i className="now-ui-icons media-2_sound-wave"></i></a>
        </h4>

      </div>
    </>
  );
}

export default PresentationHeader;
