import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import AwesomeSlider from 'react-awesome-slider';
import Lottie from 'react-lottie';

import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import animationData3 from 'views/lotties/laser.json';// reactstrap components
import animationData4 from 'views/lotties/build.json';// reactstrap components
// reactstrap components
import animationData from 'views/lotties/flawda.json';// reactstrap components

import animationData2 from 'views/lotties/bar1.json';// reactstrap components

// core components

function ContactUsHeader2() {
  const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions4 = {
            loop: true,
            autoplay: true,
            animationData: animationData4,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
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
<div style={{
  backgroundImage: "url(" + require("assets/img/tigris.jpg") + ")",
}}>    <center>  <img
          alt="..."
          className="rounded img-raised"
          src={require("assets/img/solafide.png")}
        ></img>   </center>
<div className="info"><Lottie
       options={defaultOptions3}

       /></div>

      <Row><br/>
            <Col md="5">
<br/><br/><br/>
                <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div data-src="/11.jpg" />
                <div data-src="/12.jpg" />
                <div data-src="/13.jpg" />
                <div data-src="/15.jpg" />
                <div data-src="/16.jpg" />
                <div data-src="/17.jpg" />
                <div data-src="/18.jpg" />
                <div data-src="/19.jpg" />
                <div data-src="/130.jpg" />
                <div data-src="/129.jpg" />
                <div data-src="/132.jpg" />
                <div data-src="/133.jpg" />
                </AwesomeSlider>
<br/>   <br/> <br/></Col>
<Col span="8" md="2"><div className="info text-horizontal">
<Lottie
       options={defaultOptions}

       />      <Lottie
                          options={defaultOptions4}

                          />
   <Lottie
              options={defaultOptions}

              /></div> </Col> <Col md="5">
        <br/><br/><br/>

                      <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                      <div data-src="/134.jpg" />
                      <div data-src="/135.jpg" />
                      <div data-src="/114.jpg" />
                      <div data-src="/137.jpg" />
                      <div data-src="/138.jpg" />
                      <div data-src="/120.jpg" />
                      <div data-src="/121.jpg" />
                      <div data-src="/122.jpg" />
                      <div data-src="/123.jpg" />
                      <div data-src="/124.jpg" />
                      <div data-src="/125.jpg" />
                      <div data-src="/126.jpg" />
                      <div data-src="/127.jpg" />
                      <div data-src="/128.jpg" />


                      </AwesomeSlider>


                      <br/>  <br/>  <br/></Col>
      </Row>
<br/><br/><br/><br/>
</div>
    </>
  );
}

export default ContactUsHeader2;
