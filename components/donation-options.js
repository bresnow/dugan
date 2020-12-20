import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";
import Link from 'next/link';
const DonationOptions = () => {
  return (
    <section className="donate-options pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  Meet With An Expert
                </p>
                <h3>
                  The future is in your hands. <br /> We're just here to guide you .
                </h3>
              </div>
              <p>
                We are the best option concerning federal retirement. Not because of how much
                we know, or how much more you will gain, but how much we care. The invaluable
                service that everyone receives is simply our standard practice.  {" "}
              </p>
              {/* <div className="donate-options__call">
                <i className="azino-icon-telephone"></i>
                <div className="donate-options__call-content">
                  <p>
                    Want to speak directly to an expert? <br />{" "}
                    <span>Call us now:</span>{" "}
                    <a href="tel:666-888-0000">666 888 0000</a>
                  </p>
                </div>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <form
              action="#"
              className="donate-options__form wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <h3 className="text-center">Start Planning</h3>
              <p className="text-center">
              Take the first step and book a meeting with an expert from
              our team to realize your future's true potential.
              </p>
              <Link href="/contact">
              <button type="submit" className="thm-btn ">
                
                Schedule A Consultation
              </button>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;
