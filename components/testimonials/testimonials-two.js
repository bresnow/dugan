import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import Deb from '../../assets/images/testimonials/deb.jpg'
import Dixie  from '../../assets/images/testimonials/dixie.jpg'
import Doug from '../../assets/images/testimonials/doug.jpg'
import Frank from '../../assets/images/testimonials/frank.jpg'
import Gary from '../../assets/images/testimonials/gary.jpg'
import JamesG from '../../assets/images/testimonials/jamesG.jpg'
import Jacqueline from '../../assets/images/testimonials/jaqueline.jpg'
import NoPhoto from '../../assets/images/testimonials/nophoto.png'
import Randy from '../../assets/images/testimonials/randy.jpg'
import Shaprita from '../../assets/images/testimonials/shaprita.jpg'
import Shirletta from '../../assets/images/testimonials/shirletta.jpg'
import StephenWalsh from '../../assets/images/testimonials/stephenwalsh.jpg'
import StevenCosta from '../../assets/images/testimonials/stevecosta.jpg'
import SteveDon from '../../assets/images/testimonials/stevedon.jpg'
import m1 from "../../assets/images/testimonials/m1.jpg";
import m from "../../assets/images/testimonials/m.jpg";
import w from "../../assets/images/testimonials/w.jpg";
import w1 from "../../assets/images/testimonials/w1.jpg";
import w2 from "../../assets/images/testimonials/w2.jpg";
import m2 from "../../assets/images/testimonials/m2.jpg";
import w3 from "../../assets/images/testimonials/w3.jpg";
import w4 from "../../assets/images/testimonials/w4.jpg";
import w5 from "../../assets/images/testimonials/w5.jpg";
import w6 from "../../assets/images/testimonials/w6.jpg";
import w7 from "../../assets/images/testimonials/w7.jpg";
import w8 from "../../assets/images/testimonials/w8.jpg";
import Jack from "../../assets/images/testimonials/jack.jpg";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
     image: JamesG,
    name: "James Greenway",
    text:
      "Sam got me going in the right direction and helped me prepare for my future. He is top notch and knows everything you need for the transition to retirement. Thank you Sam.",
  },
  {
     image: Jacqueline,
    name: "Jacqueline Teen-Williams",
    text:
      "Sam Eberts analyzed my work history with the VA along with my retirement goals. He clarified misinformation that I had acquired throughout the years from other federal employees. In a nutshell, he explained where I am now verses what actions are needed to retire comfortably.",
  },
  {
     image: Shaprita,
    name: "Shaprita Williams",
    text:
      "I had wonderful conversation with Mary Eberts about my retirement strategy. It was a subject that I was hesitant about, but she really made me feel good about the strategy we discussed. She was very knowledgeable about the situation. She gave me more information than I expected.",
  },
  {
     image: Randy,
    name: "Randy Stemple",
    text:
      "Met with Kevin Dugan to discuss my retirement numbers. He was super informative and explained things in great detail. Came away with a better understanding of my future and how to proceed forward. Thanks Kevin for the eye opening meeting!",
  },
  {
     image: Gary,
    name: "Gary Brobson",
    text:
      "Kevin was very pleasant and very informative about all the information I was looking for. And there was no hesitation in answers to my questions. I walked away from that meeting with a better understanding of my retirement goals. Thanks again Kevin.",
  },
  {
     image: m,
    name: "Eric Chamberlain",
    text:
      "So far, working with Kevin Dugan has been a pleasure. I believe he knows very clearly what he's doing, and he's making the transition much easier than I thought it would be. Very good guy to work with.",
  },
  {
     image: StevenCosta,
    name: "Steve Costa",
    text:
      "I work for the USPS, just had a retirement consultation with Alex Leyberman. Alex took all the time needed to explain my current benefits and retirement strategies. Alex also answered all of our questions.",
  },
  {
     image: w6,
    name: "Peri Stephenson",
    text:
      "I spoke with Alex who was very knowledgeable and offered me valuable advice moving forward towards my retirement goals. I highly recommend!",
  },
  {
     image: SteveDon,
    name: "Steve Donovan",
    text:
      "Kevin Dugan listened carefully to my retirement goals and plans and I am now financially rock solid and newly retired. I cannot recommend him highly enough.",
  },
  {
     image: Frank,
    name: "Frank Lisath",
    text:
      "Kevin Dugan did an excellent job helping me and my wife Joan through the difficult federal retirement process. He also helped us tremendously with financial planning and gave us the advice we were looking for. His knowledge was phenomenal.",
  },
  {
     image: m1,
    name: "Joseph Williams",
    text:
      "Kevin is a great person, he explained everything about retirement so you could understand it more clearly. He broke it down on each phase of what going to be happening when I retire.",
  },
  {
     image: w1,
    name: "Karin Haser",
    text:
      "Kevin Dugan went above and beyond to help me understand retirement and to take the time to help me set up for my future investments. He’s very thorough and is very great to work with I would highly recommend him.",
  },
  {
     image: m2,
    name: "Tom M. Sullivan",
    text:
      "The debt I now owe Sam is a lifelong debt for the whole of my retirement. He wasn't just a knowledgeable counselor; I trust he will be a friend for years to come.",
  },

  {
     image: w2,
    name: "Tammie Brown Satterfield ",
    text:
      "Big Shout out to Sam Eberts! He is very knowledgeable, patient & really gave me the best advise possible for my retirement! Never an issue reaching out to him with a question, he always got back to me quickly. He made it so much easier & less stressful!",
  },
  {
     image: w3,
    name: "Deborah DeSantis",
    text:
      "Sam Eberts was wonderful to work with. He answered all of my questions and gave me great advice. He is a great guy and very knowledgeable.",
  },
  {
     image: Deb,
    name: "Deb Carver",
    text:
      "I would recommend Sam Eberts and have to everyone. He loves his job and it shows. Let him know what you need and want and he will guide you through it. Extremely patient young man. I have been retired for one year and he’s still there for me.",
  },
  {
     image: Jack,
    name: "Jack Welsh",
    text:
      "I have thoroughly enjoyed working with Sam Eberts. He is not only extremely knowledgeable on retirement planning he is also a very nice guy and I look forward to working with him in the future.",
  },
  {
     image: w4,
    name: "Sherri Johnson Karaptian",
    text:
      "I was just looking for advice about starting to gather my ducks for a future date to retire, after talking to Sam Eberts (he’s my guy) , my ducks are firmly lined up in a row an I’m retiring next year. Yay!!",
  },
  {
     image: StephenWalsh,
    name: "Stephen Walsh",
    text:
      "Mary Eberts took all the information and gave me a look into my retirement at age 60 and 62. Considering I am 56, the evaluations gave me a clearer picture of my future. I am appreciative and thank Mary for her time. I look forward to working with her from now to retirement whenever that may be.",
  },
  {
     image: w5,
    name: "Susan Prystauk",
    text:
      "Alex has been so helpful in helping me determine what I need to do going forward. I already feel like I’m moving toward a secure and enjoyable retirement! Thanks Alex for your assistance!",
  },
  {
     image: w,
    name: "Khandi KariLynn Myers",
    text:
      "Very good conversation with Sam Eberts about my retirement. He is knowledgeable an s courteous. I recommend him.",
  },
  {
     image: w7,
    name: "Deena Green",
    text:
      "Sam was very helpful and knowledgeable. Saved us money on our first visit with information on ways to utilize an inheritance.",
  },
  {
     image: Shirletta,
    name: "Shirletta Murray",
    text:
      "Sam Ebert is my consultant and he did a phenomenal job helping me with my retirement plans. I wish I had knew this information 5 years ago when I worked overseas, I would have saved a lot more money.",
  },
  {
     image: w8,
    name: "Sharon Clinton",
    text:
      "Working with Sam Eberts has been a pleasant experience. I would highly recommend him to anyone considering their retirement options. He is one of the best.",
  },
  {
     image: Dixie,
    name: "Dixie Trautman",
    text:
      "I dealt with Sam. He was very informative and patient. I learned a great deal about my benefits from him. I was a little scared for my retirement but now I'm actually a little excited. Thanks Sam!",
  },
  {
     image: Doug,
    name: "Doug Leverenz",
    text:
      "After a couple conversations with Sam Eberts I feel much more confident about retirement. He explained so many strategies helped me make a plan. It feels good having him in my corner.",
  },
];


const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 5,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
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
                The countless people we have helped know the value of knowledge,
                planning and financial control. We asked that they tell the
                world and they deliver time and time again.
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
