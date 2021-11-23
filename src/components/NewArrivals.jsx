import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";


import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import { arrivals } from '../data/newArrivals.json'

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function NewArrivals() {



  return (
    <section className="section new" id="new">
      <h2 className="section__title">New Arrivals</h2>
      <Swiper
              spaceBetween={30}
              loop={true}
              initialSlide={2}
              centeredSlides={true}
              breakpoints={{
                "340": {
                    "slidesPerView": 1.3,
                    "spaceBetween": 10
                  },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 3,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 4,
                  "spaceBetween": 50
                }
              }}
            >
        {arrivals?.map(({ image, title, price, discount }) => (
          <SwiperSlide key={title}>
            <div className="new__container container">
              <div className="swiper new-swiper">
                <div /* className="swiper-wrapper" */>
                  <div className="new__content swiper-slide">
                    <div className="new__tag">New</div>
                    <img src={require(`../assets/img/${image}`).default} alt="" className="new__img" />
                    <h3 className="new__title">{title}</h3>
                    <span className="new__subtitle">Accessory</span>

                    <div className="new__prices">
                      <span className="new__price">{price}</span>
                      <span className="new__discount">{discount}</span>
                    </div>

                    <button className="button new__button">
                      <box-icon
                        style={{ width: "20px" }}
                        name="cart-alt"
                        color="white"
                        className="trick__icon"
                      ></box-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
