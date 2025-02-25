import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="slide-section" className="slide-section clearfix">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="item">
          <div
            className="slide-bg"
            style={{
              backgroundImage: "url(assets/images/slider/slider-bg1.jpg)",
              height: "600px",
              backgroundSize: "center",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="overlay-black">
              <div className="container">
                <div className="slider-item-content">
                  <span className="medium-text">one stop</span>
                  <h1 className="big-text">Event Planner</h1>
                  <small className="small-text">
                    every event should be perfect
                  </small>
                  <div className="link-groups">
                    <a href="about.html" className="about-btn custom-btn">
                      about us
                    </a>
                    <a href="#!" className="start-btn">
                      get started!
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Slide 2 */}
        <div className="item">
          <div
            className="slide-bg"
            style={{
              backgroundImage: "url(assets/images/slider/slider-bg2.jpg)",
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="overlay-black">
              <div className="container">
                <div className="slider-item-content">
                  <span className="medium-text">one stop</span>
                  <h1 className="big-text">Event Planner</h1>
                  <small className="small-text">
                    every event should be perfect
                  </small>
                  <div className="link-groups">
                    <a href="about.html" className="about-btn custom-btn">
                      about us
                    </a>
                    <a href="#!" className="start-btn">
                      get started!
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Slide 3 */}
        <div className="item">
          <div
            className="slide-bg"
            style={{
              backgroundImage: "url(assets/images/slider/slider-bg3.jpg)",
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="overlay-black">
              <div className="container">
                <div className="slider-item-content">
                  <span className="medium-text">one stop</span>
                  <h1 className="big-text">Event Planner</h1>
                  <small className="small-text">
                    every event should be perfect
                  </small>
                  <div className="link-groups">
                    <a href="about.html" className="about-btn custom-btn">
                      about us
                    </a>
                    <a href="#!" className="start-btn">
                      get started!
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Slider>
    </section>
  );
}
