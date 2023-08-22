import React from "react";
import { Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";
import animationData3 from "views/lotties/laser.json"; // reactstrap components
import animationData4 from "views/lotties/build.json"; // reactstrap components
// reactstrap components
import animationData from "views/lotties/flawda.json"; // reactstrap components

// core components

function ContactUsHeader2() {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage: "url(" + require("assets/img/111.jpg") + ")",
        }}
      >
        <br />
        <br />
        <br />

        <center>
          {" "}
          <img
            alt="..."
            className="rounded img-raised"
            src={require("assets/img/solafide.png")}
          ></img>{" "}
        </center>
        {/*
<div className="info"><Lottie
       options={defaultOptions3}

       /></div>
*/}
        <Row>
          <br />
          <Col md="6">
            <br />
            <br />
            <br />
            {/* <AwesomeSlider
              animation="cubeAnimation"
              cssModule={AwesomeSliderStyles}
            >
              <div data-src={require("assets/img/p1.jpeg")}/>
              <div data-src={require("assets/img/p2.jpeg")}/>
              <div data-src={require("assets/img/p3.jpeg")}/>
              <div data-src={require("assets/img/p4.jpeg")}/>
              <div data-src={require("assets/img/p5.jpeg")}/>

              <div data-src={require("assets/img/11.jpg")}/>
              <div data-src={require("assets/img/12.jpg")}/>
              <div data-src={require("assets/img/13.jpg")}/>
              <div data-src={require("assets/img/15.jpg")}/>
              <div data-src={require("assets/img/16.jpg")}/>
              <div data-src={require("assets/img/17.jpg")}/>
              <div data-src={require("assets/img/18.jpg")}/>
              <div data-src={require("assets/img/19.jpg")}/>
              <div data-src={require("assets/img/130.jpg")}/>
              <div data-src={require("assets/img/129.jpg")}/>
              <div data-src={require("assets/img/132.jpg")}/>
              <div data-src={require("assets/img/133.jpg")}/>
            </AwesomeSlider> */}
            <br /> <br /> <br />
          </Col>
          {/*<Col span="8" md="2"><div className="info text-horizontal">
<Lottie
       options={defaultOptions}

       />   
      
     <Lottie options={defaultOptions4}/>
   <Lottie
              options={defaultOptions}

              />

              </div> </Col>*/}
          <Col md="6">
            <br />
            <br />
            <br />
            {/* <AwesomeSlider
              animation="cubeAnimation"
              cssModule={AwesomeSliderStyles}
            >
              <div data-src={require("assets/img/p6.jpeg")}/>
              <div data-src={require("assets/img/p7.jpeg")}/>
              <div data-src={require("assets/img/p8.jpeg")}/>
              <div data-src={require("assets/img/p9.jpeg")}/>

              <div data-src={require("assets/img/134.jpg")}/>
              <div data-src={require("assets/img/135.jpg")}/>
              <div data-src={require("assets/img/114.jpg")}/>
              <div data-src={require("assets/img/137.jpg")}/>
              <div data-src={require("assets/img/138.jpg")}/>
              <div data-src={require("assets/img/120.jpg")}/>
              <div data-src={require("assets/img/121.jpg")}/>
              <div data-src={require("assets/img/122.jpg")}/>
              <div data-src={require("assets/img/123.jpg")}/>
              <div data-src={require("assets/img/124.jpg")}/>
              <div data-src={require("assets/img/125.jpg")}/>
              <div data-src={require("assets/img/126.jpg")}/>
              <div data-src={require("assets/img/127.jpg")}/>
              <div data-src={require("assets/img/128.jpg")}/>
            </AwesomeSlider> */}
            <br /> <br /> <br />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <br />
            <br />
            <br />
            {/* <AwesomeSlider
              animation="cubeAnimation"
              cssModule={AwesomeSliderStyles}
            >
              <div data-src={require("assets/img/331.jpg")}/>
              <div data-src={require("assets/img/332.jpg")}/>
              <div data-src={require("assets/img/334.jpg")}/>

              <div data-src={require("assets/img/335.jpg")}/>
              <div data-src={require("assets/img/336.jpg")}/>
              <div data-src={require("assets/img/337.jpg")}/>
              <div data-src={require("assets/img/338.jpg")}/>
              <div data-src={require("assets/img/339.jpg")}/>
              <div data-src={require("assets/img/340.jpg")}/>
              <div data-src={require("assets/img/341.jpg")}/>
              <div data-src={require("assets/img/342.jpg")}/>
              <div data-src={require("assets/img/343.jpg")}/>
              <div data-src={require("assets/img/344.jpg")}/>
            </AwesomeSlider> */}
            <br /> <br /> <br />
          </Col>
          <Col md="6">
            <br />
            <br />
            <br />
            {/* <AwesomeSlider
              animation="cubeAnimation"
              cssModule={AwesomeSliderStyles}
            >
              <div data-src={require("assets/img/350.mp4")}/>
              <div data-src={require("assets/img/351.mp4")}/>
            </AwesomeSlider> */}
            <br /> <br /> <br />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default ContactUsHeader2;
