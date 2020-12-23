import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedCause from "../featured-cause";
import image1 from "../../assets/images/resources/service-1-1.jpg";
import image2 from "../../assets/images/resources/service-1-2.jpg";
import image3 from "../../assets/images/resources/service-1-3.jpg";

const SERVICE_TWO_DATA = [
  {
    extraClassName: "background-secondary",
    image: image1,
    title: `Integrity First`,
    text: "",
    link: "#",
  },
  {
    extraClassName: "background-secondary",
    image: image2,
    title: `Service Before Self`,
    text: "",
    link: "#",
  },
  {
    extraClassName: "background-secondary",
    image: image3,
    title: `Excellence In All We Do`,
    text: "",
    link: "#",
  },
];
const ServiceTwo = () => {
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="service-two">
    {/* <section style={{zIndex: 1}} className="fact-counter pt-100">
        <Container>
          <Row>
            <Col className="text-center">
              <p >
                In 8 years of service with the Air Force, Wayne Brown learned
                a great deal about brotherhood and discipline. When he left
                the service honorably, he was also instilled with the three
                core values held by the Air Force.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
      <FeaturedCause />
      <Container style={{paddingTop:80}}>
        <Swiper {...sliderOptions}>
          {SERVICE_TWO_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
              <SwiperSlide key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="service-two__box-inner">
                    <p>{text}</p>
                    <h3>
                      <Link href={link}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default ServiceTwo;
