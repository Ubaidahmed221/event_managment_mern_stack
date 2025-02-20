import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import $ from "jquery";
import "magnific-popup";

export default function EventGallerySection() {
  useEffect(() => {
    // Isotope Initialization
    let iso = new Isotope(".grid", {
      itemSelector: ".grid-item",
      layoutMode: "masonry",
    });

    // Filter buttons click event
    $(".filters-button-group").on("click", "button", function () {
      let filterValue = $(this).attr("data-filter");
      iso.arrange({ filter: filterValue });
    });

    // Active class toggle
    $(".filters-button-group button").on("click", function () {
      $(".filters-button-group button").removeClass("is-checked");
      $(this).addClass("is-checked");
    });

    // Magnific Popup for image
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });

    // Magnific Popup for video
    $(".popup-youtube").magnificPopup({
      type: "iframe",
    });

    return () => {
      iso.destroy(); // Cleanup isotope instance
    };
  }, []);

  return (
    <section id="event-gallery-section" className="event-gallery-section sec-ptb-100 clearfix">
      <div className="section-title text-center mb-50">
        <small className="sub-title">harmoni gallery</small>
        <h2 className="big-title">Beautiful &amp; <strong>Unforgettable Times</strong></h2>
      </div>

      <div className="button-group filters-button-group mb-30">
        <button className="button is-checked" data-filter="*">
          <i className="fas fa-star" /> <strong>all</strong> gallery
        </button>
        <button className="button" data-filter=".video-gallery">
          <i className="fas fa-play-circle" /> <strong>video</strong> gallery
        </button>
        <button className="button" data-filter=".photo-gallery">
          <i className="far fa-image" /> <strong>photo</strong> gallery
        </button>
      </div>

      <div className="grid zoom-gallery clearfix mb-80">
        <div className="grid-item grid-item--height2 photo-gallery mb-5">
          <a className="popup-link" href="assets/images/gallery/1.image.jpg">
            <img src="assets/images/gallery/1.image.jpg" alt="Image_not_found" />
          </a>
          <div className="item-content">
            <h3>John Doe Wedding day</h3>
            <span>Wedding Party, 24 June 2016</span>
          </div>
        </div>

        <div className="grid-item grid-item--width2 video-gallery">
          <a className="popup-youtube" href="https://youtu.be/-haiaZ011OM">
            <img src="assets/images/gallery/2.image.jpg" alt="Image_not_found" />
          </a>
          <div className="item-content">
            <h3>Business Conference in Dubai</h3>
            <span>Food Festival, 24 June 2016</span>
          </div>
        </div>
       
       
       
      </div>

      <div className="text-center">
        <a href="/gallery" className="custom-btn">view all gallery</a>
      </div>
    </section>
  );
}
