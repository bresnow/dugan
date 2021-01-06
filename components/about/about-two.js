import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
import aboutImage from "../../assets/images/piggy-bank.svg";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  Our Mission
                </p>
                <h3>A Reassuring Plan For Your Future. </h3>
              </div>
              <p className="mb-40 pr-10">
                Our mission is to make everyone aware of the control they wield
                over their own future by developing strategic methods and providing 
                expert aid that guarantees a serene transition from hard-working 
                American to care free retiree. 
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Knowlegable Aide
                       That Cares
                    </h3>
                    <p>
                    A relationship with one of our experts begins with 
                    your first consultation and lasts the rest of your life.
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Stress-Free 
                      and Free of Charge
                    </h3>
                    <p>
                      Achieving our mission does not cost you a single dime. Knowledge,
                      planning and guidance is a right not a service. We'll even help you with 
                      the paperwork.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i >
                <img src={aboutImage} width='130' alt="" />
            </i>
                    <h3>Take advantage of the control and freedom you already have.</h3>
                  </div>
              <Link href="/contact">
                <a className="thm-btn dynamic-radius">Schedule A Meeting</a>
              </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
