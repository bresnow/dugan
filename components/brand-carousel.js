import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "../assets/images/usps.png";
import brandImage2 from "../assets/images/resources/slice2.png";
import brandImage3 from "../assets/images/resources/slice3.png";
import brandImage4 from "../assets/images/resources/slice9.png";
import brandImage5 from "../assets/images/resources/slice6.png";
import brandImage6 from "../assets/images/resources/slice7.png";
import brandImage7 from "../assets/images/resources/slice8.png";


const BrandCarousel = ({ extraClass }) => {

  const fdaStyle = {
    marginTop: 30
  }

  const brandCarouselOptions = {
    spaceBetween: 300,
    slidesPerView: 2,
    autoplay: { delay: 1000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 3
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 3
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 3
      }
    }
  };

  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img style = {fdaStyle} src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style = {fdaStyle} src={brandImage4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage7} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
