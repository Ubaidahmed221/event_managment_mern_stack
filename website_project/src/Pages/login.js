import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', formData);
            setMessage(response.data.message);
            navigate('/')
            alert('User login successfully..')
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed!");
        }
    };

    return (
        <>
            <Header />
            <div>
                <section className="event-banner mt80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 ">
                                <div className="common-heading text-l">
                                    <h2 className="mt0 mb-2 text-center">Login</h2>
                                </div>
                                <div className="form-block">
                                    <form onSubmit={handleSubmit}>
                                        <div className="fieldsets row">
                                            
                                            <div className="col-md-3">
                                                </div>
                                            <div className="col-md-6">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="Email Address" 
                                                    value={formData.email} 
                                                    onChange={handleChange} 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="fieldsets row">
                                        <div className="col-md-3">
                                        </div>
                                            <div className="col-md-6">
                                                <input 
                                                    type="password" 
                                                    name="password"
                                                    placeholder="Password" 
                                                    value={formData.password} 
                                                    onChange={handleChange} 
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div className="fieldsets mt20"> 
                                            <button type="submit" className="lnk btn-main bg-btn">Submit</button> 
                                        </div>
                                    </form>

                                    {/* Success & Error Messages */}
                                    {message && <p className="message">{message}</p>}
                                    <div id="formResponse" /> {/* Element to display the success/error message */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
