import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../../assets/images/main-slider/Cover.png";
import banner2 from "../../assets/images/main-slider/lady-smartphone.jpg";
import banner3 from "../../assets/images/group-trio.png";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const pStyle = {
    fontColor: "blue",
  };
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 10000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <div
              className="image-layer2"
              style={{ marginLeft:'40%', backgroundImage: `url(${banner1})` }}
            ></div>
            <Row className="justify-content-end">
              <Col xl={7} lg={12} className="text-left">
                <p>FREE</p>
                <h2>
                  Federal Retirement
                  <br /> Consultations
                </h2>
                <a
                  href="/about"
                  data-target=".core-values"
                  className="scroll-to-target thm-btn"
                >
                  Learn More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className="justify-content-end">
              <Col xl={8} lg={12} className="text-right">
                <p>
                  Everyone deserves accurate information regarding their
                  benefits.
                </p>
                <h2>
                  <span className="iconic-text">That Information</span>
                  <br /> Should Also Be
                  <br /> Free.
                </h2>
                <a
                  href="/contact"
                  data-target=".contact"
                  className="scroll-to-target thm-btn "
                >
                  Schedule A Free Consultation
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide> */}

        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
