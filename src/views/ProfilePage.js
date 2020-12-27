import * as THREE from 'three'
import React, { useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Physics, usePlane, useBox } from 'use-cannon'
import niceColors from 'nice-color-palettes'
import {
  CardTitle,
Container,
  Row,
  Col,
} from "reactstrap";
// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import Footer from "components/Footers/Footer.js";

// sections for this page

import Projects2 from "./sections-sections/Projects2.js";
import Carousel3 from "./index-sections/Carousel3.js";
import Carousel5 from "./index-sections/Carousel5.js";

import Carousel4 from "./index-sections/Carousel4.js";

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[5, 5]} />
      <shadowMaterial attach="material" color="#171717" opacity={0.5} />
    </mesh>
  )
}

function Cubes({ number }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.1],
    position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5]
  }))

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3)
    const color = new THREE.Color()
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3)
    return array
  }, [number])

  useFrame(() => api.at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0))

  return (
    <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, number]}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
      </boxBufferGeometry>
      <meshLambertMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}



function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <div className="section-space"></div>

        <Projects2 />



                <Canvas shadowMap colorManagement gl={{ alpha: false }} camera={{ position: [-1, 1, 2.5], fov: 50 }}>
                   <color attach="background" args={['lightblue']} />
                   <hemisphereLight intensity={0.35} />
                   <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
                   <Physics>
                     <Plane rotation={[-Math.PI / 2, 0, 0]} />
                     <Cubes number={200} />
                   </Physics>
                 </Canvas>



                          <div > <br/><br/><br/><div className="projects-3" data-background-color="black">
                          <Container>

                                  <Row>
                                    <Col className="ml-auto mr-auto text-center" md="8">
                                      <h6 className="category text-muted">Our work</h6>
                                      <h2 className="title">Some of Our Painting Projects</h2>
                                    </Col>
                                  </Row>
                                  <div className="section-story-overview">
                                    <Row>
                                      <Col md="6">
                                        <div
                                          className="image-container image-left"
                                          style={{
                                            backgroundImage:
                                              "url(" + require("assets/img/pt2.jpg") + ")",
                                          }}
                                        >
                                          <p className="blockquote blockquote-info">
                                            Solafide is available to assist in all aspects of
                                            a project from start to finish, including consulting with
                                            Architects and Builders.
                                          </p>
                                        </div>
                                      </Col>
                                      <Col md="5">
                                        <div
                                          className="image-container image-right"
                                          style={{
                                            backgroundImage:
                                              "url(" + require("assets/img/pt4.jpg") + ")",
                                          }}
                                        ></div>
                                        <h6 className="category text-info">Roof</h6>
                                        <CardTitle tag="h4">Artisanal technique</CardTitle>
                                        <p>
                                          Our style has been developed over the years to bring you an exceptional experience.
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                  <div className="section-story-overview">
                                    <Row>
                                      <Col md="6">
                                        <div
                                          className="image-container image-left"
                                          style={{
                                            backgroundImage:
                                              "url(" + require("assets/img/pt5.jpg") + ")",
                                          }}
                                        >
                                          <p className="blockquote blockquote-info">
                                           We provide a simple, approachable means to perform the toughest jobs...
                                          </p>
                                        </div>
                                      </Col>
                                      <Col md="5">
                                        <div
                                          className="image-container image-right"
                                          style={{
                                            backgroundImage:
                                              "url(" + require("assets/img/pt1.jpg") + ")",
                                          }}
                                        ></div>
                                        <h6 className="category text-info">Walls and Roofs</h6>
                                        <CardTitle tag="h4">Same Day service</CardTitle>
                                        <p>
                                          We are proud to offer same day services -- please inquire as to our availability when requesting a quote.
                                        </p>
                                      </Col>
                                      <Col md="6">
                                      

                                      </Col>
                                      <Col md="6">
                                        <div
                                          className="image-container image-center"
                                          style={{
                                            backgroundImage:
                                              "url(" + require("assets/img/pt7.jpg") + ")",
                                          }}
                                        ></div>

                                      </Col></Row>
                                  </div>
                                </Container>

                 <Row><Col md="4">
                 <Carousel3/>
                 </Col><Col md="4"><Carousel4/></Col><Col md="4"><Carousel5/></Col></Row>

            </div>     </div>

        <Footer />
      </div>
    </>
  );
}


export default ProfilePage;
