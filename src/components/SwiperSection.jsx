import React from "react";
import ReactHtmlParser from 'react-html-parser';


export default function SwiperSection({ info }) {



  return (
    <section className="swiper-slider">
      <div className="home__content grid">
        <div className="home__group">
        <img src={require("../assets/img/" + info.img ).default} className="home__img"/>
          <div className="home__indicator"></div>

          <div className="home__details-img">
            <h4 className="home__details-title">{info.details_title}</h4>
            <span className="home__details-subtitle">{info.details_subtitle}</span>
          </div>
        </div>

        <div className="home__data">
          <h3 className="home__subtitle">{info.home_subtitle}</h3>
          <h1 className="home__title">
            {ReactHtmlParser(info.home_title)}
          </h1>
          <p className="home__description">
           {info.home_description}
          </p>

          <div className="home__buttons">
            <a href="#" className="button">
              Book Now
            </a>
            <a href="#" className="button--link button--flex">
              Track Record <box-icon name='right-arrow-alt' color="white"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
