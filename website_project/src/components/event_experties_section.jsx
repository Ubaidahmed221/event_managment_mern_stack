import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function EventExpertiseSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ek sath 3 slides dikhane ke liye
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="event-expertise-section" className="event-expertise-section bg-gray-light sec-ptb-100 clearfix">
      <div className="container">
        <div className="section-title text-center mb-50">
          <small className="sub-title">our services</small>
          <h2 className="big-title">harmony <strong>Expertise</strong></h2>
        </div>

        <Slider {...settings}>
          <div className="item">
            <span className="expertise-title">harmoni party events</span>
            <div className="expertise-item">
              <div className="image image-wrapper">
                <img src="/assets/images/experties/img1.jpg" alt="Wedding Party" />
              </div>
              <div className="content">
                <h3 className="title">Wedding Party</h3>
                <p>Start from <strong>$1,200-$2,000</strong></p>
              </div>
            </div>
          </div>
          <div className="item">
            <span className="expertise-title">harmoni party events</span>
            <div className="expertise-item">
              <div className="image image-wrapper">
                <img src="/assets/images/experties/img2.jpg" alt="Birthday Party" />
              </div>
              <div className="content">
                <h3 className="title">Birthday Party</h3>
                <p>Start from <strong>$1,200-$2,000</strong></p>
              </div>
            </div>
          </div>
          <div className="item">
            <span className="expertise-title">harmoni party events</span>
            <div className="expertise-item">
              <div className="image image-wrapper">
                <img src="/assets/images/experties/img3.jpg" alt="Business Meeting" />
              </div>
              <div className="content">
                <h3 className="title">Business Meeting</h3>
                <p>Start from <strong>$1,200-$2,000</strong></p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
