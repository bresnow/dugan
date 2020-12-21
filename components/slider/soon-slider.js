import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import logoDark from "../../assets/images/logo-light.png";

import banner1 from "../../assets/images/main-slider/group-photo.jpg";
import banner2 from "../../assets/images/main-slider/lady-smartphone.jpg";
import banner3 from "../../assets/images/main-slider/workshop.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider2 = () => {
  const pStyle = {
    fontSize: 30,
  }
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: false
    },
    autoplay: {
      delay: 0
    }
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
        <Col style={{marginLeft:35, marginTop:55}} sm={12} md={12} lg={12} xl={2}>
          <div className="logo-box">
            
              <a aria-label="logo image">
                <img src={logoDark} width="160" alt="" />
              </a>
            
           
          </div>
          </Col>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
          
            <Row className="justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <p style= {pStyle}>Dugan Brown Federal Retirement Experts.</p>
                <h2>
                  Launching<br /> Soon.
                </h2>
                <a>
                  
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
                <p style= {pStyle}>Everyone deserves accurate information regarding their benefits.</p>
                <h2>
                  <span className="iconic-text">That Information</span><br /> Should
                  Also Be<br /> Free.
                </h2> */}
                {/* <a
                  href="/contact"
                  data-target=".contact"
                  className="thm-btn "
                >
                  Coming Soon
                </a> */}
              {/* </Col>
            </Row>
          </Container>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <Row className="justify-content-end">
              <Col xl={8} lg={12} className=" text-right">
                <p style= {pStyle}>Set your own pace around your busy schedule.</p>
                <h2>
                  Video Courses and <br /> Online Workshops.
                </h2>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div> */}
      </Swiper>
    </section>
  );
};

export default MainSlider2;
