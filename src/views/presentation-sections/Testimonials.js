import React from "react";

// reactstrap components
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

import "react-awesome-slider/dist/styles.css";

// core components

const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "These guys are true experts in their work -- everything went over
            perfectly."
          </h5>
          <CardTitle tag="h4">Stefan</CardTitle>
          <h6 className="category text-muted">Hotel Manager</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Our painting needs were met and exceeded. We will be looking
            forward to working with Solafide again."
          </h5>
          <CardTitle tag="h4">Mr. Bones</CardTitle>
          <h6 className="category text-muted">Homeowner</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "This team was able to clean my driveway without problems. My
            recommended pressure washers from now on." <br></br>
            <br></br>
          </h5>
          <CardTitle tag="h4">DOĞA</CardTitle>
          <h6 className="category text-muted">Entrepreneur/son</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-testimonials">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Trusted by 800+ People</h2>
            <h5 className="description">
              Our work is confirmed to be of the highest quality by{" "}
              <b>800+ people</b> in over <b>5 cities</b>. This is what some of
              them think:
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <div className="testimonials-people">
              <img
                alt="..."
                className="left-first-person img-raised rellax"
                data-rellax-speed="1"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-second-person img-raised rellax"
                data-rellax-speed="3"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-third-person img-raised rellax"
                data-rellax-speed="2"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-fourth-person img-raised rellax"
                data-rellax-speed="5"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg"
              ></img>
              <img
                alt="..."
                className="left-fifth-person img-raised rellax"
                data-rellax-speed="7"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              ></img>
            </div>
          </Col>
          <Col md="8">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Col>
          <Col md="2">
            <div className="testimonials-people">
              <img
                alt="..."
                className="right-first-person img-raised rellax"
                data-rellax-speed="5"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg"
              ></img>
              <img
                alt="..."
                className="right-second-person img-raised rellax"
                data-rellax-speed="1"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
              ></img>
              <img
                alt="..."
                className="right-fourth-person img-raised rellax"
                data-rellax-speed="7"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg"
              ></img>
              <img
                alt="..."
                className="right-fifth-person img-raised rellax"
                data-rellax-speed="3"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
              ></img>
              <img
                alt="..."
                className="right-sixth-person img-raised rellax"
                data-rellax-speed="5"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
              ></img>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
