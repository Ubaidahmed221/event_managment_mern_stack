import React, { useEffect } from "react";

export default function GoogleMapSection() {
  useEffect(() => {
    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = loadMap; // Ensure map initializes after script loads
    } else {
      loadMap();
    }
  }, []);

  const loadMap = () => {
    const mapOptions = {
      center: { lat: 40.712776, lng: -74.005974 }, // New York Coordinates
      zoom: 14,
    };

    new window.google.maps.Map(document.getElementById("googleMaps"), mapOptions);
  };

  return (
    <section id="map-section" className="map-section clearfix">
      <div className="address-wrapper">
        <div className="address-info-topbar mb-30 clearfix">
          <div className="address-info-left">
            <h3 className="title-text">Harmoni Event Management</h3>
            <p className="m-0">
              Apple Store, 112 Prince St New York, NY 10012, United States 80361, United States
            </p>
          </div>
          <div className="address-info-right">
            <ul>
              <li>
                <button type="button">
                  <span className="icon"><i className="fas fa-street-view" /></span>
                  <small>Direction</small>
                </button>
              </li>
              <li>
                <button type="button">
                  <span className="icon"><i className="fas fa-rss" /></span>
                  <small>Save</small>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="address-info-bottombar clearfix">
          <div className="address-info-left">
            <div className="rating-star">
              <span className="rating-point">4.5</span>
              <ul>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star-half" /></li>
              </ul>
            </div>
            <p className="m-0">105 reviews</p>
          </div>
          <div className="address-info-right">
            <button type="button" className="map-larger-btn">
              View Larger Map
            </button>
          </div>
        </div>
      </div>
      <div id="google-map">
        <div id="googleMaps" className="google-map-container" style={{ height: "400px", width: "100%" }} />
      </div>
    </section>
  );
}
