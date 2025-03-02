import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
    return (
      <>
          <Header/>
        
	<div>
  <section className="event-banner mt80">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 ">
          <div className="common-heading text-l">
            <h2 className="mt0 mb0 border-tittle-sec">Need a Demo? OR Have Question? Write a Message
            </h2>
            <p className="mb60 mt20">We will catch you as early as we receive the message</p>
          </div>
          <div className="form-block">
            <form id="contactForm" action="https://www.vexpo.pk/send_mail.php" method="post" name="feedback-form">
              <div className="fieldsets row">
                <div className="col-md-6"><input type="text" placeholder="Full Name" name="name" required /></div>
                <div className="col-md-6"><input type="email" placeholder="Email Address" name="email" required /></div>
              </div>
              <div className="fieldsets row">
                <div className="col-md-6"><input type="number" placeholder="Contact Number" name="phone" required /></div>
                <div className="col-md-6"><input type="text" placeholder="Subject" name="subject" required /></div>
              </div>
              <div className="fieldsets"><textarea placeholder="Message" name="message" required defaultValue={""} /></div>
              <div className="fieldsets mt20"> 
                <button type="submit" className="lnk btn-main bg-btn">Submit</button> 
              </div>
              <p className="trm"><i className="fas fa-lock" />We hate spam, and we respect your privacy.</p>
            </form>
            <div id="formResponse" /> {/* Element to display the success/error message */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Start Portfolio*/}
  <section className="portfolio-section bg-white pad-tb">
    <div className="container">
      <div className="row justify-content-center py-5 ">
        <div className="col-lg-8">
          <div className="common-heading">
            <h2 className="mb20 border-tittle-white text-white">Let's get in touch</h2>
            <p className="text-white">vExpo is Pakistan's #1 virtual and hybrid events platform.
            </p>
          </div>
        </div>
      </div>
      <div className="tz-gallery">
        <div className="row upset ovr-bg2 bd-hor">
          <div className="col-md-3 mt30 wow fadeInUp" data-wow-delay=".2s">
            <div className="s-block text-center  up-hor bd-hor-base">
              <div className="nn-card-set">
                <div className="s-card-icon"><img src="assets/images/icons/answer.svg" alt="service" className="img-fluid" /></div>
                <h4>Quick Answers</h4>
                <p>Find brief answers to your short questions here.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt30 wow fadeInUp" data-wow-delay=".2s">
            <div className="s-block text-center  up-hor bd-hor-base">
              <div className="nn-card-set">
                <div className="s-card-icon"><img src="assets/images/icons/phone-call.svg" alt="service" className="img-fluid" /></div>
                <h4>Let's Talk</h4>
                <p>Pick up the phone to chat with a member of our team.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt30 wow fadeInUp" data-wow-delay=".2s">
            <div className="s-block text-center  up-hor bd-hor-base">
              <div className="nn-card-set">
                <div className="s-card-icon"><img src="assets/images/icons/social-media.svg" alt="service" className="img-fluid" /></div>
                <h4>We are Social</h4>
                <p>Get involved in making the dream a reality today.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt30 wow fadeInUp" data-wow-delay=".2s">
            <div className="s-block text-center  up-hor bd-hor-base">
              <div className="nn-card-set">
                <div className="s-card-icon"><img src="assets/images/icons/online-chat.svg" alt="service" className="img-fluid" /></div>
                <h4>Support</h4>
                <p>We're here to help with any questions or queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="brand-bg">
    <div className="container">
      <div className="row mt60-  contact-faq  ">
        <div className="col-lg-5 pr-5">
          <div id="accordion" className="accordion">
            <div className="card-1">
              <div className="card-header" id="faq1">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="false" aria-controls="collapse-a">
                  What Is A Virtual Expo?
                </button>
              </div>
              <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
                <hr />
                <p>The virtual expo is designed for online use and to resemble a conventional expo
                  centre, with lobbies, networking and exhibition halls. There are booths for
                  showcasing projects. An online attendee can view booths/stalls, peruse soft
                  brochures, or chat with sales representatives in real-time, attend keynote
                  presentations and network with virtual stall owners as per his/her convenient time
                  and location.</p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq1">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="false" aria-controls="collapse-a">
                  What Is Green Factor In vExpo?
                </button>
              </div>
              <div id="collapse-a" className="card-body collapse" aria-labelledby="faq1" data-parent="#accordion">
                <hr />
                <p>vExpo is Pakistan's first-ever virtual expo that connects vendors, developers,
                  consultants from Pakistan's construction industry with potential customers. The
                  event will showcase products, services, innovations and ideas that are
                  environmentally and economically sustainable. No need to spend a penny on printing
                  materials, travel or construction of stalls.</p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq2">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="false" aria-controls="collapse-b">
                  What Can I Do At vExpo?
                </button>
              </div>
              <div id="collapse-b" className="card-body collapse" aria-labelledby="faq2" data-parent="#accordion">
                <hr />
                <p>Visit dozens of Projects, exchange contact information and interact with vExpo's
                  stall owners. At the online event you’ll be able to: Interact one-on-one with stall
                  owners. Download product manuals, demos, brochures, videos on your computer for
                  further reference. Connect with your industry peers through audio, video and text
                  messages. Shortlist or Buy the best available deals.
                </p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq3">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                  How Do I Register For vExpo?
                </button>
              </div>
              <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
                <hr />
                <p>To register, log on to <a href="index-2.html"> http://www.vexpo.pk</a> and
                  complete the ‘New Registration’ form. Fill out the online form to complete your
                  registration. Once registered, you can access the digital event soon. You will also
                  receive a reminder email just before the launch of vExpo.
                </p>
              </div>
            </div>
            <div className="card-1">
              <div className="card-header" id="faq4">
                <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-d" aria-expanded="false" aria-controls="collapse-a">
                  I Registered For vExpo But I Am Unable To Log In.
                </button>
              </div>
              <div id="collapse-d" className="card-body collapse" aria-labelledby="faq4" data-parent="#accordion">
                <hr />
                <p>vExpo will be live soon. Once the event is up and running, you can use the login
                  information (username and password) created at the time of registration to
                  participate in the event. (If you have forgotten your password, reset it using the
                  ‘forgot password link from the homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 contact2dv  ">
          <div className="info-wrapr">
            <div className="dbox contact-box d-flex align-items-start">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="text pl-4">
                <p><span>Address:</span> Lahore, Punjab, Pakistan-54000</p>
              </div>
            </div>
            <div className="dbox contact-box d-flex align-items-start">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="text pl-4">
                <p><span className="mr-2">Phone:</span> <a href="tel:03224398768">03-224-398-768</a>
                  {/* <a href="tel:03171714358" class="ml-3"> 03-171-714-358</a> */}
                </p>
              </div>
            </div>
            <div className="dbox contact-box d-flex align-items-start m-0">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fas fa-envelope" />
              </div>
              <div className="text pl-4">
                <p><span>Email:</span> <a href="mailto:info@vExpo.com">info@vexpo.com</a></p>
              </div>
            </div>
          </div>
          <div className="map text-center mt-5 d-none">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27225.328104910357!2d74.25945266347199!3d31.46461911427295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s65%20D1%20JOHAR%20TOWN%2C%20Lahore%2C%20Punjab%2C%20Pakistan-54000!5e0!3m2!1sen!2s!4v1629187930761!5m2!1sen!2s" width={620} height={250} allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Portfolio*/}
</div>

            <Footer/>
      </>
    )
}