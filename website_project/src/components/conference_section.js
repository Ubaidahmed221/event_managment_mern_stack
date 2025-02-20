import React from 'react'

export default function Conference() {
  return (
    <>
        	{/* conference-section - start
		================================================== */}
<section id="conference-section" className="conference-section clearfix">
  <div className="jarallax" style={{backgroundImage: 'url(assets/images/conference/pexels-photo-262669.jpg)'}}>
    <div className="overlay-black sec-ptb-100">
      <div className="mb-50">
        <div className="container">
          <div className="row">
            {/* section-title - start */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="section-title text-left">
                <span className="line-style" />
                <small className="sub-title">harmoni venues</small>
                <h2 className="big-title">Conference <strong>Rooms &amp; Hotels</strong></h2>
              </div>
            </div>
            {/* section-title - end */}
            {/* conference-location - start */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="conference-location ul-li clearfix">
                <ul>
                  {/* country-select - start */}
                  <li className="country-select">
                    <form action="#!">
                      <label htmlFor="country">Country :</label>
                      <select className="custom-select" id="country">
                        <option selected>Netherland</option>
                        <option value={1}>USA</option>
                        <option value={2}>england</option>
                        <option value={3}>germany</option>
                      </select>	
                    </form>
                  </li>
                  {/* country-select - end */}
                  {/* city-select - start */}
                  <li className="city-select">
                    <form action="#!">
                      <label htmlFor="city">city :</label>
                      <select className="custom-select" id="city">
                        <option selected>Amsterdam</option>
                        <option value={1}>washington</option>
                        <option value={2}>london</option>
                        <option value={3}>berlin</option>
                      </select>	
                    </form>
                  </li>
                  {/* city-select - end */}
                </ul>
              </div>
            </div>
            {/* conference-location - end */}
          </div>
        </div>
      </div>
      {/* conference-content-wrapper - start */}
      <div className="tab-wrapper">
        {/* tab-menu - start */}
        <div className="container">
          <div className="row justify-content-lg-start">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="tab-menu">
                <ul className="nav tab-nav mb-50">
                  <li className="nav-item">
                    <a className="nav-link active" id="nav-one-tab" data-toggle="tab" href="#nav-one" aria-expanded="true">
                      <span className="image">
                        <img src="assets/images/conference/RCJAKPP_00016_coddddnversion.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">5 <i className="fas fa-star" /> Chocolato </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-two-tab" data-toggle="tab" href="#nav-two" aria-expanded="false">
                      <span className="image">
                        <img src="assets/images/conference/fresh-conference-room-microphones-decoration-ideas-collection-gallery-to-conference-room-microphones-home-ideas.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">4 <i className="fas fa-star" /> Vanila </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-three-tab" data-toggle="tab" href="#nav-three" aria-expanded="false">
                      <span className="image">
                        <img src="assets/images/conference/RCTORON_00047ss.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">3 <i className="fas fa-star" /> Pear </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-four-tab" data-toggle="tab" href="#nav-four" aria-expanded="false">
                      <span className="image">
                        <img src="assets/images/conference/clayton-hotel-leopardstown-meeting-room-1.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">5 <i className="fas fa-star" /> Chocolato </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-five-tab" data-toggle="tab" href="#nav-five" aria-expanded="false">
                      <span className="image">
                        <img src="assets/images/conference/conference-room-with-projection-facilities-3d-model-max.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">4 <i className="fas fa-star" /> Vanila </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="nav-six-tab" data-toggle="tab" href="#nav-six" aria-expanded="false">
                      <span className="image">
                        <img src="assets/images/conference/midlands-park-hotel-meeting-rooms.jpg" alt="Image_not_found" />
                      </span>
                      <span className="title">
                        <strong className="yellow-color">3 <i className="fas fa-star" /> pear </strong>
                        Hotel
                      </span>
                      <small className="sub-title">Party Room 2.500 seats</small>
                      <small className="price yellow-color">Price from $52/night</small>
                    </a>
                  </li>
                </ul>
                <div className="more-btn">
                  <a href="#!">
                    <strong className="yellow-color">VIEW ALL</strong> HOTEL &amp; RESORT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab-menu - end */}
        {/* tab-content - start */}
        <div className="tab-content">
          {/* tab-pane - start */}
          <div className="tab-pane fade active show" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab" aria-expanded="true">
            <div className="image">
              <img src="assets/images/conference/RCJAKPP_00016_coddddnversion.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
          {/* tab-pane - start */}
          <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab" aria-expanded="false">
            <div className="image">
              <img src="assets/images/conference/fresh-conference-room-microphones-decoration-ideas-collection-gallery-to-conference-room-microphones-home-ideas.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
          {/* tab-pane - start */}
          <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab" aria-expanded="false">
            <div className="image">
              <img src="assets/images/conference/RCTORON_00047ss.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
          {/* tab-pane - start */}
          <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab" aria-expanded="false">
            <div className="image">
              <img src="assets/images/conference/clayton-hotel-leopardstown-meeting-room-1.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
          {/* tab-pane - start */}
          <div className="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab" aria-expanded="false">
            <div className="image">
              <img src="assets/images/conference/conference-room-with-projection-facilities-3d-model-max.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
          {/* tab-pane - start */}
          <div className="tab-pane fade" id="nav-six" role="tabpanel" aria-labelledby="nav-six-tab" aria-expanded="false">
            <div className="image">
              <img src="assets/images/conference/midlands-park-hotel-meeting-rooms.jpg" alt="Image_not_found" />
              <a href="#!" className="custom-btn">
                booking now
              </a>
              <div className="badge-item">
                <div className="content">
                  <i className="fas fa-star" />
                  <strong>5.0</strong>
                  <small>featured hotel</small>
                </div>
              </div>
            </div>
          </div>
          {/* tab-pane - end */}
        </div>
        {/* tab-content - end */}
      </div>
      {/* conference-content-wrapper - end */}
    </div>
  </div>
</section>
{/* conference-section - end
		================================================== */}


    </>
)
}