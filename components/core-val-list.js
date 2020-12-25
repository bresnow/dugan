import React from "react";
import FeaturedCause from "./featured-cause";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import image1 from "../assets/images/resources/service-1-1.jpg";
import image2 from "../assets/images/resources/service-1-2.jpg";
import image3 from "../assets/images/resources/service-1-3.jpg";


const CORE_VAL_DATA = [
    {
        extraClassName: "background-primary",
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
      {
        extraClassName: "background-gold",
        image: image3,
        title: `Mindfulness At All Times`,
        text: "",
        link: "#",
      },
];
const CoreList = () => {

  return (
    <section className="service-two pt-0 pb-100">
      <Container>
        <Col>
        <Row>
          {CORE_VAL_DATA.map(({ extraClassName, image, title, text, link }, index) => (
                   <Row style={{padding:30}} key={`service-two-key-${index}`}>
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
        </Row>
        </Col>
        <FeaturedCause />
      </Container>
      
      
    </section>
  );
};

export default CoreList;
