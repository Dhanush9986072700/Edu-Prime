import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header3 from '../../../components/header3/Header3';
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import StudentFunFact from '../../../components/student-visa-components/StudentFunFact/StudentFunFact';
import ContactSection from '../../../components/ContactSection';
import aboutImg from '../../../images/about/about_img3.jpg'
import aboutImg2 from '../../../images/bg/mission.jpg'
import aboutImg3 from '../../../images/bg/vission.jpg'





const AboutUsPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header3 />
            <section className="about pt-170">
                <div className="container">
                    <div className="row mb-40 align-items-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-20">
                                <h2 className="wow skewIn">Committed to Your Visa <br /> <span>Success - About us</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="sec-title mb-20">
                                <p>We deliver budget-friendly visa solutions, removing financial barriers from your journey. Our goal is to provide quality services at reasonable rates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xb-about__img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </section>

            <StudentFunFact />
            <section className="mission pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse mt-none-30">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img text-lg-end">
                                <div className="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                                    <img src={aboutImg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn">Guiding Your Path with Our <br /> <span>Immigration Mission</span></h2>
                                    <p>We're here to simplify immigration complexities, guiding you to success. Our mission is to unite families, open opportunities, and make your journey enriching. Your dreams are our focus on the path to a brighter future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img">
                                <div className="inner-img d-inline-block wow skewIn">
                                    <img src={aboutImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">Our Immigration <br /> <span>Service history</span></h2>
                                    <p>Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;
