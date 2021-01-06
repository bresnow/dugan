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
    image: teamImage1,
    extraClassName: "",
    name: "Wayne Brown",
    designation: "Partner",
    bio:
      "After graduating from Michigan Technological University with a major in Computer Engineering and minors in Electrical Engineering, Physics, & Mathematics, Wayne spent eight years in the United States Air Force, separating at the rank of Captain. Using his strong engineering and mathematical background in conjunction with his experience as a federal employee, he helped hundreds of federal employees across the country by leading the operations team of a financial services and retirement planning firm before branching out with his business partner, Kevin Dugan, to start their own company.",
    social: [
      {
        link: "mailto:wayne@duganbrown.com",
        socialClass: "azino-icon-email",
        contact: "wayne@duganbrown.com",
      },
      {
        link: "tel:9063704046",
        socialClass: "azino-icon-calling",
        contact: "906-370-4046",
      },
    ],
  },
  
];

const Partners = () => {
    const socials = () => {
        
    }
  return (
    <Col>
      <div className={`team-card`}>
        {TeamData.map(
          (
            { image, name, designation, social, bio,},
            index
          ) => (
                <div
                  className={`team-card text-center`}
                  key={`team-card-key-${index}`}
                >
                  <div
                    className="team-card__image-p"
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
              
          )
        )}  </div>
        </Col>
  );
};

export default Partners;
