import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CallToActionTwo = () => {
  return (
    <section className="call-to-action-two" id='mission'>
      <div className="call-to-action-two__bg"></div>
      <Container className="container pt-80 pb-80">
        <i className="azino-icon-charity call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title" >
              <p>Mission Statement</p>
              <h2 style={{ color: "white" }}>
                To empower every federal employee, no matter their background,
                with unrestricted access to reliable and easy-to-understand
                information about their retirement.
              </h2>
            </div>
          </Col>
        
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            c
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
