import React from 'react';

import Footer from '../components/footer';
import Slider from "../components/slider_section";
import About from "../components/about_section";
import Conference from "../components/conference_section";
import Special_offer from "../components/special_offer_section";
import Event_gallery_section from "../components/event_gallery_section";
import Event_experties_section from "../components/event_experties_section";
import Speaker_section from "../components/speaker_section";
import Event_section from "../components/event_section";
import Advertisement_section from "../components/advertisement_section";
import NewsUpdateSction from "../components/news_update_section";
import GoogleMapSection from '../components/google_map_section';
import Header from "../components/header";

export default function Home() {
  return (
    <>
     <Header/>
       <Slider />
      <About />
      <Conference />
      <Special_offer />
     <Event_section />
     <Event_gallery_section />
      <Event_experties_section />
       <Speaker_section />
    <Advertisement_section />
    <NewsUpdateSction />
   <GoogleMapSection />
        <Footer/>
    </>
  )
}