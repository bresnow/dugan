import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CallToActionTwo = () => {
  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
      ></div>
      <Container className="container pt-80 pb-80">
        <i className="azino-icon-charity call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title">
              <p>
                Our Vision
              </p>
              <h3>
                Planning your future ...<br /> Made simple.
              </h3>
            </div> 
          </Col>
          {/* <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <Link href="#">
                <a className="scroll-to-target thm-btn">Take Control</a>
              </Link>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
