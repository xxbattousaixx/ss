// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import * as THREE from 'three';
import React, { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import niceColors from 'nice-color-palettes';

import { Canvas, useFrame, useThree } from 'react-three-fiber';
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import Effects from 'views/Effects.js';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,

  Container,
  Row,
  Col,
} from "reactstrap";// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// Makes these prototypes available as "native" jsx-string elements
const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 5)])


function Boxes() {
  const [hovered, set] = useState()
  const colorArray = useMemo(() => Float32Array.from(new Array(1000).fill().flatMap((_, i) => tempColor.set(colors[i]).toArray())), [])

  const ref = useRef()
  const previous = useRef()
  useEffect(() => void (previous.current = hovered), [hovered])

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 4)
    ref.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          if (hovered !== previous.current) {
            tempColor.set(id === hovered ? 'white' : colors[id]).toArray(colorArray, id * 3)
            ref.current.geometry.attributes.color.needsUpdate = true
          }
          const scale = id === hovered ? 2 : 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]} onPointerMove={e => set(e.instanceId)} onPointerOut={e => set(undefined)}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>

  )
}



function Testimonials1() {
  React.useEffect(() => {
    document.body.classList.add("Testimonials1-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function () {
        new Rellax(".rellax", {
          center: true,
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }


    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("Testimonials1-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });

  return (
    <>
    <ScrollTransparentNavbar  />
    <div className="wrapper">
    <BlogPostsHeader />
      <div className="section">
        <div className="about-description text-center">
          <div className="features-3">
            <Container>
            <Row><Col md="3">  <div className="separator-line bg-info"></div></Col>
            <Col md="3">  <div className="separator-line bg-info"></div></Col>
            <Col md="3">  <div className="separator-line bg-info"></div></Col>
            <Col md="3">  <div className="separator-line bg-info"></div></Col></Row>
              <Row>
                <Col className="mr-auto ml-auto" md="8">
                  <h2 className="title">Simpler. Smarter. Faster.</h2>

                  <h4 className="description">
                    Solafide Services is founded on our five essential core values.
                  </h4>
                </Col>
              </Row>
              <Row><Col md="3">  <div className="separator-line bg-info"></div></Col>
              <Col md="3">  <div className="separator-line bg-info"></div></Col>
              <Col md="3">  <div className="separator-line bg-info"></div></Col>
              <Col md="3">  <div className="separator-line bg-info"></div></Col></Row>
              <Row>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-success icon-circle">
                      <i className="now-ui-icons business_money-coins"></i>
                    </div>
                    <h4 className="info-title">Value</h4>
                    <p className="description">
                      We are competitive and offer cost effective solutions for all parties.
                    </p>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-info icon-circle">
                      <i className="now-ui-icons business_briefcase-24"></i>
                    </div>
                    <h4 className="info-title">Professionalism</h4>
                    <p className="description">
                      No work will be performed without the utmost level of care and preparedness.
                    </p>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-primary icon-circle">
                      <i className="now-ui-icons sport_user-run"></i>
                    </div>
                    <h4 className="info-title">Flexibility</h4>
                    <p className="description">
                      We are proud to serve you and will accomodate your needs accordingly.
                    </p>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-error icon-circle">
                      <i className="now-ui-icons ui-1_settings-gear-63"></i>
                    </div>
                    <h4 className="info-title">Reliability</h4>
                    <p className="description">
                      We want you to count on US.
                    </p>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-warning icon-circle">
                      <i className="now-ui-icons ui-2_time-alarm"></i>
                    </div>
                    <h4 className="info-title">Efficiency</h4>
                    <p className="description">
                      Time is not to be wasted and we understand this. Getting the best for your money should not be time taking.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>



        <Canvas
            gl={{ antialias: false, alpha: false }}
            camera={{ position: [0, 0, 15], near: 5, far: 20 }}
            onCreated={({ gl }) => gl.setClearColor('lightpink')}>
            <ambientLight />
            <pointLight position={[150, 150, 150]} intensity={0.55} />
            <Boxes />
            <Effects />

          </Canvas>,

        <div className="projects-5" data-background="gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">We have the edge on the competitors</h2>
                <h4 className="description">
                  Nobody works with the quality of materials we do. We make your time worthwhile.
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project8.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Residential Services</CardTitle>
                    <p className="card-description">
                      We can get the job done and make it a pleasure for you.
                    </p>
                    <Badge className="badge-neutral"><a href="/contact-us">REQUEST A QUOTE</a></Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
Pavers                    </h4>
                    <p className="description">
                    Your needs will be met with precision.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pressure Washing</h4>
                    <p className="description">
                    Let us show you how detailed we can be.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Painting</h4>
                    <p className="description">
                No project is too small for our team.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pavers</h4>
                    <p className="description">
                      Your needs will be met with precision.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pressure Washing</h4>
                    <p className="description">
                      Let us show you how detailed we can be.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Painting</h4>
                    <p className="description">
                      No project is too small for our team.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
              <br/>
              <br/>
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project9.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Commercial Services.</CardTitle>
                    <p className="card-description text-white">
                      Companies of all sizes can rely on our work.
                    </p>
                    <Badge className="badge-neutral"><a href="/contact-us">REQUEST A QUOTE</a></Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

            </div>

        <FooterBlack />
    </div>
</>
  );
  }


export default Testimonials1;
