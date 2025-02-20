import React from 'react'

export default function Header() {
  return (
    <>
    		{/* header-section - start
		================================================== */}
<header id="header-section" className="header-section sticky-header-section not-stuck clearfix">
  {/* header-bottom - start */}
  <div className="header-bottom">
    <div className="container">
      <div className="row">
        {/* site-logo-wrapper - start */}
        <div className="col-lg-3">
          <div className="site-logo-wrapper">
            <a href="index-1.html" className="logo">
              <img src="assets/images/1.site-logo.png" alt="logo_not_found" />
            </a>
          </div>
        </div>
        {/* site-logo-wrapper - end */}
        {/* mainmenu-wrapper - start */}
        <div className="col-lg-9">
          <div className="mainmenu-wrapper">
            <div className="row">
              {/* menu-item-list - start */}
              <div className="col-lg-10">
                <div className="menu-item-list ul-li clearfix">
                  <ul>
                    <li className="menu-item-has-children active">
                      <a href="#!">home</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="index-1.html" className="active">home v.1</a>
                          <ul className="sub-menu">
                            <li>
                              <a href=" ">example v.1.1</a>
                            </li>
                            <li>
                              <a href=" ">example v.1.2</a>
                            </li>
                            <li>
                              <a href=" ">example v.1.3</a>
                            </li>
                            <li>
                              <a href=" ">example v.1.4</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index-2.html">home v.2</a>
                          <ul className="sub-menu">
                            <li>
                              <a href=" ">example v.2.1</a>
                            </li>
                            <li>
                              <a href=" ">example v.2.2</a>
                            </li>
                            <li>
                              <a href=" ">example v.2.3</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index-3.html">home v.3</a>
                          <ul className="sub-menu">
                            <li>
                              <a href=" ">example v.3.1</a>
                            </li>
                            <li>
                              <a href=" ">example v.3.2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="index-4.html">home v.4</a>
                          <ul className="sub-menu">
                            <li>
                              <a href=" ">example v.4.1</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">about</a>
                      <ul className="sub-menu">
                        <li><a href="about.html">about us</a></li>
                        <li><a href="service.html">service</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">events</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="event-1.html">event List</a>
                          <ul className="sub-menu">
                            <li><a href="event-1-without-sidebar.html">list without sidebar</a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="event-2.html">event Grid</a>
                          <ul className="sub-menu">
                            <li><a href="event-2-without-sidebar.html">grid without sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="event-details.html">event details</a></li>
                        <li><a href="booking.html">event booking</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">blogs</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="blog-details.html">blog details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="gallery.html">gallery</a>
                    </li>
                    <li>
                      <a href="speaker.html">speaker</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">contact</a>
                      <ul className="sub-menu">
                        <li><a href="contact.html">contact us</a></li>
                        <li><a href="404-error.html">404 Error</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* menu-item-list - end */}
              {/* menu-item-list - start */}
              <div className="col-lg-2">
                <div className="user-search-btn-group ul-li clearfix">
                  <ul>
                    <li>
                      <a href="#login-modal" className="login-modal-btn">
                        <i className="fas fa-user" />
                      </a>
                      <div id="login-modal" className="reglog-modal-wrapper mfp-hide clearfix" style={{backgroundImage: 'url(assets/images/login-modal-bg.jpg)'}}>
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
                              <p className="m-0">©2019 <a href="#!" className="yellow-color">Harmoni.com</a> all right reserved, made with <i className="fas fa-heart" /> by jThemes Studio </p>
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
                    <li>
                      <button type="button" className="toggle-overlay search-btn">
                        <i className="fas fa-search" />
                      </button>
                      {/* search-body - start */}
                      <div className="search-body">
                        <div className="search-form">
                          <form action="#">
                            <input className="search-input" type="search" placeholder="Search Here" />
                            <div className="outer-close toggle-overlay">
                              <button type="button" className="search-close">
                                <i className="fas fa-times" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* search-body - end */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* menu-item-list - end */}
            </div>
          </div>
        </div>
        {/* mainmenu-wrapper - end */}
      </div>
    </div>
  </div>
  {/* header-bottom - end */}
</header>
{/* header-section - end
		================================================== */}


    </>

  )
}