import React from 'react';
import VideoModal from '../../ModalVideo';
import { Link } from 'react-router-dom'
import aImg1 from '../../../images/about/Family enjoying sightseeing in a foreign city.webp'
import aImg2 from '../../../images/about/turist-visa-travaling.webp'
import aImg3 from '../../../images/about/turist-visa-passport-holding.webp'

import aIcon from '../../../images/icon/arrow-right.svg'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about pos-rel pt-125 pb-125">
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-7 mt-30">
                        <div className="xb-about xb-about2">
                            <div className="xb-item--img text-center pos-rel">
                                <div className="xb-item--main-img">
                                    <img src={aImg1} alt="" />
                                </div>
                                <div className="xb-item--sml-img1">
                                    <img src={aImg2} alt="" />
                                </div>
                                <div className="xb-item--sml-img2">
                                    <img src={aImg3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-30">
                        <div className="xb-travel-about-content">
                            <div className="sec-title sec-title--travel">
                                <span className="subtitle">Plan With Trusted Travel Experts</span>
                                <h2 className="mb-25">Experience the Joy of Traveling Without Boundaries</h2>
                                <p className="mb-25">Whether you're exploring new cultures, relaxing on scenic beaches, or reconnecting with loved ones abroad <br/>our tourist visa experts simplify your journey. We handle the complex paperwork so you can focus on discovering the world with ease.</p>
                            </div>
                            <ul className="xb-about-list list-unstyled mt-25 mb-40">
                                <li><i className="far fa-check"></i>Personalized Visa Planning for Every Traveler</li>
                                <li><i className="far fa-check"></i>Affordable Options & Fast Turnaround</li>
                                <li><i className="far fa-check"></i>End-to-End Application Support</li>
                            </ul>
                            <div className="ul_li btns">
                                <Link onClick={ClickHandler} className="thm-btn thm-btn--trv" to="/about">Discover Our Services<span><img src={aIcon} alt="" /></span></Link>
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="xb-about-shape">
                <img src={shape} alt="" />
            </div> */}
            <h2 className="xb-strock-text">About Edu.Prime</h2>
        </section>
    )
}

export default About;