// javascript library that creates a parrallax effect
// reactstrap components
import * as THREE from 'three';
import React, { useFrame,useCallback, useEffect, useRef, useMemo, useState } from 'react';
import niceColors from 'nice-color-palettes';
import { Canvas } from 'react-three-fiber'

import { useSprings, a } from 'react-spring/three';


import Lottie from 'react-lottie';
import animationData from 'views/lotties/biz1.json';// reactstrap components
import animationData2 from 'views/lotties/home.json';// reactstrap components

// reactstrap components
// reactstrap components

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 5)])

const number = 35
const random = i => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
  }
}

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
  }
})

function Content() {
  const [springs, set] = useSprings(number, i => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }))
  useEffect(() => void setInterval(() => set(i => ({ ...random(i), delay: i * 40 })), 3000), [])
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
    </a.mesh>
  ))
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}


// core components

function Projects() {
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
      <div className="cd-section" id="projects">

        <div className="projects-4" data-background-color="gray">
          <Container fluid>
            <Row>

              <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}
              onCreated={({ gl }) => gl.setClearColor('lightpink')}>
                   <Lights />
                   <Content />
                 </Canvas>
                 <Col className="mr-auto ml-auto text-center" md="12">
                   <h5>We proudly serve the Tampa Bay Area paving needs.</h5>
                 </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project14.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/contact-us" >
                          Get a quote now.
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons objects_globe"></i>
                          Commercial
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card className="card-fashion">
                    <CardTitle tag="div">
                      <a href="/contact-us" >
                        <h4>
                          Commercial Projects
                        </h4>    <Lottie
                                options={defaultOptions}

                                />

                      </a>
                    </CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons education_paper"></i>
Excellence is our priority.
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pavers.jpg") + ")",
                    }}
                  ></Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project17.jpg") + ")",
                    }}
                  ></Card>
                  <Card className="card-fashion arrow-left">
                    <CardTitle tag="div">
                    <a href="/contact-us" >
                    <h4>  Get a quote now.</h4>

                      <Lottie
                             options={defaultOptions2}

                             />

                    </a>
</CardTitle>
                    <CardBody>
                      <CardFooter>
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons design_app"></i>
                            Residential
                          </span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project16.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/contact-us" >
                          Residential projects
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          Quality is our standard.
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>

            </Row>
          </Container>

        </div>

      </div>

    </>
  );
}

export default Projects;
