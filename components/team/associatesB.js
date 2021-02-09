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
    image: teamImage3,
    extraClassName: "team-4-col",
    name: "Alex Leyberman",
    designation: "Associate",
    bio:
      "Fluent in multiple languages, Alex immigrated to the United States with his family as a child. Following his education, he built up strong credentials in customer service management and mathematical problem-solving. Given his diverse background, Alex brings a unique perspective and skill set to Dugan Brown, as he now helps federal employees fulfill their dreams of retirement.",
    social: [
      {
        link: "mailto:alex@duganbrown.com",
        socialClass: "azino-icon-email",
        contact: "alex@duganbrown.com",
      },
      {
        link: "tel:6143132422",
        socialClass: "azino-icon-calling",
        contact: "614-313-2422",
      },
    ],
  },
];

const AssociateB = () => {
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

export default AssociateB;
