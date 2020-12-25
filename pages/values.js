import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutTwo from "../components/about/about-two";
import VideoCard from "../components/videos/video-card";
import ServiceTwo from "../components/services/service-two";
import FaqOne from "../components/faq-one";
import CausesHome from "../components/causes/causes-home";
import FeaturedCause from "../components/featured-cause";
import PriceOne from "../components/price-one";
import FactCounter from "../components/fact-counter";
import BrandCarousel from "../components/brand-carousel";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import GalleryHomeTwo from "../components/gallery/gallery-home-two";
import BlogHomeTwo from "../components/blog/blog-home-two";
import ValueIntro from "../components/cv-intro";
import CoreList from '../components/core-val-list';
import Footer from "../components/footer";
import PageHeader from "../components/page-header";
const HomeTwo = () => {
  return (
    <Layout pageTitle="Core Values || Dugan Brown || Charity React Next Template">
      <HeaderOne />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader title="Core Values" crumbTitle="Core Values" />
      <CoreList />
      <FaqOne />
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
