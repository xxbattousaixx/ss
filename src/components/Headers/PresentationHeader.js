/*eslint-disable*/
import React from "react";
import { motion } from "framer-motion";

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
                require("assets/img/main.jpg") +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text"
        >

        <h1 className="h1-seo" data-rellax-speed="-1">
            Solafide
          </h1>
          <div className="pro">Our Services</div>
        </div>

        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
        <motion.div whileHover={{ scale: 1.1, duration: 200000000000000 }} >
        <a className="category text-info">  Serving Manatee, Sarasota, Hillsborough, Polk, Charlotte, Citrus, DeSoto and Hardee counties.</a>
      </motion.div>  </h3>
        <h4
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >        <motion.div whileHover={{ scale: 1.6, duration: 200000000000000 }} >

        <a className="category text-info"><i className="now-ui-icons media-2_sound-wave"></i>Value<i className="now-ui-icons media-2_sound-wave"></i>Professionalism<i className="now-ui-icons media-2_sound-wave"></i>Flexibility<i className="now-ui-icons media-2_sound-wave"></i>Reliability<i className="now-ui-icons media-2_sound-wave"></i>Efficiency<i className="now-ui-icons media-2_sound-wave"></i></a><br/>

</motion.div>
<br/><br/>

        <i className="category text-info">Family owned and operated for 15 years...</i>
        </h4>

      </div>
    </>
  );
}

export default PresentationHeader;
