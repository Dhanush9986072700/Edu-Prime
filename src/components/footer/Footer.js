import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../images/icon/f_call.svg';
import icon2 from '../../images/icon/f_mail.svg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Footer = () => {
    return (
        <footer className="site-footer footer-bg pt-65">
            <div className="container">
                <div className="row mt-none-30 pb-60">
                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title footer-white-color">Have Questions?</h3>
                            <p className="footer-white-color">Contact us for expert guidance on your visa and immigration needs.</p>
                            <ul className="footer__cta list-unstyled mt-30 ">
                                <li className="ul_li footer-white-color">
                                    <span><img src={icon1} alt="Phone" /></span>
                                    +91 96112 34182
                                </li>
                                <li className="ul_li footer-white-color">
                                    <span><img src={icon2} alt="Email" /></span>
                                    info@eduprimeoverseas.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title footer-white-color">Important Links</h3>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="footer__links list-unstyled footer-white-color">
                                        <li><Link to="/" onClick={ClickHandler}>Home</Link></li>
                                        <li><Link to="/about" onClick={ClickHandler}>About Us</Link></li>
                                        <li><Link to="/study-visa" onClick={ClickHandler}>Study Visa</Link></li>
                                        <li><Link to="/tourist-visa" onClick={ClickHandler}>Tourist Visa</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="footer__links list-unstyled footer-white-color">
                                        <li><Link to="/investor-visa" onClick={ClickHandler}>Investor Visa</Link></li>
                                        <li><Link to="/jobseeker-visa" onClick={ClickHandler}>Job Seeker Visa</Link></li>
                                        <li><Link to="/blog" onClick={ClickHandler}>Blog</Link></li>
                                        <li><Link to="/contact" onClick={ClickHandler}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title footer-white-color">About EduPrime</h3>
                            <p className="footer-white-color">
                                EduPrime Overseas is a trusted visa and immigration consultancy based in India, committed to helping students, families, and professionals achieve their global goals.
                            </p>
                            <ul className="footer__cta list-unstyled mt-20 footer-white-color">
                                <li>ECILA GLOBAL PRIVATE LIMITED</li>
                                <li>CIN: U74999KA2022PTC169710</li>
                                <li>Hours: Mon – Sat (10 AM to 6 PM)</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer__copyright ul_li_between">
                    <div className="footer__copyright-text mt-15 footer-white-color">
                        Copyright © 2025 EduPrime. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
