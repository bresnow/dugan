import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-to-action-two" id="vision">
      <Container>
        <div className="azino-icon-magnifying-glass call-to-action-two__icon">
          <i className="azino-icon-"></i>
        </div>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="call-to-action__content">

              <div className="block-title">
                <p>Vision Statement</p>
                <h2 style={{ color: "white" }}>
                  A society whose civil servants and military personnel can
                  transition to retirement seamlessly, without financial
                  concerns.
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
