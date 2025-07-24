import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header3 from '../../components/header3/Header3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';
import cimg1 from '../../images/country/img_01.png';
import cimg2 from '../../images/country/img_02.png';
import cimg3 from '../../images/country/img_03.png';

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
            <section className="contact pt-200 pb-120">
                <div className="container">
                    <div className="row justify-content-md-center mt-none-30">
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="xb-contact-info text-center">
                                <div className="xb-item--flag">
                                    <img src={cimg1} alt="Canada Office Flag" />
                                </div>
                                <h3 className="xb-item--title">
                                    <Link onClick={ClickHandler} to="/country">(01) Visit Us Daily</Link>
                                </h3>
                                <div className="xb-item--content">
                                    4140 Parker Rd. Allentown, <br /> Canada 31134
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="xb-contact-info text-center">
                                <div className="xb-item--flag">
                                    <img src={cimg2} alt="Australia Office Flag" />
                                </div>
                                <h3 className="xb-item--title">
                                    <Link onClick={ClickHandler} to="/country">(02) Visit UK Daily</Link>
                                </h3>
                                <div className="xb-item--content">
                                    8502 Preston Rd. Australia, <br /> Maine 98380
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="xb-contact-info text-center">
                                <div className="xb-item--flag">
                                    <img src={cimg3} alt="Greece Office Flag" />
                                </div>
                                <h3 className="xb-item--title">
                                    <Link onClick={ClickHandler} to="/country">(03) Visit GR Daily</Link>
                                </h3>
                                <div className="xb-item--content">
                                    8502 Preston Rd. Greece, <br /> Maine 85380
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ContactPage;
