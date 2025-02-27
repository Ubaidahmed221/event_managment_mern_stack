import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed!");
        }
    };

    return (
        <>
            <Header />
            <section className="contact-section sec-ptb-100 clearfix">
                <div className="container">
                    <div className="section-title mb-50 text-center">
                        <small className="sub-title">Login</small>
                    </div>
                    <div className="contact-form form-wrapper text-center">
                        {message && <p>{message}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-item">
                                        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-item">
                                        <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="custom-btn">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
