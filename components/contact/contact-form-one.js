import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactFormOne = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data,e) => {
    console.log(data);

    alert(`Thank You. Your message has been recieved`);
    e.preventDefault();
    emailjs
    .sendForm(
      "service_x81uten",
      "dbcontact_page",
      e.target,
      "user_qmKiHeFhCxOB8fG5R38r3"
    )
    .then((result) => {
      console.log(result.text);
      (error) => {
        console.log(error.text);
      };
    })
    console.log(watch("name"));

  };

  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine="Contact Us"
              />
              <p className="block-text mb-30 pr-10"> </p>
              <div className="footer-social black-hover">
                <a href="#" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" aria-label="pinterest">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" aria-label="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form-validated contact-page__form form-one mb-40"
            >
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p
                      style={{
                        color: "red",
                        alignContent: "center",
                        fontSize: 16,
                      }}
                    >
                      This field is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    ref={register({
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  {errors.email && (
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
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    ref={register({
                      required: true,
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    })}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    ref={register}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    ref={register}
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button  type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
