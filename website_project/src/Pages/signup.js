import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Signup() {
  // State to store form input values
 // State to store form input values
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phoneNo, setPhoneNo] = useState('');
 const [password, setPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');
 const [successMessage, setSuccessMessage] = useState('');
 const navigate = useNavigate()
 // Handle form submission
 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const response = await axios.post('http://localhost:8000/api/signup', {
       name,
       email,
       phone_no: phoneNo,
       password,
     });

     // Display success message
     setSuccessMessage(response.data.message);
     setErrorMessage('');
     
     // Clear form fields
     setName('');
     setEmail('');
     setPhoneNo('');
     setPassword('');
     navigate('/login')
     alert('User Registered successfully..')
   } catch (error) {
     setErrorMessage(error.response?.data?.message || 'Something went wrong.');
     setSuccessMessage('');
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
            <h2 className="mt0 mb-2  text-center">Sign Up</h2>
       
          </div>
          <div className="form-block">
          <form onSubmit={handleSubmit}>
                    <div className="fieldsets row">
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>
                    <div className="fieldsets row">
                      <div className="col-md-6">
                        <input 
                          type="password" 
                          placeholder="Password" 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          placeholder="Phone No" 
                          value={phoneNo} 
                          onChange={(e) => setPhoneNo(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>

                    <div className="fieldsets mt20"> 
                      <button type="submit" className="lnk btn-main bg-btn">Submit</button> 
                    </div>
                  </form>

                  {/* Success & Error Messages */}
                  {successMessage && <p className="success-message">{successMessage}</p>}
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
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
