import React from 'react';

import Footer from '../components/footer';
import Event_gallery_section from "../components/event_gallery_section";
import Event_experties_section from "../components/event_experties_section";
import Speaker_section from "../components/speaker_section";
import Event_section from "../components/event_section";
import Advertisement_section from "../components/advertisement_section";
import NewsUpdateSction from "../components/news_update_section";
import GoogleMapSection from '../components/google_map_section';

export default function Home() {
  return (
    <>
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