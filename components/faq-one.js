import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/resources/faq-box-1-1.jpg";
import {Link as ScrollLink} from 'react-scroll'

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`,
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-30 pb-120">
      <Container>
        <Row>
          <Col xl={5}>
            <div className="price-one__main">
              <div className="block-title"></div>
              <p>
                At Dugan Brown, we proudly base our core values on these same
                ideals. Integrity, Service, and Excellence are crucial parts of
                our company’s <a href='/#mission'>mission</a>, as well as our <a href='/#mission'>vision</a> for the world. We
                strive to maintain these principles in our interactions with
                colleagues and each person that we help with retirement.
              </p>
            </div>
            <div style={{marginTop: -30}} className="price-one__image-box">
              <div className="price-one__image-box-content">
                <p style={{ fontSize: 18 }}>
                  With Mindfulness in place as the final component of our core
                  values, we promote the ideal that everything should be done
                  with a vigorous amount of conscientiousness, keeping our
                  foundational principles at the forefront of every interaction
                  and bringing us just a tiny bit closer to our lofty <a href='/#mission'>vision</a> for
                  a world.
                </p>
              </div>
            </div>
          </Col>
          {/* </Col>
          <Col lg={6}>
            <div className="faq-one__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Help People Now
                </p>
                <h3>
                  Charity for the people <br /> you care about.
                </h3>
              </div>

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="1"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col> */}
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={heart1} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div>
              <img src={faqImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
