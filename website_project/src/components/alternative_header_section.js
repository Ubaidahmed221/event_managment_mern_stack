import React from 'react'

export default function AlternativeHeader() {
  return (
    <>
    {/* altranative-header - start
		================================================== */}
<div className="header-altranative">
  <div className="container">
    <div className="logo-area float-left">
      <a href="index-1.html">
        <img src="assets/images/1.site-logo.png" alt="logo_not_found" />
      </a>
    </div>
    <button type="button" id="sidebarCollapse" className="alt-menu-btn float-right">
      <i className="fas fa-bars" />
    </button>
  </div>
  {/* sidebar menu - start */}
  <div className="sidebar-menu-wrapper">
    <div id="sidebar" className="sidebar">
      <span id="sidebar-dismiss" className="sidebar-dismiss">
        <i className="fas fa-arrow-left" />
      </span>
      <div className="sidebar-header">
        <a href="#!">
          <img src="assets/images/2.site-logo.png" alt="logo_not_found" />
        </a>
      </div>
      {/* sidebar-form - start */}
      <div className="sidebar-form">
        <form action="#">
          <input id="altmenu-sidebar-search" type="search" placeholder="Search" />
          <label htmlFor="altmenu-sidebar-search"><i className="fas fa-search" /></label>
        </form>
      </div>
      {/* sidebar-form - end */}
      {/* main-pages-links - start */}
      <div className="menu-link-list main-pages-links">
        <h2 className="menu-title">all home pages</h2>
        <ul>
          <li className="active">
            <a href="index-1.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Home V.1
            </a>
          </li>
          <li>
            <a href="index-2.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Home V.2
            </a>
          </li>
          <li>
            <a href="index-3.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Home v.3
            </a>
          </li>
          <li>
            <a href="index-4.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Home v.4
            </a>
          </li>
        </ul>
      </div>
      {/* main-pages-links - end */}
      {/* other-pages-links - start */}
      <div className="menu-link-list other-pages-links">
        <h2 className="menu-title">all single pages</h2>
        <ul>
          <li>
            <a href="about.html">
              <span className="icon"><i className="fas fa-home" /></span>
              About Us
            </a>
          </li>
          <li>
            <a href="service.html">
              <span className="icon"><i className="fas fa-home" /></span>
              our Services
            </a>
          </li>
          <li>
            <a href="event-1.html">
              <span className="icon"><i className="fas fa-home" /></span>
              event list
            </a>
          </li>
          <li>
            <a href="event-2.html">
              <span className="icon"><i className="fas fa-home" /></span>
              event grid
            </a>
          </li>
          <li>
            <a href="event-1-without-sidebar.html">
              <span className="icon"><i className="fas fa-home" /></span>
              list without sidebar
            </a>
          </li>
          <li>
            <a href="event-2-without-sidebar.html">
              <span className="icon"><i className="fas fa-home" /></span>
              grid without sidebar
            </a>
          </li>
          <li>
            <a href="blog.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Latest blogs
            </a>
          </li>
          <li>
            <a href="gallery.html">
              <span className="icon"><i className="fas fa-home" /></span>
              our gallery
            </a>
          </li>
          <li>
            <a href="speaker.html">
              <span className="icon"><i className="fas fa-home" /></span>
              event speakers
            </a>
          </li>
          <li>
            <a href="contact.html">
              <span className="icon"><i className="fas fa-home" /></span>
              contact us
            </a>
          </li>
        </ul>
      </div>
      {/* other-pages-links - end */}
      {/* inner-pages-links - start */}
      <div className="menu-link-list inner-pages-links">
        <h2 className="menu-title">all inner pages</h2>
        <ul>
          <li>
            <a href="booking.html">
              <span className="icon"><i className="fas fa-home" /></span>
              event booking
            </a>
          </li>
          <li>
            <a href="event-details.html">
              <span className="icon"><i className="fas fa-home" /></span>
              event details
            </a>
          </li>
          <li>
            <a href="blog-details.html">
              <span className="icon"><i className="fas fa-home" /></span>
              blog details
            </a>
          </li>
          <li>
            <a href="faq.html">
              <span className="icon"><i className="fas fa-home" /></span>
              Frequently Ask Qusetion
            </a>
          </li>
          <li>
            <a href="404-error.html">
              <span className="icon"><i className="fas fa-home" /></span>
              404 error
            </a>
          </li>
        </ul>
      </div>
      {/* inner-pages-links - end */}
      {/* login-btn-group - start */}
      <div className="login-btn-group">
        <ul>
          <li>
            <a href="#alt-register-modal" className="register-modal-btn">
              Register
            </a>
            <div id="alt-register-modal" className="reglog-modal-wrapper register-modal mfp-hide clearfix" style={{backgroundImage: 'url(assets/images/login-modal-bg.jpg)'}}>
              <div className="overlay-black clearfix">
                {/* leftside-content - start */}
                <div className="leftside-content">
                  <div className="site-logo-wrapper mb-80">
                    <a href="#!" className="logo">
                      <img src="assets/images/2.site-logo.png" alt="logo_not_found" />
                    </a>
                  </div>
                  <div className="register-login-link mb-80">
                    <ul>
                      <li><a href="#!">Login</a></li>
                      <li className="active"><a href="#!">Register</a></li>
                    </ul>
                  </div>
                  <div className="copyright-text">
                    <p className="m-0">©2019 <a href="#!" className="yellow-color">Harmoni.com</a> all right reserved, made with <i className="fas fa-heart" /> by jThemes Studio </p>
                  </div>
                </div>
                {/* leftside-content - end */}
                {/* rightside-content - start */}
                <div className="rightside-content text-center">
                  <div className="mb-30">
                    <h2 className="form-title title-large white-color">Account <strong>Register</strong></h2>
                    <span className="form-subtitle white-color">Have an account? <strong>LOGIN NOW</strong></span>
                  </div>
                  <div className="login-form text-center mb-50">
                    <form action="#!">
                      <div className="form-item">
                        <input type="email" placeholder="User Name" />
                      </div>
                      <div className="form-item">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="form-item">
                        <input type="email" placeholder="Repeat Password" />
                      </div>
                      <div className="form-item">
                        <input type="password" placeholder="Email Address" />
                      </div>
                      <div className="human-verification text-left">
                        <input type="checkbox" id="alt-imnotarobot" />
                        <label htmlFor="alt-imnotarobot">I'm not a robot</label>
                        <span className="verification-image">
                          <img src="assets/images/iamnotrobot.png" alt="Image_not_found" />
                        </span>
                      </div>
                      <button type="submit" className="login-btn">login now</button>
                    </form>
                  </div>
                  <div className="bottom-text white-color">
                    <p className="m-0">
                      * Denotes mandatory field.
                    </p>
                    <p className="m-0">** At least one telephone number is required.</p>
                  </div>
                </div>
                {/* rightside-content - end */}
                <a className="popup-modal-dismiss" href="#!">
                  <i className="fas fa-times" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="#alt-login-modal" className="login-modal-btn">
              Login
            </a>
            <div id="alt-login-modal" className="reglog-modal-wrapper mfp-hide clearfix" style={{backgroundImage: 'url(assets/images/login-modal-bg.jpg)'}}>
              <div className="overlay-black clearfix">
                {/* leftside-content - start */}
                <div className="leftside-content">
                  <div className="site-logo-wrapper mb-80">
                    <a href="#!" className="logo">
                      <img src="assets/images/2.site-logo.png" alt="logo_not_found" />
                    </a>
                  </div>
                  <div className="register-login-link mb-80">
                    <ul>
                      <li className="active"><a href="#!">Login</a></li>
                      <li><a href="#!">Register</a></li>
                    </ul>
                  </div>
                  <div className="copyright-text">
                    <p className="m-0">©2018 <a href="#!" className="yellow-color">Harmoni.com</a> all right reserved, made with <i className="fas fa-heart" /> by jThemes Studio </p>
                  </div>
                </div>
                {/* leftside-content - end */}
                {/* rightside-content - start */}
                <div className="rightside-content text-center">
                  <div className="mb-30">
                    <h2 className="form-title title-large white-color">Account <strong>Login</strong></h2>
                    <span className="form-subtitle white-color">Login to our website, or <strong>REGISTER</strong></span>
                  </div>
                  <div className="fb-login-btn mb-30">
                    <a href="#!">
                      <span className="icon">
                        <i className="fab fa-facebook-f" />
                      </span>
                      login with facebook
                    </a>
                  </div>
                  <div className="or-text mb-30">
                    <span>or sign in</span>
                  </div>
                  <div className="login-form text-center mb-50">
                    <form action="#!">
                      <div className="form-item">
                        <input type="email" placeholder="example@gmail.com" />
                      </div>
                      <div className="form-item">
                        <input type="password" placeholder="Password" />
                      </div>
                      <button type="submit" className="login-btn">login now</button>
                    </form>
                  </div>
                  <div className="bottom-text white-color">
                    <p className="m-0">
                      * Denotes mandatory field.
                    </p>
                    <p className="m-0">** At least one telephone number is required.</p>
                  </div>
                </div>
                {/* rightside-content - end */}
                <a className="popup-modal-dismiss" href="#!">
                  <i className="fas fa-times" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* login-btn-group - end */}
      {/* social-links - start */}
      <div className="social-links">
        <h2 className="menu-title">get in touch</h2>
        <div className="mb-15">
          <h3 className="contact-info">
            <i className="fas fa-phone" />
            100-2222-9999
          </h3>
          <h3 className="contact-info">
            <i className="fas fa-envelope" />
            info@harmoni.com
          </h3>
        </div>
        <ul>
          <li>
            <a href="#!"><i className="fab fa-facebook-f" /></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-twitter" /></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-twitch" /></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-google-plus-g" /></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-instagram" /></a>
          </li>
        </ul>
        <a href="contact.html" className="contact-btn">contact us</a>
      </div>
      {/* social-links - end */}
      <div className="overlay" />
    </div>
  </div>
  {/* sidebar menu - end */}
</div>
{/* altranative-header - end
		================================================== */}


    </>

  )
}