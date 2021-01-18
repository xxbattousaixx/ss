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
    img.src="assets/img/work1.jpg";
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
      <div className="page-header clear-filter"
      style={{
        backgroundImage:
          "url(" +
          require("assets/img/work1.jpg") +
          ")",
      }}>


        <div
          className="rellax-header"
          data-rellax-speed="0"
        >


        </div>
        <div className="rellax-text-container"
        >

        <h1 className="h1-seo" data-rellax-speed="-1">
            Solafide
          </h1>

          <center><h4>  <motion.div whileHover={{ scale: 1.6, duration: 200000000000000 }} >

           <a className="category text-warning"><i className="now-ui-icons media-2_sound-wave"></i>Value<i className="now-ui-icons media-2_sound-wave"></i>Professionalism<i className="now-ui-icons media-2_sound-wave"></i>Flexibility<i className="now-ui-icons media-2_sound-wave"></i>Reliability<i className="now-ui-icons media-2_sound-wave"></i>Efficiency<i className="now-ui-icons media-2_sound-wave"></i></a><br/>

           </motion.div></h4></center>
           <br/>
           <center>
<Row><Col></Col><Col md="2"><center><Lottie
       options={defaultOptions}

       /></center></Col><Col></Col></Row>
<br/><br/><br/>
            <h5 data-rellax-speed="-1">
             <motion.div whileHover={{ scale: 1.1, duration: 200000000000000 }} >
             <a className="category text-info">  Serving Manatee, Sarasota, Hillsborough, Polk, Charlotte, Citrus, DeSoto and Hardee counties.</a>
           </motion.div>  </h5></center>


        </div>

      </div>
    </>
  );
}

export default PresentationHeader;
