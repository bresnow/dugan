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
    image: teamImage6,
    extraClassName: "team-4-col",
    name: "Sam Eberts",
    designation: "Junior Partner",
    bio:
      "Sam has worked with a multitude of federal employees hailing from many different agencies. Graduating from Lake Superior State University in 2018 with a Bachelor of Science in Geology with a minor in Geographic Information Systems, he found part-time work as a personal assistant for Wayne Brown. Showing a strong penchant for the subject matter, Wayne recommended he train as a financial planner, which Sam accepted and excelled at quickly. After learning in months what takes most individuals years, his career sky-rocketed and he now works as a junior partner alongside both Wayne Brown and Kevin Dugan in helping federal employees with retirement.",
    social: [
      {
        link: "mailto:sam@duganbrown.com",
        socialClass: "azino-icon-email",
        contact: "sam@duganbrown.com",
      },
      {
        link: "tel:9062981277",
        socialClass: "azino-icon-calling",
        contact: "906-298-1277",
      },
    ],
  },
];

const Sam = () => {
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

export default Sam;
