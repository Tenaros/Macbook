import React from "react";
import Slider from "react-slick";

//Import images
import SlideOne from "../../resources/images/slide_one.jpg";
import SlideTwo from "../../resources/images/slide_two.jpg";
import SlideThree from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideOne})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideTwo})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${SlideThree})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
