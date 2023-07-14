"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Crousal = () => {
  return (
    <div className="relative text-white text-[20px] h-90 w-4/5 mx-auto	mt-2 border z-0	">
      <Carousel
        className="z-0	"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div className="border	 ">
          <img
            src="/slide-3.png"
            className="h-90 object-cover border-orange-700"
          />
        </div>
        <div className="border	 ">
          <img
            src="/slide-2.png"
            className="h-90 object-cover border-orange-700"
          />
        </div>
        <div className="border	 ">
          <img
            src="/slide-1.png"
            className="h-90 object-cover border-orange-700"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Crousal;
