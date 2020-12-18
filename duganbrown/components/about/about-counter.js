import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartHand from "../../assets/images/icons/slice12.svg";
import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";

const AboutCounter = () => {
  
  const picStyle = {
    marginBottom: 50
  };

  const blurbStyle = {
    marginTop: 80
  };

  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div style={blurbStyle} className="block-title">
              <p>
                We believe you deserve the best retirement planning.
              </p>
              <h3>
                Turning our beliefs <br />
                into reality.
              </h3>
            </div>
            <p className="about-counter__text">
             Our experts equip you with the knowledge that is required <br />{" "}
             to make intelligent and well-informed financial decisions. <br />{" "}
             Ensuring you have the necessary information to enjoy retirement to <br />{" "}
             the fullest is a massive undertaking which should not be <br />{" "}
             managed by someone with less than an elite understanding <br />{" "}
             of your system.{""}
            </p>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={heartHand} width="80" alt="" />
                <p>We are here to support you every step of the way.</p>
              </div >
              <img style={picStyle} src={aboutImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
