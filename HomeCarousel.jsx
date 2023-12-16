import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              src="Banner - 10 years of Saahas-04_0.jpg"
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="Banner - 10 years of Saahas-06_02222.jpg"
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="Banner - 10 years of Saahas-07_03333333.jpg"
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="Banner - 10 years of Saahas-08_044444444.jpg"
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="Banner - 10 years of Saahas-03_0555555.jpg"
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;