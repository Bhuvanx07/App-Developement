import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    console.log(formData);
    axios.post("http://localhost:8081/api/v1/auth/Contact/post ", formData)
      .then((response) => {
        console.log(response.data);
        // Assuming the response from the server is handled properly here.
        // You can update the UI based on the server response if needed.
        setSubmitted(true);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
        // Handle error scenarios if needed.
      });
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              cols='30'
              rows='10'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Contact;
