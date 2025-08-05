import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import shape from '../../images/icon/n_pad.svg'


const ContactSection = (props) => {
    return (
        <section className="contact contact-pt bg-white">
            <div className="container">
                <div className="xb-contact pos-rel">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="xb-item--inner">
                                <div className="xb-item--holder mb-25">
                                    <span><img src={shape} alt="" />Contact Us</span>
                                    <h3>Do you have questions or went more <br /> information?</h3>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.4345047495663!2d74.8376558!3d12.8797585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b85cac12e7b%3A0xb374947fffaea020!2sEduprime%20overseas!5e0!3m2!1sen!2sin!4v1754390220786!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Eduprime Map"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection;