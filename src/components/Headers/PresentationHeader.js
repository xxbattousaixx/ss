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


        <table>
            <thead>
                <tr>
                    <th colspan="2">The table header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
            </tbody>
        </table>

        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >We offer residential and commercial services alike -- we are driven to please and look forward to adding value to your project.
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
