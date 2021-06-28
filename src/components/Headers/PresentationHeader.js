/*eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import animationData from 'views/lotties/loader.json';// reactstrap components
import animationData2 from 'views/lotties/loader1.json';// reactstrap components

import Lottie from 'react-lottie';
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";// core components
// core components


function preloadImage()
{
    var img=new Image();
    img.src="assets/img/work.jpeg";
}
function PresentationHeader() {
  const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions2 = {
            loop: true,
            autoplay: true,
            animationData: animationData2,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
  return (
    <>
      <div className="page-header clear-filter img-fluid"
      style={{
        backgroundImage:
          "url(" +
          require("assets/img/work.jpeg") +
          ")",
      }}>


       
        <div className="rellax-text-container vw-100"
        >

        <h1 className="h1-seo" data-rellax-speed="-1">
            Solafide
          </h1>
          

        </div>


      </div>
    </>
  );
}

export default PresentationHeader;
