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
    extraClassName: "content-bg-1",
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
  {
    image: teamImage1,
    extraClassName: "content-bg-2",
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
  {
    image: teamImage4,
    extraClassName: "content-bg-4",
    name: "Mary Eberts",
    designation: "Junior Partner",
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

  {
    image: teamImage3,
    extraClassName: "content-bg-3",
    name: "Alex Leyberman",
    designation: "Junior Partner",
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
  {
    image: teamImage6,
    extraClassName: "content-bg-3",
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

const TeamCarousel = () => {
  return (
    <section
      className="team-about pt-120 pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <div className="block-title">
            <p>The Team</p>
            <h3>Meet those who care.</h3>
          </div>
          <p>
            We have dedicated our careers to being the authority on federal
            retirement. When you work with us, you work with someone who
            appreciates the value that comes from understanding your benefits
            better than anyone else in the nation. You are not just working with
            a retirement expert; you are working with someone who cares about
            your well-being and who strives to deliver top-tier service, each
            and every day
          </p>

          <Container>
            <div className={"team-card"}>
              {TeamData.map(
                (
                  { image, extraClassName, name,contact, designation, social, bio },
                  index
                ) => (
                  <div
                    className={`team-card text-center ${extraClassName}`}
                    key={`team-card-key-${index}`}
                  >
                    <div
                      className="team-card__image"
                      style={{ paddingTop: 30, marginBottom: -20 }}
                    >
                      <img src={image} alt="" />
                    </div>
                    <div className="event-card mb-50" style={{ padding:30 }}>
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
              )}
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default TeamCarousel;
