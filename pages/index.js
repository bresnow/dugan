import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import AboutTwo from "../components/about/about-two";
import DonationOptions from "../components/donation-options";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";

import MainSlider2 from "../components/slider/soon-slider";



const HomeOne = () => {
  return (

    // <Layout pageTitle="Federal Retirement Experts | Coming Soon">
    //   <MainSlider2 />
    //   <CallToActionTwo />
    // </Layout>
    <Layout pageTitle="Federal Retirement Experts">
      <HeaderOne />
      <MainSlider />
      <AboutTwo />
      <BrandCarousel  />
      <GalleryTestimonials>
        <TestimonialsTwo />
      </GalleryTestimonials>
    <CallToActionTwo />
      <DonationOptions />
      <div style={{marginTop:-160}}></div>
      <Footer />
    </Layout>
  );
};

export default HomeOne;
