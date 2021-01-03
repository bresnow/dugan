import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "../assets/images/fed-logos/01.jpg";
import brandImage2 from "../assets/images/fed-logos/02.jpg";
import brandImage3 from "../assets/images/fed-logos/03.jpg";
import brandImage4 from "../assets/images/fed-logos/04.jpg";
import brandImage5 from "../assets/images/fed-logos/05.jpg";
import brandImage6 from "../assets/images/fed-logos/07.jpg";
import brandImage7 from "../assets/images/fed-logos/08.jpg";
import brandImage9 from "../assets/images/fed-logos/09.jpg";
import brandImage10 from "../assets/images/fed-logos/10.jpg";
import brandImage11 from "../assets/images/fed-logos/11.jpg";
import brandImage12 from "../assets/images/fed-logos/12.jpg";
import brandImage13 from "../assets/images/fed-logos/13.jpg";
import brandImage14 from "../assets/images/fed-logos/14.jpg";
import brandImage15 from "../assets/images/fed-logos/15.jpg";
import brandImage16 from "../assets/images/fed-logos/16.jpg";
import brandImage17 from "../assets/images/fed-logos/17.jpg";
import brandImage18 from "../assets/images/fed-logos/18.jpg";
import brandImage19 from "../assets/images/fed-logos/19.jpg";
import brandImage20 from "../assets/images/fed-logos/20.jpg";
import brandImage21 from "../assets/images/fed-logos/21.jpg";
import brandImage22 from "../assets/images/fed-logos/22.jpg";
import brandImage23 from "../assets/images/fed-logos/23.jpg";
import brandImage24 from "../assets/images/fed-logos/24.jpg";
import brandImage25 from "../assets/images/fed-logos/25.jpg";
import brandImage26 from "../assets/images/fed-logos/26.jpg";
import brandImage27 from "../assets/images/fed-logos/27.jpg";
import brandImage28 from "../assets/images/fed-logos/28.jpg";
import brandImage29 from "../assets/images/fed-logos/29.jpg";
import brandImage30 from "../assets/images/fed-logos/30.jpg";
import brandImage31 from "../assets/images/fed-logos/31.jpg";
import brandImage32 from "../assets/images/fed-logos/32.jpg";
import brandImage33 from "../assets/images/fed-logos/33.jpg";
import brandImage34 from "../assets/images/fed-logos/06.jpg";
const BrandCarousel = ({ extraClass }) => {
  const fdaStyle = {
    marginTop: 30,
  };

  const brandCarouselOptions = {
    spaceBetween: 300,
    slidesPerView: 2,
    autoplay: { delay: 1000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 3,
      },
    },
  };

  return (
      <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
        <Container>
          <div className="block-title">
            <p>A few branches in which we specialize</p>
            <h3>Out of the many we have served.</h3>
          </div>
          <Swiper {...brandCarouselOptions}>
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img style={fdaStyle} src={brandImage} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ height: "125%", width: "125%" }}
                  src={brandImage6}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage10} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage11} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage12} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage13} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ height: "125%", width: "125%" }}
                  src={brandImage14}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage15} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage16} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage17} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage18} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage19} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage20} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage21} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage22} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage23} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage24} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage25} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage26} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage27} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage28} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage29} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage30} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage31} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage32} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage33} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brandImage34} alt="" />
              </SwiperSlide>
            </div>
          </Swiper>
        </Container>
      </div>
    
  );
};

export default BrandCarousel;
