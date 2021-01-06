import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import bgImage from "../../assets/images/team/team-map-1-1.png";
import teamImage1 from "../../assets/images/team/team-2-1.jpg";
import teamImage2 from "../../assets/images/kevin.jpg";
import teamImage3 from "../../assets/images/alex.jpg";
import teamImage4 from "../../assets/images/mary.jpg";
import teamImage6 from "../../assets/images/team/sam.jpg";
const TeamData = [
  {
    image: teamImage2,

    extraClassName: "",
    name: "Kevin Dugan",
    designation: "Partner",
    bio:
      "Kevin has helped hundreds of federal employees across the Ohio Valley plan their retirements over the last several years. Prior to being a financial planner, he worked as a health insurance broker, where he enabled people to make better decisions with their medical benefits. In 2007, Kevin graduated Cum Laude with a bachelor’s degree in Business Economics and a minor in Mathematics from Loyola University Maryland. Kevin and his long-time business partner, Wayne Brown, now operate their own company with a shared vision of helping as many federal employees as possible.",
    social: [
      {
        link: "mailto:kevin@duganbrown.com",
        socialClass: "azino-icon-email",
        contact: "kevin@duganbrown.com",
      },
      {
        link: "tel:6107176829",
        socialClass: "azino-icon-calling",
        contact: "610-717-6829",
      },
    ],
  },
];

const Partners2 = () => {
  const socials = () => {};
  return (
    <Col>
      <div className={`team-card`}>
        {TeamData.map(({ image, name, designation, social, bio }, index) => (
          <div
            className={`team-card text-center`}
            key={`team-card-key-${index}`}
          >
            <div
              className="team-card__image-p"
              style={{ paddingTop: 30, marginBottom: -20 }}
            >
              <img src={image}  alt="" />
            </div>
            <div className="event-card mb-50" style={{ padding: 30 }}>
              <div
                className="header-info__box"
                style={{ paddingTop: 20, alignContent: "center" }}
              >
                <h3 style={{ align: "center" }}>{name}</h3>
                <p>{designation}</p>
                <div className="team-card__social">
                  {social.map(({ link, socialClass }, index) => (
                    <a
                      href={link}
                      aria-label="social link"
                      key={`social-link-key-${index}`}
                    >
                      <i className={socialClass}></i>
                    </a>
                  ))}
                </div>
              </div>
              {/* ...> */}
              <div
                className="event-card-content pl-30 pr-30"
                style={{ padding: 30 }}
              >
                <p>{bio}</p>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </Col>
  );
};

export default Partners2;
