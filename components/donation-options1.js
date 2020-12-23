import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const DonationOptions = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);

    e.preventDefault();
    emailjs
    .sendForm(
      "service_x81uten",
      "template_202v41n",
      e.target,
      "user_qmKiHeFhCxOB8fG5R38r3"
    )
    .then((result) => {
    alert(`Thank You. Your message has been recieved`);
      console.log(result.text);
      (error) => {
        console.log(error.text);
      };
    })

  };

  return (
    <section className="donate-options pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  Meet With An Expert
                </p>
                <h3>
                  The future is in your hands. <br /> We're just here to guide you .
                </h3>
              </div>
              <p>
                We are the best option concerning federal retirement. Not because of how much
                we know, or how much more you will gain, but how much we care. The invaluable
                service
                 that everyone receives is simply our standard practice.  {" "}
              </p>
              {/* <div className="donate-options__call">
                <i className="azino-icon-telephone"></i>
                <div className="donate-options__call-content">
                  <p>
                    Want to speak directly to an expert? <br />{" "}
                    <span>Call us now:</span>{" "}
                    <a href="tel:666-888-0000">666 888 0000</a>
                  </p>
                </div>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="#"
              className="donate-options__form wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <h3 className="text-center">Start Planning</h3>
              <p className="text-center">
              Take the first step and book a meeting with an expert from
              our team to realize your future's true potential.
              </p>
              <label htmlFor="name" className="sr-only"></label>
              <input 
                    ref={register({ required: true })} type="text" id="name1" placeholder="Your Name" />  
                     {errors.name1 && (
                      <p
                        style={{
                          color: "red",
                          alignContent: "center",
                          fontSize: 16,
                        }}
                      >
                        This field is required and must be a valid email address.
                      </p>
                    )}
             
              <label htmlFor="schedule" className="sr-only"></label>
              <input
              ref={register}
                type="text"
                placeholder="Phone Number"
                id="phone1"
              />
               <label htmlFor="schedule" className="sr-only"></label>
              <input
                    ref={register({
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                type="text"
                placeholder="Email Address"
                id="email1"
              />
              {errors.email1 && (
                    <p
                      style={{
                        color: "red",
                        alignContent: "center",
                        fontSize: 16,
                      }}
                    >
                      This field is required and must be a valid email address.
                    </p>
                  )}
              <button type="submit" className="thm-btn ">
                Schedule A Consultation
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;
