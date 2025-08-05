import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header3 from '../../components/header3/Header3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import india from '../../images/flags/india.png';
import uk from '../../images/flags/uk.png';

import SocialIcons from '../../components/SocialIcons/SocialIcons';


const ContactPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            {/* ✅ SEO Helmet Block for Contact Page */}
            <Helmet>
                <title>Contact Us | Talk to Edu Prime Immigration Experts</title>
                <meta name="description" content="Need help with immigration or visa processes? Contact Edu Prime for expert guidance and quick support. Visit our offices or connect online." />
                <meta name="keywords" content="Contact Edu Prime, Visa Consultation, Immigration Help, Visa Experts, Office Location, Edu Prime Immigration" />
                <link rel="canonical" href="https://www.eduprime.com/contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Edu Prime | Visa & Immigration Support" />
                <meta property="og:description" content="Need assistance with visas or relocation? Visit or contact Edu Prime and speak to our experts." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eduprime.com/contact" />
                <meta property="og:image" content="https://www.eduprime.com/images/social-share-image.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Edu Prime | Visa & Immigration Support" />
                <meta name="twitter:description" content="Need assistance with visas or relocation? Visit or contact Edu Prime and speak to our experts." />
                <meta name="twitter:image" content="https://www.eduprime.com/images/social-share-image.png" />
            </Helmet>

            <Header3 />
            <section className="contact-section-topspace">
                <ContactSection />
            </section>


            <section className="contact pt-20 bg-white">
                <div className="container">
                    <div className="branch-row">
                        {/* Canada */}
                        <div className="branch-card">
                            <div className="branch-top">
                                <img src={india} alt="Canada Flag" className="branch-flag" />
                                <h4 className="branch-title">India</h4>
                            </div>

                            <div className="branch-info">
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                                    <p>Door no, Empire mall, 5-5-279/44, MG Rd, Kodailbail, Mangaluru, Karnataka 575003</p>
                                </div>
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-phone"></i></div>
                                    <p>+91 96112 34182 | +91 73489 35913</p>
                                </div>
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                                    <p>info@eduprimeoverseas.com</p>
                                </div>
                            </div>
                        </div>

                        {/* UK */}
                        <div className="branch-card">
                            <div className="branch-top">
                                <img src={uk} alt="Canada Flag" className="branch-flag" />
                                <h4 className="branch-title">United Kingdom</h4>
                            </div>

                            <div className="branch-info">
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                                    <p>17 Strachey close saffron Walden CB10 2GN Essex United Kingdom</p>
                                </div>
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-phone"></i></div>
                                    <p>+44 7446 478651</p>
                                </div>
                                <div className="info-line">
                                    <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                                    <p>info@eduprimeoverseas.com</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </section>
            <Footer />
            <Scrollbar />
            <SocialIcons />
        </Fragment>
    );
};

export default ContactPage;
