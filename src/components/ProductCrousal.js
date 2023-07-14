"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const ProductCrousal = ({ images }) => {
  console.log(images, "ame");
  return (
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={60}
      className="productCarousel   p-40 pt-10"
    >
      {images.map((image) => (
        <img src={image.attributes.url} className="object-cover" />
      ))}
    </Carousel>
  );
};

export default ProductCrousal;
