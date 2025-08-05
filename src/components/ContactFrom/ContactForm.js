
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import icon1 from '../../images/icon/c_user.svg';
import icon2 from '../../images/icon/c_mail.svg';
import icon3 from '../../images/icon/c_select.svg';
import icon4 from '../../images/icon/c_call.svg';
import icon5 from '../../images/icon/c_message.svg';

const ContactForm = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();
    const timeField = document.createElement('input');
    timeField.type = 'hidden';
    timeField.name = 'time';
    timeField.value = now;
    form.current.appendChild(timeField);

    emailjs.sendForm(
      'service_njw0blf',
      'template_a43trd8',
      form.current,
      'FfGu22vOWnlND_d0G'
    )
      .then((result) => {
        console.log("✅ Email sent:", result.text);
        setSuccessMsg("✅ Thank you for contacting us! We will get back to you as soon as possible.");
        form.current.reset();

        // Hide success message after 5 seconds
        setTimeout(() => setSuccessMsg(''), 5000);
      })
      .catch((error) => {
        console.error("❌ EmailJS error:", error);
        alert("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="xb-item--form contact-from">
        <div className="row">
          {/* Your existing fields */}
          <div className="col-lg-6">
            <div className="xb-item--field">
              <span><img src={icon1} alt="Name Icon" /></span>
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="xb-item--field">
              <span><img src={icon2} alt="Email Icon" /></span>
              <input type="email" name="email" className="form-control" placeholder="you@mail.com" required />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="xb-item--field">
              <span><img src={icon3} alt="Subject Icon" /></span>
              <select name="subject" className="form-control" required>
                <option value="">Select Visa Type</option>
                <option>Student Visa</option>
                <option>Tourist Visa</option>
                <option>Investor Visa</option>
                <option>Jobseeker Visa</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="xb-item--field">
              <span><img src={icon4} alt="Phone Icon" /></span>
              <input type="tel" name="phone" className="form-control" placeholder="+91-123456789" required />
            </div>
          </div>

          <div className="col-12">
            <div className="xb-item--field">
              <span><img src={icon5} alt="Message Icon" /></span>
              <textarea name="message" className="form-control" placeholder="Write your message..." required></textarea>
            </div>
          </div>

          <div className="col-12">
            <button className="thm-btn" type="submit">Send Message</button>
          </div>
        </div>
      </form>

      {/* ✅ Success Message Below */}
      {successMsg && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#e6ffed',
          color: '#2e7d32',
          border: '1px solid #a5d6a7',
          borderRadius: '8px',
          fontWeight: '500'
        }}>
          {successMsg}
        </div>
      )}
    </>
  );
};

export default ContactForm;


