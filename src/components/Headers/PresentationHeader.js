/*eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import animationData from "views/lotties/loader.json"; // reactstrap components
import animationData2 from "views/lotties/loader1.json"; // reactstrap components
import MediaQuery from "react-responsive";

import Lottie from "react-lottie";
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap"; // core components
// core components

function preloadImage() {
  var img = new Image();
  img.src = "assets/img/project6.jpg";
  var img2 = new Image();
  img2.src = "assets/img/pricing3.jpg";
}
function PresentationHeader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
