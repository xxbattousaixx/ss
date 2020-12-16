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

import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

// reactstrap components

// core components

function ContactUsHeader2() {

  return (
    <>
<div style={{
  backgroundImage: "url(" + require("assets/img/bg98.jpg") + ")",
}}>
      <Row><br/>
            <Col md="6">
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
        <Col md="6">
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
</div>
    </>
  );
}

export default ContactUsHeader2;
