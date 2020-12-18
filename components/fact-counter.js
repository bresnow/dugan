import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const FACT_COUNTER_DATA = [
  {
    count: 8372,
    text: "Futures Planned",
  },
  {
    count: 17,
    text: "Agencies and Branches Served",
  },
  {
    count: 200,
    text: "Million+ in Assets Managed",
    action: "Find Out How",
    dollarSign: "$",
  },
  {
    count:1,
    text: "Click To Plan Your Stress-Free Retirement",
    link: <button type="submit" className="thm-btn ">
    Take The First Step
  </button>
  }
];
const FactCounter = () => {
  const colStyle = {
    alignContent: "center",
    alignSelf: "right",
  };

  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="fact-counter pt-0 pb-100">
      <Container>
        <Row>
          {FACT_COUNTER_DATA.map(({ count, text, dollarSign, link }, index) => (
            <Col
              md={6}
              lg={3}
              className="text-center"
              key={`fact-counter-key-${index}`}
            >
              <h3>
                {dollarSign}
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? count : 0} />
                </VisibilitySensor>
              </h3>
              <p>{text}</p>
              {link}
            </Col>
          ))}
        </Row>
      </Container>
      
      
    </section>
  );
};

export default FactCounter;
