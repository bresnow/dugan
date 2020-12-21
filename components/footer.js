import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-light.png";
// import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
// import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="160"
                      alt=""
                    />
                  </a>
                </Link>
                <p>Federal Retirement Experts</p>
                <ul className="list-unstyled footer-widget__contact">
                  {/* <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>666 888 0000
                    </a>
                  </li> */}
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>support@duganbrown.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>545 Metro Place South #100<li> Dublin, OH 43017</li>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40"></div>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url="#"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2020 Dugan Brown Retirement</p>
          <div className="footer-social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
