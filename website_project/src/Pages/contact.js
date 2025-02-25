import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
    return (
      <>
          <Header/>
          
        <div>
		
  <section id="breadcrumb-section" className="breadcrumb-section clearfix">
    <div className="jarallax" style={{backgroundImage: 'url(assets/images/breadcrumb/0.breadcrumb-bg.jpg)'}}>
      <div className="overlay-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              {/* breadcrumb-title - start */}
              <div className="breadcrumb-title text-center mb-50">
                <span className="sub-title">contact us now</span>
                <h2 className="big-title">keep <strong>in touch</strong></h2>
              </div>
              {/* breadcrumb-title - end */}
              {/* breadcrumb-list - start */}
              <div className="breadcrumb-list">
                <ul>
                  <li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">contact us</li>
                </ul>
              </div>
              {/* breadcrumb-list - end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb-section - end
		================================================== */}
  {/* contact-section - start
		================================================== */}
  <section id="contact-section" className="contact-section sec-ptb-100 clearfix">
    <div className="container">
      {/* section-title - start */}
      <div className="section-title mb-50">
        <small className="sub-title">contact us</small>
        <h2 className="big-title">Keep in touch <strong>with harmoni</strong></h2>
      </div>
      {/* section-title - end */}
      {/* contact-form - start */}
      <div className="contact-form form-wrapper text-center">
        <form action="https://jthemes.net/themes/html/harmony-event/contact.php" method="post">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="text" placeholder="Your Name" required />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="email" placeholder="Email Address" required />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="text" placeholder="Your Country" required />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="tel" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <textarea placeholder="Your Message" required defaultValue={""} />
              <button type="submit" className="custom-btn">send mail</button>
            </div>
          </div>
        </form>
      </div>
      {/* contact-form - end */}
    </div>
  </section>
  {/* contact-section - end
		================================================== */}
</div>




            <Footer/>
      </>
    )
}