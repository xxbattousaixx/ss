/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
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
      
    </div>
  </>
  );
}

export default IndexHeader;
