import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
      <>
          <Header/>
        <div>
  {/*  */}
  <section className="brand-bg about-banner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="left-side-about">
            <div className="header-heading">
              <h3 className=" border-tittle-sec  wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                Host a Virtual or Hybrid Exhibition
              </h3>
              <p className=" wow fadeInUp py-4 mb-0" data-wow-duration="2s" data-wow-delay=".4s">You can now host virtual and hybrid events from the palm of your hands. vExpo is the first virtual exhibition platform in Pakistan.
              </p>
              <a href="contact-us.html" className="btn-main bg-btn lnk wow fadeInUp" data-wow-duration="2s" data-wow-delay=".6s">Request Demo <i className="fas fa-chevron-right fa-ani" /><span className="circle" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 v-center tilt-3d pl-5">
          <div className="img-block base" data-tilt data-tilt-max={4} data-tilt-speed={2000}><img height="550px" src="img/about-banner.png" className="img-fluid upset dg-hero-img0" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h3 className="mb-4">What is <span className="text-effect-1">vExpo</span>?</h3>
            <h4 className="pl-3 para-border">
              With vExpo, you can create live online <br /> events that are interactive and personal
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <p>
              When we started designing vExpo a few years ago, our aim was to give organizers the ability
              to recreate the in-person event experience as closely as possible, but online and all in one
              place.
            </p>
            <p className="mt-3">
              Nothing like this existed and we knew it would be a tall order. But over time, we have come
              up with a few innovative features that help you accomplish this.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  <section className="brand-bg atende">
    <div className="container">
      <div className="row align-items-center about-reverse">
        <div className="col-lg-6 v-center tilt-3d">
          <div className="img-block base" data-tilt data-tilt-max={4} data-tilt-speed={2000}><img height="550px" src="img/about-2.png" className="img-fluid upset dg-hero-img0" />
          </div>
        </div>
        <div className="col-lg-6 pl-5">
          <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <div className="common-heading text-left">
              <h2 className="mb20">At a vExpo event, your <br /> attendees can:
              </h2>
              <p className="mb20">Our platform is fully customizable. Manage booths and the halls easily.
                Promote sponsors you want to and manage their banners.
              </p>
              <p className="mb20">Our Platform allows you to:
              </p>
            </div>
            <ul className="list-tick">
              <li>
                <p>Network one-on-one over live video.
                </p>
              </li>
              <li>
                <p>“Connect” and exchange virtual business cards for following up later.
                </p>
              </li>
              <li>
                <p>Join breakout sessions and participate in groups.
                </p>
              </li>
              <li>
                <p>Watch keynote presentations on stage, send chat messages, fill out polls, and explore
                  interactive expo areas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  {/* <section class="weworkfor bg-color-1 about-sponser">
    <div class="container ">
  <div class="row">
      <div class="col">
          <div class="highlight-info">
              <h2 class="text-center border-tittle  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                  Some Of Our Sponsors
              </h2>
          </div>
      </div>
  </div>
  <div class="row mt-5">
      <div class="col-lg-12">
          <div class="logo-weworkfor owl-carousel">
              <div class="items"><img src="img/sponser/s-4.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-8.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-3.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-1.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-5.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-6.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-7.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-2.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-9.png" class="img100w"></div>
              <div class="items"><img src="img/sponser/s-10.png" class="img100w"></div>
          </div>
      </div>
  </div>
    </div>
</section> */}
  {/*  */}
  {/*  */}
  <section className="multi-img-about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div>
            <h3 className="mb-2 text-white">Our mission is to sustainably</h3>
            <h2 className="mb-5 res-mb text-white">Bring all people together
            </h2>
            <h3 className="mb-2 text-white">So that there is less loneliness,</h3>
            <h2 className="text-white">More gathering, interacting and growing.
            </h2>
          </div>
        </div>
        <div className="col-md-6 v-center tilt-3d pl-5">
          <div className="img-block base" data-tilt data-tilt-max={4} data-tilt-speed={2000}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1750 1324" width={1750} height={1324} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width={1750} height={1324} x={0} y={0} />
                </clipPath>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331fd31e0d2d5fe2acd_img_0.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331a287d557eca909f1_img_1.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad433144b8d85e4e29bc87_img_2.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331a979d8dff955f789_img_3.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331c98db664f63e15ec_img_4.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4332e6b1e38195d7039c_img_5.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4333aeb2a3ab9b83da85_img_6.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4332afcc30765b0f8711_img_7.png">
                </image>
                <image xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4333def54e4ef683ef2a_img_8.png">
                </image>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,1171.26708984375,886)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4333def54e4ef683ef2a_img_8.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,594.7670288085938,888)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4332afcc30765b0f8711_img_7.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,19.76702880859375,889)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4333aeb2a3ab9b83da85_img_6.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,1171.26708984375,451)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4332e6b1e38195d7039c_img_5.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,596.2670288085938,452)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331c98db664f63e15ec_img_4.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(0.9999945163726807,0,0,0.9999945163726807,19.2685546875,450.00115966796875)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331a979d8dff955f789_img_3.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(0.999997615814209,0,0,0.999997615814209,1171.2677001953125,16.00048828125)" opacity="0.9999910432029601">
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad433144b8d85e4e29bc87_img_2.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(0.9999995231628418,0,0,0.9999995231628418,594.7671508789062,17.0001220703125)" opacity="0.9999982099282965">
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331a287d557eca909f1_img_1.png">
                  </image>
                </g>
                <g className="png" style={{display: 'block'}} transform="matrix(1,0,0,1,19.26702880859375,15)" opacity={1}>
                  <image width="560px" height="420px" preserveAspectRatio="xMidYMid slice" xlinkHref="../assets-global.website-files.com/5fa24a97853b6c62b7063020/5fad4331fd31e0d2d5fe2acd_img_0.png">
                  </image>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/*  */}
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col ">
          <div className="common-heading">
            <h2 className="mb20 border-tittle">Why Choose Us</h2>
            <p>Everything you need to know so you can use vExpo like a pro you need to know so you can use
              vExpo like a pro.
            </p>
          </div>
        </div>
      </div>
      <div className="row res-mt mt-5">
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="img/icon/whychoose-1.svg" alt="service" className="img-fluid" /></div>
            <h4>Steps Interactive Booths</h4>
            <p>Designed to give the user the ultimate experience.</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="img/icon/whychoose-2.svg" alt="service" className="img-fluid" /></div>
            <h4>Email Marketing</h4>
            <p>Use our email marketing tool to market your event.</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="img/icon/whychoose-4.svg" alt="service" className="img-fluid" /></div>
            <h4>24/7 Support</h4>
            <p>Get complete support 24/7 from our team.</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="img/icon/whychoose-3.svg" alt="service" className="img-fluid" /></div>
            <h4>Custom Landing Pages</h4>
            <p>Create customisable landing pages to market your events.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  <section className="cta-area pad-tb brand-bg pb-5 ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading">
            <h2 className=" border-tittle">We Love to Listen to Your Requirements</h2>
            <a href="contact-us.html" className="btn-main bg-btn lnk">Request Demo <i className="fas fa-chevron-right fa-ani" /><span className="circle" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

          <Footer/>

          </>
    )
}