import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Signup() {
  // State to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/signup', {
        name,
        email,
        phone_no,
        password,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Header />
      <div>
        <section id="breadcrumb-section" className="breadcrumb-section clearfix">
          <div className="jarallax" style={{ backgroundImage: 'url(assets/images/breadcrumb/0.breadcrumb-bg.jpg)' }}>
            <div className="overlay-black">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="breadcrumb-title text-center mb-50">
                      <span className="sub-title">Sign Up now</span>
                      <h2 className="big-title">keep <strong>in touch</strong></h2>
                    </div>
                    <div className="breadcrumb-list">
                      <ul>
                        <li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sign Up us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-section" className="contact-section sec-ptb-100 clearfix">
          <div className="container">
            <div className="section-title mb-50">
              <small className="sub-title">Sign Up</small>
            </div>

            {/* Display success or error message */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="contact-form form-wrapper text-center">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-item">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-item">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-item">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={phone_no}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-item">
                      <input
                        type="password"
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="custom-btn">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
