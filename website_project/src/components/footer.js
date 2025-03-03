import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
<footer>
  <div className="footer-row2 pb-3 bg-light-f7">
    <div className="container">
      <div _ngcontent-rog-c29 className="shape-top"><svg _ngcontent-rog-c29 fill="#f7f2ee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
          <path _ngcontent-rog-c29 d="M0 0L2600 0 2600 69.1 0 0z" />
          <path _ngcontent-rog-c29 d="M0 0L2600 0 2600 69.1 0 69.1z" style={{opacity: '0.5'}} />
          <path _ngcontent-rog-c29 d="M2600 0L0 0 0 130.1 2600 69.1z" style={{opacity: '0.25'}} />
        </svg></div>
      <div className="row justify-content-center mt60 pb-4">
        <div className="col-lg-12 col-sm-12 text-center">
          <a className="navbar-brand img-ctr" href="index.html"> <img src="assets/images//logo-2.png" alt="Logo" width={100} /></a>
          <ul className="footer-link-v2 link-hover mt30">
          <li><Link to="/feature" >Features</Link></li>
            <li><Link to="/event" >Events</Link></li>
            <li><Link to="/gallery" >Gallery</Link></li>
            <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/contact" >Contact Us</Link></li>
            {/* <li><a href="feature.html">Feature</a></li> */}
            {/* <li><a href="event.html">Events</a></li> */}
            {/* <li><a href="gallery.html">Gallery</a></li> */}
            {/* <li><a href="about-us.html">About Us</a></li> */}
            {/* <li><a href="contact-us.html">Contact Us</a></li> */}
          </ul>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-lg-12">
          <div className="footer-social-media-icons">
            <a href="https://web.facebook.com/vexpo.pk/" target="blank"><i className="fab fa-facebook" /></a>
            <a href="https://www.youtube.com/channel/UCqA57Z235UqP04LlYDjmhTg" target="blank"><i className="fab fa-youtube" /></a>
            <a href="https://www.instagram.com/vexpo.pk/" target="blank"><i className="fab fa-instagram" /></a>
          </div>
          <div className="footer-">
            <p className="text-white">Copyright © vExpo all rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/*End Footer*/}

    </>
  )
}