import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import slid1 from "./../../assets/Slider/slider1.jpg";
import slid2 from "./../../assets/Slider/slider2.jpg";

const Slider = () => {
  return (
    <section className="container d-block w-50">
      <div className="headSlider">
        <h2>What People Say</h2>
        <p>
          When unknow printer took a gallery of type and scramblted it to make a
          type specimen book
        </p>
      </div>
      <div className="slidy">
        <Carousel variant="dark d-block m-auto">
          <Carousel.Item>
            <img className="d-block" src={slid1} alt="First slide" />
            <div className="text">
              <h5>First slide label -1</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={slid2} alt="Second slide" />
            <div className="text">
              <h5>Second slide label -2</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={slid1} alt="Third slide" />
            <div className="text">
              <h5>Third slide label -3</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
