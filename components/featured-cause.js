import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/featured-cause.jpg";
const FeaturedCause = () => {
  return (
    <section className="featured-cause">
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="price-one__image-box-content pt-30">
                <p>
                  In 8 years of service with the Air Force, Wayne Brown learned
                  a great deal about brotherhood and discipline. When he left
                  the service honorably, he was also instilled with the three
                  core values held by the Air Force:
                </p>
                <ul style={{color: 'white'}}>
                  <li className="fa fa-check"> <strong>Integrity</strong> First</li><br />
                  <li  className="fa fa-check"> <strong>Service</strong> Before Self</li><br />
                  <li className="fa fa-check"> <strong>Excellence</strong> In All We Do</li><br />
                  </ul>

                <div className="cause-card__top">
                  {/* <div className="cause-card__progress">
                    <span style={{ width: `85%` }} className=" cardProgress">
                      <b>
                        <i>85</i>%
                      </b>
                    </span>
                  </div>
                  <div className="cause-card__goals">
                    <p>
                      <strong>Raised:</strong> $25,270
                    </p>
                    <p>
                      <strong>Goal:</strong> $30,000
                    </p>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
