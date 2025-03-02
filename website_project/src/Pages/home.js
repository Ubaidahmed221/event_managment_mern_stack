import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home(){
  return (
    <>
      <Header />
      
<div>
  <section className="hero-section " id="home">
    <div className="text-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 v-center">
            <div className="header-heading">
              <h1 className="text-white wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">Host a Great Event with Pakistan's Biggest <span className="text-change">Virtual Events</span> Platform </h1>
              <p className="text-white wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">Host all kinds of events and tradeshows from the palm of your hands.
              </p>
              <div className="-content-sec  d-flex mt50 v-center position-relative  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <a href="contact-us.html" className="btn-main bg-btn4 lnk mr-4">Request Demo <i className="fas fa-chevron-right fa-ani" /><span className="circle" /></a>
                <a id="play-videos" className="video-play-button" href="#">
                  <span />
                </a>
                <div id="video-overlay" className="video-overlay">
                  <a className="video-overlay-close">×</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 v-center tilt-3d">
            <div className="img-block base" data-tilt data-tilt-max={4} data-tilt-speed={2000}><img height="550px" src="assets/img/banner.png" className="img-fluid upset dg-hero-img0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Hero*/}
  {/*  */}
  <section className="about-sec-rpb bg-flat1 pad-tb ">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <div className="common-heading wow fadeInUp" data-wow-duration="2s">
            <h1 className="mb30 border-tittle">Events We Cover
            </h1>
            <p>Host trade shows and  expos on a platform that gives you complete control</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  {/*  */}
  <section className="service-section-prb  pad-tb ">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Property Expo</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Host property expos from the palm of your hand. </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".4s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Construction Expo</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Interactive booths and lobbies to give you the best virtual experience </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Trade Shows</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Host trade shows seamlessly on our event platform
                </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Health Care Expo</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Use vExpo for your health care awareness campaigns.
                </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".4s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Education Expo</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Exhibitions can be a great way to promote the courses you offer. 
                </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event-card up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
            <div className="event-content">
              <div className="event-title">
                <h4 className="mb10"> Career Expo</h4>
              </div>
              <div className="event-para mb-4 mt-3">
                <p>Host career expos and showcase jobs and give career advice. 
                </p>
              </div>
              <div className="link-hover ">
                <a href="event.html">Explore More  <i className="fas fa-chevron-right fa-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/* slider */}
  <section className=" brand-bg">
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-lg-7">
          <div className="common-heading text-left m-text-c pr50 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="email-subs">
              <h3 className=" border-tittle-sec">Power-Packed With Features to Support Your Virtual or Hybrid
                Event
              </h3>
              <p className="my-4">vExpo provides the best platform for you to host all kinds of virtual and hybrid events.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="hero-title wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s" id="animatedHeading">
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate"><a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-1.svg" width="40px" height="40px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Live/Semi-live/Recorded Webinar</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-2.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">1 to 1 &amp; Group Chat</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-3.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Private/Public Chat</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-4.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Lobby </h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-5.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Auditorium</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-6.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Virtual halls</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-7.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Virtual booth</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-8.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Information/Help Desk</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-9.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Customisable 2D/3D/360 Environments</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-10.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Welcome Video</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-11.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Audio/Video call</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-12.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Exchange Contact</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-13.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Networking</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-14.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Live Newsfeed</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-15.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Live Polls</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-16.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Breakout rooms</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-17.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Visitors Directory</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-18.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">360 Degree Email Communication</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-19.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Customisable Templates</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-20.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Bulk Email/Grouping</h4>
                  </div>
                </a>
              </span></div>
            <div className="slick-dupe"><span className="feature hero-title-misc  |  animate">
                <a href="#">
                  <div className="d-flex align-items-center">
                    <div className="feature-icone">
                      <img src="assets/img/icon/feature-21.svg" width="30px" height="30px" alt="icon" className="layer" /></div>
                    <h4 className="ml-3">Customization &amp; branding</h4>
                  </div>
                </a>
              </span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="showcase-virtual">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 ">
          <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="common-heading text-left">
              <h2 className="mb20">Showcase Your Virtual Event </h2>
              <p className="mb20">vExpo is here to support you every step of the way. Our powerful email
                marketing tool can be used to:
              </p>
            </div>
            <ul className="list-tick">
              <li>
                <p>Create Email Marketing Campaigns
                </p>
              </li>
              <li>
                <p>Use in-built email templates
                </p>
              </li>
              <li>
                <p>Get detailed analytics of your email campaigns
                </p>
              </li>
              <li>
                <p>Create tags to filter your email subscribers
                </p>
              </li>
              <li>
                <p>Schedule follow up email campaigns
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 v-center h-scl- pl-5">
          <div className="img-block-ca2 text-center h-scl-base m-mt30 wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <img src="assets/img/property.jpg" alt="about" className="abt-ca2" />
            <div className="shape-dg-1 dg-hero-shp1"><img src="assets/images//shape/dots-dg.png" alt="shape" className="img-fluid dot-sp-ca2" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  <section className="statistics-section bg-gradient6 py-5  tilt3d">
    <div className="container">
      <div className="row  t-ctr">
        <div className="col-lg-3 col-sm-6">
          <div className="statistics">
            <div data-tilt-max={20} data-tilt-speed={1000} className="statistics-img">
              <img src="assets/images//icons/deal.svg" alt="happy" className="img-fluid" />
            </div>
            <div className="statnumb">
              <span className="counter">115</span>
              <p>Exhibitors</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="statistics">
            <div data-tilt-max={20} data-tilt-speed={1000} className="statistics-img">
              <img src="assets/img/icon/booth.svg" alt="project" className="img-fluid" />
            </div>
            <div className="statnumb counter-number">
              <span className="counter">1290</span>
              <p>Booths</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="statistics">
            <div data-tilt-max={20} data-tilt-speed={1000} className="statistics-img">
              <img src="assets/img/icon/visitor.svg" alt="work" className="img-fluid" />
            </div>
            <div className="statnumb">
              <span className="counter">165273</span>
              <p>Number of visitors</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="statistics mb0">
            <div data-tilt-max={20} data-tilt-speed={1000} className="statistics-img">
              <img src="assets/img/icon/success.svg" alt="support" className="img-fluid" />
            </div>
            <div className="statnumb">
              <span className="counter">12</span>
              <p>Successful Expos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  <section className="faq-section brand-bg padding-top ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="faq-header wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <h2 className="title border-tittle-sec ">Events in the Palm of Your Hand
            </h2>
            <p className="my-4">Start hosting your virtual events and exhibitions with vExpo today. Expand your reach without hassle.
            </p>
            <a href="contact-us.html" className="btn-main bg-btn lnk mr-5">Request Demo <i className="fas fa-chevron-right fa-ani" /><span className="circle" /></a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-wrapper mb--38 wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="itm-media-object mt40 tilt-3d">
              <div className="media up-hor">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                  <img src="assets/img/icon/chat-friendly.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Mobile-Friendly Chat Messenger</h4>
                  <p>Chat with event organisers, booth managers and attendees on your mobile device.
                  </p>
                </div>
              </div>
              <div className="media up-hor mt40 wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                  <img src="assets/img/icon/connection.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Interact and Connect</h4>
                  <p>Connect with attendees by simply messaging them. Share attachments and media
                    documents before and after events. </p>
                </div>
              </div>
              <div className="media up-hor mt40 wow fadeIn" data-wow-duration="2s" data-wow-delay=".5s">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                  <img src="assets/img/icon/emoji.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Emoji and GIFs</h4>
                  <p>Personalise your messages by sharing emojis and gifs with attendees of your
                    event.
                  </p>
                </div>
              </div>
              <div className="media up-hor mt40 wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                  <img src="assets/img/icon/replies.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Replies and Forwarding</h4>
                  <p>Let the conversation flow. Forward and reply to messages right in your chat.
                  </p>
                </div>
              </div>
              <div className="media up-hor mt40 wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}>
                  <img src="assets/img/icon/experience.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Control Your Messenger Experience</h4>
                  <p>Protecting your privacy is our primary objective. Chat with everyone securely.
                  </p>
                </div>
              </div>
              {/* <div class="media up-hor mt40 wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
								<div class="img-ab- base" data-tilt="" data-tilt-max="20" data-tilt-speed="1000">
									<img src="assets/img/icon/stop.svg" alt="icon" class="layer"></div>
								<div class="media-body">
									<h4>Stop Unwanted Messages </h4>
									<p>You can block or silence specific chat messages during or after an event.</p>
								</div>
							</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="construction-expo">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 v-center h-scl-">
          <div className="img-block-ca2 text-center h-scl-base m-mt30 wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <img src="assets/img/construction.jpg" alt="about" className="abt-ca2" />
            <div className="shape-dg-1 dg-hero-shp1"><img src="assets/images//shape/dots-dg.png" alt="shape" className="img-fluid dot-sp-ca2" /></div>
          </div>
        </div>
        <div className="col-lg-6 pl-5 col-margin-top">
          <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="common-heading text-left">
              <h2 className="mb20">Host Construction Expo Events Without Hassle
              </h2>
              <p className="mb20">Our platform is fully customizable. Manage booths and the halls easily.
                Promote sponsors you want to and manage their banners.
              </p>
              <p className="mb20">Our Platform allows you to:
              </p>
            </div>
            <ul className="list-tick">
              <li>
                <p>Manage Booths
                </p>
              </li>
              <li>
                <p>Manage Halls
                </p>
              </li>
              <li>
                <p>Customise Auditoriums
                </p>
              </li>
              <li>
                <p>Customise Information Desks
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*Start Service*/}
  {/*End Service*/}
  {/*  */}
  <section className="weworkfor bg-color-1 brand-bg">
    <div className="container ">
      {/* <div class="row">
				<div class="col">
					<div class="highlight-info">
						<h2 class="text-center border-tittle  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
							Some Of Our Trusted Partners
						</h2>
					</div>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-lg-12">
					<div class="logo-weworkfor owl-carousel">
						<div class="items"><img src="assets/img/partner/p-1.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-2.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-3.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-11.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-5.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-6.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-7.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-8.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-9.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-10.png" class="img100w"></div>
						<div class="items"><img src="assets/img/partner/p-4.png" class="img100w"></div>
					</div>

				</div>
			</div>
		</div>
	</section> */}
      {/*  */}
      {/*  */}
      {/* <section class="">
		<div class="container"> */}
      <div className="row justify-content-center">
        <div className="col ">
          <div className="common-heading">
            <h2 className="mb20 border-tittle">FAQ</h2>
            <p>Everything you need to know so you can use vExpo like a pro.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt60- faq-sec">
        <div className="col-lg-6 pr-5">
          <div id="accordion" className="accordion">
            <div className="card-1">
              <div className="card-header" id="faq1">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="false" aria-controls="collapse-a">
                  What Is A Virtual Expo?
                </button>
              </div>
              <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
                <hr />
                <p>The virtual expo is designed for online use and to resemble a conventional expo
                  centre, with lobbies, networking and exhibition halls. There are booths for
                  showcasing projects. An online attendee can view booths/stalls, peruse soft
                  brochures, or chat with sales representatives in real-time, attend keynote
                  presentations and network with virtual stall owners as per his/her convenient time
                  and location.</p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq2">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="false" aria-controls="collapse-b">
                  What Is Green Factor In vExpo?
                </button>
              </div>
              <div id="collapse-b" className="card-body collapse" aria-labelledby="faq2" data-parent="#accordion">
                <hr />
                <p>vExpo is Pakistan's first-ever virtual expo that connects vendors, developers,
                  consultants from Pakistan's construction industry with potential customers. The
                  event will showcase products, services, innovations and ideas that are
                  environmentally and economically sustainable. No need to spend a penny on printing
                  materials, travel or construction of stalls.
                </p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq3">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                  What Can I Do At vExpo?
                </button>
              </div>
              <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
                <hr />
                <p>Visit dozens of Projects, exchange contact information and interact with vExpo's
                  stall owners. At the online event you’ll be able to: Interact one-on-one with stall
                  owners. Download product manuals, demos, brochures, videos on your computer for
                  further reference. Connect with your industry peers through audio, video and text
                  messages. Shortlist or Buy the best available deals.
                </p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq4">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-d" aria-expanded="false" aria-controls="collapse-a">
                  How Do I Register For vExpo?
                </button>
              </div>
              <div id="collapse-d" className="card-body collapse" aria-labelledby="faq4" data-parent="#accordion">
                <hr />
                <p>To register, log on to <a href="index-2.html"> http://www.vexpo.pk</a> and
                  complete the ‘New Registration’ form. Fill out the online form to complete your
                  registration. Once registered, you can access the digital event soon. You will also
                  receive a reminder email just before the launch of vExpo.
                </p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq5">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="false" aria-controls="collapse-a">
                  I Registered For vExpo But I Am Unable To Log In.
                </button>
              </div>
              <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion">
                <hr />
                <p>vExpo will be live soon. Once the event is up and running, you can use the login
                  information (username and password) created at the time of registration to
                  participate in the event. (If you have forgotten your password, reset it using the
                  ‘forgot password link from the homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  h-scl- pl-5">
          <div className="img-block-ca2 text-center h-scl-base m-mt30 wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
            <img src="assets/img/faq-1.png" alt="about" className="abt-ca2" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="bg-img">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="bg-img-box">
            <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
              <h2 className="title border-tittle-sec text-white"> Real Estate and Construction Virtual
                Exhibitions </h2>
              <p className="my-4 text-white">vExpo primarily focuses on providing the best platform for a
                seamless virtual exhibition experience. Explore more by requesting a demo today.
              </p>
              <a href="contact-us.html" className="btn-main bg-btn3 lnk mr-5">Request Demo <i className="fas fa-chevron-right fa-ani" /><span className="circle" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  {/* <section class="weworkfor bg-color-1 brand-bg">
		<div class="container ">
			<div class="row">
				<div class="col">
					<div class="highlight-info">
						<h2 class="text-center border-tittle  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
							Some Of Our Sponsors
						</h2>
					</div>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-lg-12">
					<div class="logo-weworkfor owl-carousel">
						<div class="items"><img src="assets/img/sponser/s-4.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-8.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-3.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-1.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-5.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-6.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-7.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-2.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-9.png" class="img100w"></div>
						<div class="items"><img src="assets/img/sponser/s-10.png" class="img100w"></div>
					</div>
				</div>
			</div>
		</div>
	</section> */}
  {/*  */}
  {/*  */}
  {/*  */}
  <section className="why-choose">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 v-center">
          <div className="common-heading text-left m-text-c pr50">
            <div className="email-subs">
              <h3>Why Choose <span className="text-effect-1">vExpo</span>?</h3>
              <p className="my-4"> We are Pakistan’s biggest virtual and hybrid expo platform.
                Complete 360° support throughout the event and after. Get a dedicated customer
                representative to support you throughout the event.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 v-center m-mt30">
          <div className="row">
            <div className="col-lg-6">
              <div className="steps-div sd3 mt30 s-block up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
                <div className="steps-icons"> <img src="assets/img/icon/whychoose-1.svg" alt="steps" /> </div>
                <h4 className="mb10">Interactive Booths</h4>
                <p>Designed to give the user the ultimate experience.
                </p>
              </div>
              <div className="steps-div sd3 mt30 s-block up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".4s">
                <div className="steps-icons"> <img src="assets/img/icon/whychoose-4.svg" alt="steps" /> </div>
                <h4 className="mb10">24/7 Support</h4>
                <p>Get complete support 24/7 from our team. </p>
              </div>
            </div>
            <div className="col-lg-6  m-m0">
              <div className="steps-div sd3 mt30 s-block up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
                <div className="steps-icons"> <img src="assets/img/icon/whychoose-2.svg" alt="steps" /> </div>
                <h4 className="mb10">Email Marketing </h4>
                <p>Use our email marketing tool to market your event.
                </p>
              </div>
              <div className="steps-div sd3 mt30 s-block up-hor wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
                <div className="steps-icons"> <img src="assets/img/icon/whychoose-3.svg" alt="steps" /> </div>
                <h4 className="mb10">Custom Landing Pages</h4>
                <p>Create customisable landing pages to market your events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="enquire-form pad-tb bg-flat1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 d-none">
          <div className="common-heading text-l">
            <h2 className="mt0 mb0 border-tittle-sec">Have Question? Write a Message
            </h2>
            <p className="mb60 mt20">We will catch you as early as we receive the message</p>
          </div>
          <div className="form-block">
            <form action="#" method="post" name="feedback-form">
              <div className="fieldsets row">
                <div className="col-md-6"><input type="text" placeholder="Full Name" name="name" /></div>
                <div className="col-md-6"><input type="email" placeholder="Email Address" name="email" />
                </div>
              </div>
              <div className="fieldsets row">
                <div className="col-md-6"><input type="number" placeholder="Contact Number" name="phone" />
                </div>
                <div className="col-md-6"><input type="text" placeholder="Subject" name="subject" /></div>
              </div>
              <div className="fieldsets"><textarea placeholder="Message" name="message" defaultValue={""} /></div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" defaultChecked="checked" />
                <label className="custom-control-label" htmlFor="customCheck">I agree to the Terms &amp;
                  Conditions of Business Name.</label>
              </div>
              <div className="fieldsets mt20"> <button type="submit" name="submit" className="lnk btn-main bg-btn">Submit <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button> </div>
              <p className="trm"><i className="fas fa-lock" />We hate spam, and we respect your privacy.</p>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="common-heading">
                <h2 className="text-center border-tittle mb-0">Let's work together</h2>
                <p className="my-4">We Love to Listen to Your Requirements</p>
              </div>
              <div className="row mt-5 justify-content-center justify-content-center">
                <div className="col-md-6">
                  <div className="dbox contact-box d-flex  m-0 align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="text pl-3">
                      <p><span className="mr-2">Email:</span> <a href="mailto:info@vExpo.com">info@vexpo.com</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dbox contact-box d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="text pl-3">
                      <p><span className="mr-2">Phone:</span> <a href="tel:03224398768">03-224-398-768</a>
                        {/* <a href="tel:03171714358" class="ml-3"> 03-171-714-358</a> */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mt-4">
                  <div className="dbox contact-box d-flex align-items-center ">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="text pl-3">
                      <p><span className="mr-2">Address:</span> Lahore, Punjab, Pakistan-54000</p>
                    </div>
                  </div>	
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      <Footer />
    </>
  )
}