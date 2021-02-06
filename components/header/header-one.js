import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";
import logoDark from "../../assets/images/signature-logo.png";

const HeaderOne = () => {
  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded");
        e.preventDefault();
      });
    // search toggler
    // let searchCloser = document.querySelectorAll(".search-toggler");
    // searchCloser.forEach((searchCloserBtn) => {
    //   searchCloserBtn.addEventListener("click", function (e) {
    //     document.querySelector(".search-popup").classList.toggle("active");c
    //     e.preventDefault();
    //   });
    // });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };

  const tagline = {
    fontSize: 13,
    fontWeight: 500,
    color: '#424445',
    marginTop: -15
  }
  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      style={{ marginLeft: -100, marginTop: 5 }}
                      src={logoDark}
                      width="250"
                      alt=""
                    />
                  </a>
                </Link>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
              {/* <p style= {tagline}>Federal Retirement Experts</p> */}
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p> </p>
                <div className="footer-social">
                  {/* <a href="#" aria-label="twitter">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <a
                    href="http://facebook.com/duganbrownretirement"
                    aria-label="facebook"
                  >
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
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li>
                    <i className="azino-icon-email"></i>
                    <a href="mailto:support@duganbrown.com">
                      support@duganbrown.com
                    </a>
                  </li>
                  <li>
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:8773273239" style={{fontSize: 16}}>
                      877-DB-READY
                      <p
                        style={{
                          color: "grey",
                          marginLeft: -4,
                          marginBottom: 0,
                        }}
                      >
                        (877-327-3239)
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
