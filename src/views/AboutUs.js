// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import * as THREE from "three";
import React, { useEffect, useRef, useMemo, useState } from "react";
import niceColors from "nice-color-palettes";
import { makeStyles } from "@material-ui/core/styles";
import { Canvas, useFrame } from "react-three-fiber";
import Effects from "views/Effects.js";
import Carousel8 from "./index-sections/Carousel8.js";
import animationData from "views/lotties/robot.json"; // reactstrap components
import Lottie from "react-lottie";
import animationData3 from "views/lotties/cube.json"; // reactstrap components
import animationData4 from "views/lotties/dots.json"; // reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap"; // core components


import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FooterBlack from "components/Footers/FooterBlack.js";
import animationData2 from "views/lotties/laser.json"; // reactstrap components
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";

import AwesomeSlider from "react-awesome-slider";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "gray",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: "33.33%",
    flexShrink: 0,
    background: "lightblue",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
  },
}));
// Makes these prototypes available as "native" jsx-string elements
const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();
const colors = new Array(1000)
  .fill()
  .map(() => niceColors[17][Math.floor(Math.random() * 5)]);

function Boxes() {
  const [hovered, set] = useState();
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(1000)
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  );

  const ref = useRef();
  const previous = useRef();
  useEffect(() => void (previous.current = hovered), [hovered]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time / 4);
    ref.current.rotation.y = Math.sin(time / 2);
    let i = 0;
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(5 - x, 5 - y, 5 - z);
          tempObject.rotation.y =
            Math.sin(x / 4 + time) +
            Math.sin(y / 4 + time) +
            Math.sin(z / 4 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          if (hovered !== previous.current) {
            tempColor
              .set(id === hovered ? "white" : colors[id])
              .toArray(colorArray, id * 3);
            ref.current.geometry.attributes.color.needsUpdate = true;
          }
          const scale = id === hovered ? 2 : 1;
          tempObject.scale.set(scale, scale, scale);
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={ref}
      args={[null, null, 1000]}
      onPointerMove={(e) => set(e.instanceId)}
      onPointerOut={(e) => set(undefined)}
    >
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colorArray, 3]}
        />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
}

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
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
  });
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

  return (
    <>
      <ScrollTransparentNavbar />
      <BlogPostsHeader />
      <Canvas
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 15], near: 5, far: 20 }}
        onCreated={({ gl }) => gl.setClearColor("lightpink")}
      >
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Boxes />
        <Effects />
      </Canvas>
      <div
        className="wrapper"
        style={{
          backgroundImage: "url(" + require("assets/img/xxixx.jpg") + ")",
        }}
      >
        <div className="info text-center"></div>

        <div className="about-description text-center">
          <Container>
            <div className="title">
              <h3>Professional Services For Home or Business</h3>
            </div>
            <br />
            <Row>
              <Col md="12">
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className={classes.heading}>
                        ECO FRIENDLY
                      </Typography>
                      <Typography className={classes.secondaryHeading}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Environmental
                        pavers{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Col md="12">
                        <Card
                          className="card-pricing card-background"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/img/project12.jpg") +
                              ")",
                          }}
                        >
                          <CardBody>
                            <h6 className="category">ECO FRIENDLY</h6>

                            <CardTitle tag="h2">Environmental Pavers</CardTitle>
                            <p className="info-title text-white">
                              Pervious paving systems are used to reduce the
                              imperviousness of firm surfaces such as patios,
                              walkways, driveways, fire lanes, and parking
                              areas, for the purpose of reducing surface runoff
                              and increasing infiltration.
                            </p>
                            <br />
                            <br />
                            <iframe
                              src="https://www.youtube.com/embed/uoIp8-zxcVw"
                              title="x"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </CardBody>
                        </Card>
                      </Col>
                    </AccordionDetails>
                  </Accordion>
                </div>{" "}
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                    >
                      <Typography className={classes.heading}>
                        CLEAN & SEAL
                      </Typography>
                      <Typography className={classes.secondaryHeading}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paver
                        Maintenance{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Col md="12">
                        <Card
                          className="card-pricing card-background"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/img/examples/card-blog18.jpg") +
                              ")",
                          }}
                        >
                          <CardBody>
                            <h8 className="category text-white">
                              {" "}
                              Paver Sealing{" "}
                            </h8>
                            <p className="info-title text-white">
                              The paved surfaces on your property have to endure
                              a considerable amount of wear and tear over time.
                              They may also get impacted by climatic changes
                              which alter their appearance and affects the
                              integrity. Oil stains, rust stains as well as dirt
                              and debris take their toll. One of the best ways
                              to ensure that all the paved areas on your
                              property stay looking good at all times is to get
                              them cleaned at regular intervals. In addition to
                              this, it is also a good idea to get them seal
                              coated every couple of years. The polyurethane
                              coating protects your pavers from scratches, the
                              environment, and other damage.
                            </p>
                            <h8 className="category text-white">
                              {" "}
                              Paver Restoration
                            </h8>{" "}
                            <p className="info-title text-white">
                              Paver stones are used in various outdoor areas
                              such as driveways, pathways, walkways, decks as
                              well as patios and poolscapes etc. All of these
                              spaces are exposed to the elements which make them
                              look dull and dated over time. In some cases,
                              paver units suffer damage from a heavy impact and
                              may become cracked, displaced, and sink and shift
                              as well. This marks the appearance of your
                              landscape and can prove to be a tripping hazard as
                              well. If you find that the pavers on your property
                              have become damaged in any way or are looking old,
                              you can hire the services of a professional paver
                              restoration company. They will ensure the pavers
                              are cleaned, sanded, seal coated and restored to
                              their own regional glory.
                            </p>
                            <h8 className="category text-white">
                              {" "}
                              Paver Repairs
                            </h8>
                            <p className="info-title text-white">
                              While paver units are extremely durable and
                              strong, there are times when they become damaged
                              by excessive use or even due to a heavy impact.
                              Improper installation can also result in shifting
                              and sinking of paver units. The one way to ensure
                              that the problem doesn’t become aggravated is to
                              get timely paver repairs done. Paver restoration
                              companies can handle this job expertly. The will
                              replace units that have become cracked and
                              reinstall the ones that have shifted or sunk.
                            </p>
                            <p className="info-title text-white">
                              Paver maintenance is something you should always
                              entrust to experts like us. They will assess the
                              condition of the paver surfaces; identify which
                              treatments will be required to get the units back
                              into a good condition. These services not only
                              improve the appearance of the paved surfaces, but
                              also improve their integrity and lifespan.
                            </p>{" "}
                          </CardBody>
                        </Card>
                      </Col>
                    </AccordionDetails>
                  </Accordion>{" "}
                </div>
              </Col>
            </Row>{" "}
            <div className="title">
              <br />
              <h3>Extensive Product Selection </h3>
            </div>
            <br />
            <Row>
              <Col md="12">
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography className={classes.heading}>
                        PATTERNS
                      </Typography>
                      <Typography className={classes.secondaryHeading}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patterns
                        Available{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Col md="12">
                        <Card
                          className="card-pricing card-background"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg19.jpg") + ")",
                          }}
                        >
                          <CardBody>
                            <h6 className="category">PATTERNS</h6>

                            <CardTitle tag="h2">Pattern Styles</CardTitle>
                            <p className="info-title text-white">
                              There are many patterns to choose from. You are
                              sure to find a style that best fits your paving
                              project.
                            </p>
                            <img src={require("assets/img/patterns.jpg")}/>
                              {/* <Col md="2">                    <img data-src={require("assets/img/p1.jpeg")}/></Col>
                              <Col md="2">            <img data-src={require("assets/img/p2.jpeg")}> </img></Col>
                              <Col md="2">         <img data-src={require("assets/img/p3.jpeg")}/></Col>
                              <Col md="2">          <img data-src={require("assets/img/p4.jpg")}/></Col>
                              <Col md="2">          <img data-src={require("assets/img/p5.jpg")}/></Col>
                                  <Col md="2">    <img data-src={require("assets/img/p6.jpg")}/></Col>
<Col md="2">       <img data-src={require("assets/img/p7.jpg")}/></Col>
<Col md="2">            <img data-src={require("assets/img/p8.jpg")}/></Col>
<Col md="2">                  <img data-src={require("assets/img/p9.jpg")}/></Col>
<Col md="2">                       <img data-src={require("assets/img/p10.jpg")}/></Col>
<Col md="2">                            <img data-src={require("assets/img/p11.jpg")}/></Col>
<Col md="2">                              <img data-src={require("assets/img/p12.jpg")}/></Col>

                                */}
                            {/* <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    cssModule={AwesomeSliderStyles}
  >

                              <div data-src={require("assets/img/p1.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p2.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p3.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p4.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p5.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p6.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p7.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p8.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p9.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p10.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p11.jpg")}>
                              </div>
                              <div data-src={require("assets/img/p12.jpg")}>
                              </div>
                            </AutoplaySlider> */}
                            <br />
                            <br />
                            <br />
                          </CardBody>
                        </Card>
                      </Col>
                    </AccordionDetails>
                  </Accordion>
                </div>{" "}
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography className={classes.heading}>
                        SHAPES LIBRARY
                      </Typography>
                      <Typography className={classes.secondaryHeading}>
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shapes Available
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Col md="12">
                        <Card
                          className="card-pricing card-background"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg21.jpg") + ")",
                          }}
                        >
                          <CardBody>
                            <h6 className="category">SHAPES LIBRARY</h6>
                            <CardTitle tag="h2">Shapes</CardTitle>
                            <p className="info-title text-white">
                              Here are Standard Paver Shapes for you to get
                              familliar with.
                            </p>
                            <br /> <Carousel8 />
                            <br />
                            <p className="info-title text-white">
                              Most shapes and colors are interchangeable. Please
                              be advised only certain shapes come with certain
                              manufacturers.
                            </p>
                            <Row>
                              {" "}
                              <Col md="11">
                                {" "}
                                <h2 className="card-description">
                                  {" "}
                                  Coping Options
                                </h2>{" "}
                                <img
                                  alt="..."
                                  src={require("assets/img/s10.jpg")}
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className={classes.root}>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography className={classes.heading}>
                        COLORS COLLECTION
                      </Typography>
                      <Typography className={classes.secondaryHeading}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color
                        Choices{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Col md="12">
                        <Card
                          className="card-pricing card-background"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg30.jpg") + ")",
                          }}
                        >
                          <CardBody>
                            <h6 className="category">COLORS COLLECTION</h6>
                            <CardTitle tag="h2">Colors</CardTitle>
                            <p className="info-title text-white">
                              With a large variety of colors to choose from the
                              possibilites are endless. This allows our
                              contacted customers to take them home. This way we
                              can provide many solutions to our customers, so
                              you make the right color choice for your paving
                              project.
                            </p>{" "}
                            <p className="info-title text-white">
                              {" "}
                              Here are just some of the colors we carry to give
                              you an idea of what you might like. Remember we do
                              have many different maufacturers so there are tons
                              of colors to choose from.
                            </p>
                            <Row>
                              {" "}
                              <Col>
                                {" "}
                                <AwesomeSlider cssModule={AwesomeSliderStyles}>
                                  <div data-src={require("assets/img/c1.jpg")}></div>
                                  <div data-src={require("assets/img/c2.jpg")}> </div>
                                  <div data-src={require("assets/img/c3.jpg")}></div>
                                  <div data-src={require("assets/img/c4.jpg")}></div>
                                  <div data-src={require("assets/img/c5.jpg")}></div>
                                  <div data-src={require("assets/img/c6.jpg")}></div>
                                  <div data-src={require("assets/img/c7.jpg")}></div>
                                  <div data-src={require("assets/img/c8.jpg")}></div>
                                  <div data-src={require("assets/img/c9.jpg")}></div>
                                </AwesomeSlider>
                                <br />
                                <br />
                                <br />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </AccordionDetails>
                  </Accordion>{" "}
                </div>{" "}
              </Col>
            </Row>
          </Container>

            <br />
          <br />
          <br />
          <br />
          <br />
          <Canvas
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 15], near: 5, far: 20 }}
        onCreated={({ gl }) => gl.setClearColor("lightyellow")}
      >
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Boxes />
        <Effects />
      </Canvas>
        
          <div
            style={{
              backgroundImage:
                "url(" + require("assets/img/xixi.jpg") + ")",
            }}
          >
            <Container>
              <Row>
                <Col className="mr-auto ml-auto" md="8">
                  <h2 className="title">Simpler. Smarter. Faster.</h2>

                  <h4 className="info-title">
                    Solafide Services is founded on our five essential core
                    values.
                  </h4>
                </Col>
              </Row>

              <Row>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-success icon-circle">
                      <i className="now-ui-icons business_money-coins"></i>
                    </div>
                    <h2 className="info-title">Value</h2>
                    <h5 className="info-title">
                      We are competitive and offer cost effective solutions for
                      all parties.
                    </h5>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info info-hover">
                    <div className="icon icon-info icon-circle">
                      <i className="now-ui-icons business_briefcase-24"></i>
                    </div>
                    <h2 className="info-title">Professionalism</h2>
                    <h5 className="info-title">
                      No work will be performed without the utmost level of care
                      and preparedness.
                    </h5>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info info-hover">
                    <div className="icon icon-primary icon-circle">
                      <i className="now-ui-icons sport_user-run"></i>
                    </div>
                    <h2 className="info-title">Flexibility</h2>
                    <h5 className="info-title">
                      We are proud to serve you and will accomodate your needs
                      accordingly.
                    </h5>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-error icon-circle">
                      <i className="now-ui-icons ui-1_settings-gear-63"></i>
                    </div>
                    <h2 className="info-title">Reliability</h2>
                    <h5 className="info-title">We want you to count on US.</h5>
                  </div>
                </Col>
                <Col md="2">
                  <div className="info info-hover">
                    <div className="icon icon-warning icon-circle">
                      <i className="now-ui-icons ui-2_time-alarm"></i>
                    </div>
                    <h2 className="info-title">Efficiency</h2>
                    <h5 className="info-title">
                      Time is not to be wasted and we understand this. Getting
                      the best for your money should not be time taking.
                    </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Canvas
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 15], near: 5, far: 20 }}
        onCreated={({ gl }) => gl.setClearColor("gray")}
      >
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Boxes />
        <Effects />
      </Canvas>
        <div
          className="projects-5"
          data-background="gray"
          style={{
            backgroundImage: "url(" + require("assets/img/xxixx.jpg") + ")",
          }}
        >
       
    
      
          <Container>
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
                    <p className="card-description text-white">
                      We can get the job done and make it a pleasure for you.
                    </p>
                    <Badge className="badge-neutral">
                      <a href="/contact-us">REQUEST A FREE ESTIMATE</a>
                    </Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="info-title">
                    <h4 className="info-title">Pavers </h4>
                    <p className="info-title">
                      Your needs will be met with precision. We care about our
                      customers.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="info-title">
                    <h4 className="info-title">Pressure Washing</h4>
                    <p className="info-title">
                      Let us show you how detailed we can be. Renovating the
                      look of your home coudn't be easier.
                    </p>
                  </div>
                </div>
              {/*  <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                    <h4 className="info-title">Painting</h4>
                    <p className="info-title">
                      No project is too small for our team. Trust us with your
                      home projects.
                    </p>
                  </div> 
                </div>*/}
              </Col>
            </Row>
            <Lottie options={defaultOptions3} />
            <Row>
              <Col className="mr-auto" md="5">
                <br />
                <br />
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
                    <Badge className="badge-neutral">
                      <a href="/contact-us">REQUEST A FREE ESTIMATE</a>
                    </Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="info-title">
                    <h4 className="info-title">Pavers</h4>
                    <p className="info-title">
                      Your needs will be met with precision. We have experience
                      that shows.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="info-title">
                    <h4 className="info-title">Pressure Washing</h4>
                    <p className="info-title">
                      Let us show you how detailed we can be. Our team will
                      always put the utmost effort in making your project a
                      success.
                    </p>
                  </div>
                </div>
                {/* <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="info-title">
                    <h4 className="info-title">Painting</h4>
                    <p className="info-title">
                      No project is too small for our team. We are driven to
                      please within timeframe, and are willing to accomodate
                      your needs.
                    </p>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default AboutUs;
