import React from 'react'

export default function Speaker_section() {
  return (
    <>
  {/* speaker-section - start
    ================================================== */}
<section id="speaker-section" className="speaker-section clearfix">
  <div className="jarallax" style={{backgroundImage: 'url(assets/images/speaker/Black-White-Dubai-Wallpaper.jpg)'}}>
    <div className="overlay-white">
      <div className="container">
        {/* speaker-carousel - start */}
        <div className="speaker-carousel">
          <div className="slider-for">
            <div className="item">
              <div className="row">
                {/* speaker-image - start */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="speaker-image image-wrapper text-center">
                    <img src="assets/images/speaker/speakes1.png" alt="Image_not_found" />
                    <span className="speaker-name"><strong>Jenni</strong> Berthas</span>
                  </div>
                </div>
                {/* speaker-image - end */}
                {/* speaker-content - start */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="speaker-content">
                    {/* section-title - start */}
                    <div className="section-title text-left mb-50">
                      <span className="line-style" />
                      <small className="sub-title">harmoni staffs</small>
                      <h2 className="big-title">Professional <strong>Speakers</strong></h2>
                    </div>
                    {/* section-title - end */}
                    <div className="speaker-info">
                      <div className="speaker-title mb-30">
                        <span className="speaker-name"><strong>Jenni</strong> Berthas</span>
                        <span className="work-experienc yellow-color"><strong>15 Years</strong> experienced</span>
                      </div>
                      <p className="black-color mb-30">
                        Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...
                      </p>
                      <div className="speaker-social-network ul-li">
                        <h3 className="title title-medium mb-15">
                          <strong>Social</strong> Network
                        </h3>
                        <ul>
                          <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#!"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#!"><i className="fab fa-twitch" /></a></li>
                          <li><a href="#!"><i className="fab fa-google-plus-g" /></a></li>
                          <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* speaker-content - end */}
              </div>
            </div>
           
          </div>
          
        </div>
        {/* speaker-carousel - end */}
      </div>
    </div>
  </div>
</section>
{/* speaker-section - end
    ================================================== */}


    </>
  )
}

