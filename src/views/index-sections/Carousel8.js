import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/s1.jpg"),
    altText: "",
    caption: "4 x 8 Brick",
  },
  {
    src: require("assets/img/s2.jpg"),
    altText: "",
    caption: "Boca Rectangles & Squares",
  },
  {
    src: require("assets/img/s3.jpg"),
    altText: "",
    caption: "Bishop's Hat",
  },
  {
    src: require("assets/img/s4.jpg"),
    altText: "",
    caption: "Boca Grande Rectangles & Squares",
  },
  {
    src: require("assets/img/s5.jpg"),
    altText: "",
    caption: "Cobblestone",
  },
  {
    src: require("assets/img/s6.jpg"),
    altText: "",
    caption: "8 x 8 Square",
  },
  {
    src: require("assets/img/s7.jpg"),
    altText: "",
    caption: "Decor",
  },
  {
    src: require("assets/img/s8.jpg"),
    altText: "",
    caption: "Boca Trip",
  },
  {
    src: require("assets/img/s9.jpg"),
    altText: "",
    caption: "Key Largo",
  },
];

function Carousel8() {
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
      <div className="section" id="carousel" data-background-color="black">
        <Container>
          <div className="title"></div>
          <Row className="justify-content-center">
            <Col lg="40" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img
                        src={item.src}
                        alt={item.altText}
                        className="d-block"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Carousel8;
