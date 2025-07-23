import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
// import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import CanadaFaqSection from '../../components/FaqSection/CanadaFaqSection';
import CanadaFunFact from '../../components/student-visa-components/StudentFunFact/CanadaFunFact';
import TopInstitutions from '../../components/student-visa-components/TopInstitutions/TopInstitutions';

import eImg1 from '../../images/country/canada-image.png'
import eImg from '../../images/icon/global.svg'
import eImg2 from '../../images/icon/profile-2user-2.svg'
import eImg3 from '../../images/icon/teacher.svg'
import eImg4 from '../../images/icon/home-trend-up.svg'
import eImg5 from '../../images/country/single2.jpg'
import eImg6 from '../../images/icon/star.svg'


const Canada = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            {/* <PageTitle pageTitle={'Canada'} pagesub={'Canada'} /> */}
            <section className="about pt-50">
                <div className="container">
                    <div className="row mb-40 align-items-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-20">
                                <h2 className="wow skewIn">Study in Canada <br /> <span>Your Pathway to Global Success</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="sec-title mb-20">
                                <p>From world-class universities to welcoming communities, Canada offers an ideal environment for international students. At XIPHIAS, we guide you from choosing the right program to landing on Canadian soil—smoothly and confidently.<br /> <Link onClick={ClickHandler} to="/contact" className='textbold'>Start Your Free Profile Assessment<span></span></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="xb-about__img">
                        <img src={eImg1} alt="" />
                    </div>
                </div>
            </section>
            <CanadaFunFact />
            <section className="coaching-single pt-120 pb-130">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="single-content">
                                <h3>Why Study in Canada?</h3>
                                <div className="single-content__feature ul_li">
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner ul_li">
                                            <div className="xb-item--icon">
                                                <img src={eImg} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Top-ranked universities & colleges</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-2 ul_li">
                                            <div className="xb-item--icon">
                                                <img src={eImg2} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Work while you study</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-3 ul_li">
                                            <div className="xb-item--icon">
                                                <img src={eImg3} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Post-Graduation Work Permit</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-4 ul_li">
                                            <div className="xb-item--icon">
                                                <img src={eImg4} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Permanent residency prospects</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TopInstitutions/>
            <section className="coaching-single pt-120 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content">
                                <h3>New Visa Requirements You Should Know</h3>
                                <p>Canada is home to some of the world’s most respected universities and colleges, offering globally recognized degrees and exceptional academic support for international students.</p>
                                <div className="row align-items-center mt-10">
                                    <div className="col-lg-3 mt-30">
                                        <img src={eImg5} alt="" />
                                    </div>
                                    <div className="col-lg-8 mt-30">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><img src={eImg6} alt="" />Financial proof requirement increased: You must now show at least CAD 20,635 per year (above tuition) in living funds</li>
                                            <li><img src={eImg6} alt="" />As of early 2025, IRCC has tightened rules—Indian students saw a 31% drop in permits issued during Q1 2025. Original 44,295 dropped to 30,650 year-over-year</li>
                                            <li><img src={eImg6} alt="" />Be prepared to prove fund sustainability (e.g., GIC accounts, savings, scholarships), and that high-quality intentions are clear.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-content pt-50">
                                <h3>Who Can Apply? Check Your Eligibility</h3>
                                <div className="row align-items-center mt-10">
                                    
                                    <div className="col-lg-12">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><img src={eImg6} alt="" />DLI Acceptance Letter</li>
                                            <li><img src={eImg6} alt="" />Valid passport</li>
                                            <li><img src={eImg6} alt="" />Proof of funds: Tuition + CAD 20,635 living cost</li>
                                            <li><img src={eImg6} alt="" />English language score (e.g. IELTS 6.0+, TOEFL, PTE)</li>
                                            <li><img src={eImg6} alt="" />Clean police and medical certificates</li>
                                            <li><img src={eImg6} alt="" />Strong statement of purpose and evidence of intent to study</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-content pt-50">
                                <h3>How the Process Works</h3>
                                <div className="row align-items-center mt-10">
                                    
                                    <div className="col-lg-12">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><img src={eImg6} alt="" />Free Consultation & Profile Assessment</li>
                                            <li><img src={eImg6} alt="" />University & Program Shortlisting</li>
                                            <li><img src={eImg6} alt="" />Application Submission & Offer Letter</li>
                                            <li><img src={eImg6} alt="" />Financial Preparation (GIC, bank statements, scholarships)</li>
                                            <li><img src={eImg6} alt="" />Study Visa Filing, Biometrics & Medical Exams</li>
                                            <li><img src={eImg6} alt="" />Visa Interview Prep & Submission</li>
                                            <li><img src={eImg6} alt="" />Visa Decision & Pre-departure Support</li>
                                            <li><img src={eImg6} alt="" />Arrival & Ongoing Support in Canada</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-content pt-50">
                                <h3>What You Can Do With a Canadian Study Permit</h3>
                                <div className="row align-items-center mt-10">
                                    
                                    <div className="col-lg-12">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><img src={eImg6} alt="" />Work up to 24 hrs/week during semesters (full-time during breaks</li>
                                            <li><img src={eImg6} alt="" />Bring family: dependent work or study permits may be an option</li>
                                            <li><img src={eImg6} alt="" />Post-Study Employment: Up to 3-year PGWP for eligible programs</li>
                                            <li><img src={eImg6} alt="" />Pathway to PR: Use Canadian work experience for Express Entry or Provincial Nominee Programs</li>
                                            
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CanadaFaqSection />
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Canada;

