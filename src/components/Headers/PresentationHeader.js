import MediaQuery from "react-responsive";
import React from "react";

// core components

function preloadImage() {
  var img = new Image();
  img.src = "assets/img/project6.jpg";
  var img2 = new Image();
  img2.src = "assets/img/pricing3.jpg";
}
function PresentationHeader() {
  preloadImage();
  return (
    <>
      <MediaQuery maxWidth={1224}>
        <div
          className="page-header clear-filter img-fluid"
          style={{
            backgroundImage: "url(" + require("assets/img/pricing3.jpg") + ")",
          }}
        >
          <div className="rellax-text-container vw-100">
            <h1 className="h1-seo" data-rellax-speed="-1">
              Solafide
            </h1>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1824}>
        <div
          className="page-header clear-filter img-fluid"
          style={{
            backgroundImage: "url(" + require("assets/img/project6.jpg") + ")",
          }}
        >
          <div className="rellax-text-container vw-100">
            <h1 className="h1-seo" data-rellax-speed="-1">
              Solafide
            </h1>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default PresentationHeader;
