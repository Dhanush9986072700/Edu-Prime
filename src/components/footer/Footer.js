import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../images/icon/f_call.svg';
import icon2 from '../../images/icon/f_mail.svg';
import icon3 from '../../images/icon/card_img.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Footer = () => {
    return (
        <footer className="site-footer gray-bg pt-65">
            <div className="container">
                <div className="row mt-none-30 pb-60">
                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Have Questions?</h3>
                            <p>Contact us for expert guidance on your visa and immigration needs.</p>
                            <ul className="footer__cta list-unstyled mt-30">
                                <li className="ul_li">
                                    <span><img src={icon1} alt="Phone" /></span>
                                    +91 12345 67890
                                </li>
                                <li className="ul_li">
                                    <span><img src={icon2} alt="Email" /></span>
                                    info@eduprime.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Important Links</h3>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="footer__links list-unstyled">
                                        <li><Link to="/" onClick={ClickHandler}>Home</Link></li>
                                        <li><Link to="/about" onClick={ClickHandler}>About Us</Link></li>
                                        <li><Link to="/study-visa" onClick={ClickHandler}>Study Visa</Link></li>
                                        <li><Link to="/tourist-visa" onClick={ClickHandler}>Tourist Visa</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="footer__links list-unstyled">
                                        <li><Link to="/investor-visa" onClick={ClickHandler}>Investor Visa</Link></li>
                                        <li><Link to="/job-seeker-visa" onClick={ClickHandler}>Job Seeker Visa</Link></li>
                                        <li><Link to="/contact" onClick={ClickHandler}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-30 col-md-6">
                        <div className="footer__widget">
                            <h3 className="widget-title">Trusted By Thousands</h3>
                            <p>We’re proud to have helped hundreds of students, families, and professionals achieve their global dreams. </p>
                            <div className="footer__copyright-img mt-30">
                                <img src={icon3} alt="Trusted" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__copyright ul_li_between">
                    <div className="footer__copyright-text mt-15">
                        Copyright © 2025 EduPrime. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
