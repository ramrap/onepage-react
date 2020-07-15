import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="carousel" style={{backgroundColor:"",height:"",padding:"0px",maxHeight:"500px"}}>
        
        <Slider {...settings}>
          <div>
            <img src="https://cdn.dribbble.com/users/225019/screenshots/8172256/media/2616398eaa72270b9f4ccca27ffb335c.png" width="100%" ></img>
          </div>
          
        </Slider>
      </div>
    );
  }
}