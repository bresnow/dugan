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
    extraClassName: "background-red",
    image: image1,
    title: `Integrity First`,
    text: "",
    link: "#",
  },
  {
    extraClassName: "background-white",
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
    
      
      <Container >
        {/* <Swiper {...sliderOptions}> */}
          {SERVICE_TWO_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
               <Row key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})`}}
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
               </Row>
            )
          )}
        {/* </Swiper> */}
      </Container>
    </section>
  );
};

export default ServiceTwo;
