import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.jpg";
import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";
import testimonialImage4 from "../../assets/images/resources/testimonial4.png";
import testimonialImage5 from "../../assets/images/resources/testimonial5.png";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage2,
    name: "Steve Donovan",
    text:
      "Few times in my life have I made a decision that has benefited me like the one I made when I attended a retirement seminar by Kevin Dugan... [He] listened carefully to my retirement goals and plans and I am now financially rock solid and newly retired. And honest to God, today I received in the mail a check for 899.00 dollars for overpayment on a life insurance plan that I had been enrolled in . Kevin caught the error and sent the paperwork to get a refund, and even helped me fill out the forms. I cannot recommend Kevin Dugan highly enough . He always has my best interests as his top priority. And I trust him implicitly."
  },
  {
    image: testimonialImage1,
    name: "Susan Prystauk",
    text:
      "I have had 2 phone consultations with Alex Leyberman about my retirement. He’s been so helpful in helping me determine what I need to do going forward. I already feel like I’m moving toward a secure and enjoyable retirement! Thanks Alex for your assistance!"
  },
  {
    image: testimonialImage3,
    name: "Sharon Clinton",
    text:
      "Working with Sam Eberts has been a pleasant experience. Planning a retirement and looking at all my options. He was truly knowledgeable and patient and through explaining what my options are. I would highly recommend Sam to any one considering this. He is one of the best."
  },
  {
    image: testimonialImage4,
    name: "Shaprita Williams",
    text:
      "I had wonderful conversation with Mary Eberts about my retirement strategy. It was a subject that I was hesitate about but she really made me feel good about the strategy we discussed. She was very knowledgeable about the situation. She gave me more information than I expected. I really appreciate it. I know I will be prepared and ready to take this journey."
  },
  {
    image: testimonialImage5,
    name: "Frank Lisath",
    text:
      "Kevin Dugan did an excellent job helping me and my wife Joan through the difficult federal retirement process. He also helped us tremendously with financial planning and gave us the advice we were looking for. His knowledge was phenomenal — on the Paperwork, how to set up our accounts with no worries for us. We highly recommend him to anyone."
  }
];

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 5,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={7}>
              <BlockTitle
                title={`All we ask in return\n is that you spread the word.`}
                tagLine="Testimonials"
              />
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                The countless people we have helped know the value of knowledge, planning and financial control. We asked that they tell the world and they deliver time and time again.
              </p>
            </Col>
          </Row>
        </div>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {TESTIMONIALS_DATA.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className="testimonials-two__meta">
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
