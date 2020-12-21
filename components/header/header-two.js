import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import logoDark from "../../assets/images/logo-dark.png";

const HeaderTwo = () => {
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
    let searchCloser = document.querySelectorAll(".search-toggler");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.toggle("active");
        e.preventDefault();
      });
    });

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
    color: "#424445",
  };
  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p> </p>
          <div className="main-header__social">
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
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} width="160" alt="" />
              </a>
            </Link>
            <p style={tagline}>Federal Retirement Experts</p>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="main-header__info">
            <ul className="list-unstyled main-header__info-list">
              <li>
                <i className="azino-icon-email"></i>
                <a href="mailto:support@duganbrown.com">
                  support@duganbrown.com
                </a>
              </li>
              {/* <li>
                <i className="azino-icon-telephone"></i>
                <a href="tel:888-555-3333">888 424 4450</a>
              </li> */}

              <li>
                <i className="azino-icon-address"></i>
                <p style={{paddingTop:15}}>545 Metro Place South #100 Dublin, OH 43017</p>
              </li>
            </ul>
          </div>
          {/* <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-address"></i>
              <div className="header-info__box-content">
                <h3>Visit</h3>
                <p>88 Broklyn Golden Street, USA</p>
              </div>
            </div>
          </div> */}
        </Container>
      </div>
    </div>
  );
};

export default HeaderTwo;
