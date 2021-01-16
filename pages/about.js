import React from "react";
import {Row} from 'react-bootstrap';
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import TeamHome from "../components/team/team-home";
import VideoCard from "../components/videos/video-card";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import TeamCarousel from "../components/team/team-carousel";
//import FactCounter from "../components/fact-counter";
const About = () => {
  return (
    <Layout pageTitle="About Us || Dugan Brown || Federal Retirement Experts">
    <HeaderOne />
      <PageHeader title="About Us" crumbTitle="About" />
      <StickyHeader />
      <AboutOne />
      <AboutCounter />
      <div style={{ height: 100 }} />
      <TeamCarousel />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <Footer />
    </Layout>
  );
};

export default About;
