import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40" id="mission">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>Make a Difference</p>
                <h3>Knowledge is the key to a stress-free financial plan.</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="block-title">
                <h5>Vision Statement</h5>
              </div>
              <p className="team-about__top-text">
                A society whose civil servants and military personnel can
                transition to retirement seamlessly, without financial concerns.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <div className="block-title">
                <h5>Mission Statement</h5>
              </div>
              <p className="team-about__top-text">
                To empower every federal employee, no matter their background,
                with unrestricted access to reliable and easy-to-understand
                information about their retirement.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
