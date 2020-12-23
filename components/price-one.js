import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../assets/images/shapes/heart-2-1.png";

const PRICE_ONE_DATA = [
  {
    title: "Vision",
    icon: "fa fa-paper-plane",
    extraClassName: "",
    price: '',
    options: [
      {
        text: "Mission & Vision Goes Here",
      },
      
    ],
    button: {
      link: "#",
      label: "Learn More",
    },
  },
  {
    title: "Mission",
    icon: "fa fa-plane",
    extraClassName: "gold",
    price: "",
    options: [
      {
        text: "Mission & Vision Goes Here",
      },
      
    ],
    button: {
      link: "#",
      label: "Learn More",
    },
  },
];
const PriceOne = () => {
  return (
    <section className="price-one">
      <Container>
        <Row>
          <Col xl={5}>
            <div className="price-one__main">
              <div className="block-title">
                <h3>
                  Mindfulness <br /> at all times.
                </h3>
              </div>
              <p>
                With Mindfulness in place as the final component of our core
                values, we promote the ideal that everything should be done with
                a vigorous amount of conscientiousness, with each of our actions
                dedicated to bringing us just a tiny bit closer to our lofty
                vision* for a world.
              </p>
            </div>
          </Col>
          <Col xl={7}>
            <Row>
              {PRICE_ONE_DATA.map(
                (
                  { title, icon, price, extraClassName, options, button },
                  index
                ) => (
                  <Col md={6} key={`price-one-key-${index}`}>
                    <div className={`price-one__single ${extraClassName}`}>
                      <i className={icon}></i>
                      <p>{title}</p>
                      <h3>{price}</h3>
                      <ul className="price-one__list">
                        {options.map(({ text }, index) => (
                          <li key={`price-one-list-key-${index}`}>{text}</li>
                        ))}
                      </ul>
                      <Link href={button.link}>
                        <a className="thm-btn dynamic-radius">{button.label}</a>
                      </Link>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PriceOne;
