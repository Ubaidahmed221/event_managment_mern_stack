import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div>
  {/*Start Header */}
  <header className="header-pr nav-bg-b main-header navfix fixed-top menu-dark ">
    <div className="container-fluid m-pad">
      <div className="menu-header">
        <div className="dsk-logo">
          {/* <a className="nav-brand" href="index.html">
            <img src="assets/images/logo.png" height="50px" alt="Logo" className="mega-white-logo" />
            <img src="assets/images/logo.png" height="50px" alt="Logo" className="mega-darks-logo" />
          </a> */}
          <Link to="/" className="nav-brand">
          <img src="assets/images/logo.png" height="50px" alt="Logo" className="mega-white-logo" />
            <img src="assets/images/logo.png" height="50px" alt="Logo" className="mega-darks-logo" />
         
          </Link>
          </div>
        <div className="custom-nav" role="navigation">
          <ul className="nav-list onepge link-hover">
          <li><Link to="/feature" className="menu-links">Features</Link></li>
          <li><Link to="/event" className="menu-links">Events</Link></li>
            {/* <li><a href="feature.html" className="menu-links">Features</a></li> */}
            {/* <li><a href="event.html" className="menu-links">Events</a></li> */}
            {/* <li><a href="job-boards.html" class="menu-links">Job Board</a></li>
						<li><a href="#" class="menu-links">Property Board</a></li> */}
            <li className="sbmenu rpdropdown">
              <a href="#" className="menu-links">Resources</a>
              <div className="nx-dropdown menu-dorpdown">
                <div className="sub-menu-section">
                  <div className="sub-menu-center-block">
                    <div className="sub-menu-column smfull">
                      <ul>
                        {/* <li><a href="gallery.html">Gallery</a> </li> */}
                        {/* <li><a href="team.html">Team</a> </li> */}
                        <li><Link to="/gallery" >Gallery</Link></li>
                        <li><Link to="/team" >Team</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
           
            {/* <li><a href="about-us.html" className="menu-links">About Us </a></li> */}
            <li><Link to="/about" className="menu-links">About Us</Link></li>
            {/* <li><a href="contact-us.html" className="menu-links">Contact Us </a></li> */}
            <li><Link to="/contact" className="menu-links">Contact Us</Link></li>

            {/* <li><Link to="/about" className="menu-links">About Us</Link></li> */}
{/* <li><Link to="/contact" className="menu-links">Contact Us</Link></li> */}
            {/* <li class="ml-5"><a href="#" class="menu-links">Login</a></li> */}
            <li className="ml-3">
              {/* <a href="contact-us.html" className="btn-br ">Sign Up <span className="circle" />
              </a>  */}
              <Link to="/signup" className="btn-br ">Sign Up <span className="circle" />
               </Link>
              </li>
              <li className="ml-3">
              {/* <a href="contact-us.html" className="btn-br bg-btn4 btshad-b2 lnk">Login <span className="circle" />
              
              </a>  */}
               <Link to="/login" className="btn-br bg-btn4 btshad-b2 lnk ">Login <span className="circle" />
               </Link>
              </li>
          </ul>
        </div>
        <div className="mobile-menu2">
          <ul className="mob-nav2">
            <li><a href="contact-us.html" className="btn-round- trngl btn-br bg-btn btshad-b1"><i className="fas fa-envelope-open-text" /></a></li>
            <li className="navm-"> <a className="toggle" href="#"><span /></a></li>
          </ul>
        </div>
      </div>
      {/*Mobile Menu*/}
      <nav id="main-nav">
        <ul className="first-nav">
          <li><a href="index.html" className="menu-links">Home</a></li>
          <li><a href="feature.html" className="menu-links">Features</a></li>
          <li><a href="event.html" className="menu-links">Events</a></li>
          <li><a href="https://property.vexpo.pk/" target="_blank">Property Expo</a></li>
          <li><a href="gallery.html" className="menu-links">Gallery</a></li>
          <li><a href="team.html" className="menu-links">Team</a></li>
          <li><a href="about-us.html" className="menu-links">About Us</a></li>
          <li><a href="contact-us.html" className="menu-links">Contact Us</a></li>
          {/* <li><a href="#" class="menu-links">Login</a></li> */}
        </ul>
        <ul className="bottom-nav">
          <li className="prb">
            <a href="tel:03111222413">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
										c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
										c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
										C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z" />
              </svg>
            </a>
          </li>
          <li className="prb">
            <a href="mailto:info@vExpo.com">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" /></svg>
            </a>
          </li>
          <li className="prb">
            <a href="skype:vExpo.company?call">
              <svg enableBackground="new 0 0 24 24" height={18} viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg">
                <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  {/*Mobile contact*/}
  <div className="popup-modal1">
    <div className="modal" id="menu-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="common-heading">
              <h4 className="mt0 mb0">Request A Quote </h4>
            </div>
            <button type="button" className="closes" data-dismiss="modal">×</button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="form-block fdgn2 mt10 mb10">
              <form action="#" method="post" name="feedback-form" id="contactForm">
                <div className="fieldsets row">
                  <div className="col-md-12"><input type="text" placeholder="Full Name" name="name" /></div>
                  <div className="col-md-12"><input type="email" placeholder="Email Address" name="email" />
                  </div>
                  <div className="col-md-12"><input type="number" placeholder="Contact Number" name="phone" /></div>
                  <div className="col-md-12"><input type="text" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-md-12"><textarea placeholder="Message" name="message" defaultValue={""} />
                  </div>
                </div>
                <div className="fieldsets mt20 pb20">
                  <button type="submit" name="submit" className="lnk btn-main bg-btn" data-dismiss="modal">Submit <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Mobile contact*/}
</div>


    </>

  )
}