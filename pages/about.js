import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import TeamCarousel from "../components/team/team-carousel";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import CallToAction from "../components/call-to-action/call-to-action";

const About = () => {
  return (
    <Layout pageTitle="About Us || Dugan Brown || Federal Retirement Experts">
      <HeaderOne />
      <PageHeader title="About Us" crumbTitle="About" />
      <StickyHeader />
      <CallToAction />
      <AboutOne />
      <CallToActionTwo />
      <AboutCounter />
      <div style={{ height: 100 }} />
      <TeamCarousel />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <Footer />
    </Layout>
  );
};

export default About;
