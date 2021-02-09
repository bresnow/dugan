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
    image: teamImage4,
    extraClassName: "team-4-col",
    name: "Mary Eberts",
    designation: "Associate",
    bio:
      "Mary graduated Magna Cum Laude with a bachelor’s degree in Finance and Risk Management and a minor in Economics from Northern Michigan University. Upon graduating, she worked in the commercial insurance industry assisting large human service and manufacturing companies with their property and casualty insurance needs. Transitioning from insurance to finance, Mary brings a strong background and unique perspective to the team.",
    social: [
      {
        link: "mailto:mary@duganbrown.com",
        socialClass: "azino-icon-email",
        contact: "mary@duganbrown.com",
      },
      {
        link: "tel:9064305367",
        socialClass: "azino-icon-calling",
        contact: "906-430-5367",
      },
    ],
  },
];

const AssociateA = () => {
    const socials = () => {
        
    }
  return (
    <Col>
      <div className={`team-card`}>
        {TeamData.map(({ image, name, designation, social, bio }, index) => (
          <div
            className={`team-card text-center`}
            key={`team-card-key-${index}`}
          >
            <div
              className="team-card__image"
              style={{ paddingTop: 30, marginBottom: -20 }}
            >
              <img src={image} alt="" />
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

export default AssociateA;
