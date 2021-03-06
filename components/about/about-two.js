import React from "react";
import Link from "next/link";
import {Link as ScrollLink} from 'react-scroll';
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
                <p>Our Mission</p>
                <h3>A Reassuring Plan For Your Future. </h3>
              </div>
              <p className="mb-40 pr-10">
                Our <Link
                href='/about#mission'
            to="mission"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          ><a >mission</a></Link> is to empower federal employees with control over
                their future by providing knowledge and financial strategy --
                transitioning hard-working Americans to care-free retirees.
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Experts Who
                      Care
                    </h3>
                    <p>
                      A relationship with one of our experts begins with your
                      first consultation and lasts the rest of your life.
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Stress-Free
                      and Free of Charge
                    </h3>
                    <p>
                      Achieving our mission does not cost you anything. We
                      believe knowledge, planning, and guidance are rights, not
                      services. We'll even help with the paperwork.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i>
                      <img src={aboutImage} width="130" alt="" />
                    </i>
                    <h3>
                      Take advantage of the control and freedom you already
                      have.
                    </h3>
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
