import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import Sl1 from "./assets/slider3.jpg";
import Sl2 from "./assets/slider4.png";
import Sl3 from "./assets/slider1.jpg";
import Sl4 from "./assets/slider2.jpg";
import Sl5 from "./assets/sl1.jpg";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}> 
        <img
          className="d-block w-100"
          src={Sl1}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1 Title</h3>
          <p>Description for slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Sl2}
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2 Title</h3>
          <p>Description for slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}> 
        <img
          className="d-block w-100"
          src={Sl3}
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3 Title</h3>
          <p>Description for slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}> 
        <img
          className="d-block w-100"
          src={Sl4}
          alt="Slide 4"
        />
        <Carousel.Caption>
          <h3>Slide 3 Title</h3>
          <p>Description for slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}> 
        <img
          className="d-block w-100"
          src={Sl5}
          alt="Slide 5"
        />
        <Carousel.Caption>
          <h3>Slide 3 Title</h3>
          <p>Description for slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
