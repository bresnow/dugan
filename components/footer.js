import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/signature-logo-white.png";
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
                    <img style={{ marginBottom: -20}}
                      src={logoLight}
                      className="footer-widget__logo"
                      width="220"
                      alt=""
                    />
                  </a>
                </Link>
                <p style={{ align: "center" }}></p>
                <ul className="list-unstyled footer-widget__contact">
                <li>
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:8773273239">877-DB-READY</a>
                      <p
                        style={{
                          color: "grey",
                          marginLeft: 40,
                          marginTop: -5,
                        }}
                      >
                        (877-327-3239)
                      </p>
                  </li> 
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>support@duganbrown.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>545 Metro Place South
                      #100<li> Dublin, OH 43017</li>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40"></div>
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
          <p>© Copyright 2021 Dugan Brown | Federal Retirement Experts</p>
          <div className="footer-social">
            {/* <a href="#" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a href="http://facebook.com/duganbrownretirement" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            {/* <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
