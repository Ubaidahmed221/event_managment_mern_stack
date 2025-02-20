import React from 'react'

export default function SliderSection() {
  return (
    <>
        	{/* slide-section - start
		================================================== */}
<section id="slide-section" className="slide-section clearfix">
  <div id="main-carousel1" className="main-carousel1 owl-carousel owl-theme">
    <div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg1.jpg)'}}>
      <div className="overlay-black">
        <div className="container">
          <div className="slider-item-content">
            <span className="medium-text">one stop</span>
            <h1 className="big-text">Event Planner</h1>
            <small className="small-text">every event sould be perfect</small>
            <div className="link-groups">
              <a href="about.html" className="about-btn custom-btn">about us</a>
              <a href="#!" className="start-btn">get started!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg2.jpg)'}}>
      <div className="overlay-black">
        <div className="container">
          <div className="slider-item-content">
            <span className="medium-text">one stop</span>
            <h1 className="big-text">Event Planner</h1>
            <small className="small-text">every event sould be perfect</small>
            <div className="link-groups">
              <a href="about.html" className="about-btn custom-btn">about us</a>
              <a href="#!" className="start-btn">get started!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg3.jpg)'}}>
      <div className="overlay-black">
        <div className="container">
          <div className="slider-item-content">
            <span className="medium-text">one stop</span>
            <h1 className="big-text">Event Planner</h1>
            <small className="small-text">every event sould be perfect</small>
            <div className="link-groups">
              <a href="about.html" className="about-btn custom-btn">about us</a>
              <a href="#!" className="start-btn">get started!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* slide-section - end
		================================================== */}

    </>
  )
}