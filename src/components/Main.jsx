import React, { useEffect, useState } from "react";
import SwiperSection from "./SwiperSection";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import swiperInfo from '../data/swiper.json'

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Main() {


  return (
    <main className="main">
      <section className="home container" id="home">
        <div className="swiper home-swiper">
          <div className="swiper-wrapper">
            <Swiper
              slidesPerView={1}
              initialSlide={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
            >
              {swiperInfo?.info?.map((info, i) => (
                <SwiperSlide  key={i}>
                  <SwiperSection info={info} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
