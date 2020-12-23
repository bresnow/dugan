import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

const ValueIntro = () => {
return(
    
    <section style={{backgroundColor:'red'}}className="fact-counter pt-0 pb-300">
        <Container>
            <Row>
                <Col
              className="text-center">
    <p>
      In 8 years of service with the Air Force, Wayne Brown learned a
      great deal about brotherhood and discipline. When he left the
      service honorably, he was also instilled with the three core
      values held by the Air Force.
    </p>
    </Col>
    </Row>
    </Container>
  </section>
)
};

export default ValueIntro;