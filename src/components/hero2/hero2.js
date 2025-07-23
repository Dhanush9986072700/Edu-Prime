import React from 'react';
import { Link } from 'react-router-dom'
import Bg from '../../images/bg/hero_bg-2.jpg'
import hero1 from '../../images/hero/img_01.png'
import shape1 from '../../images/icon/h_star.png'
import shape2 from '../../images/icon/arrow_right.svg'
import { Slide } from "react-awesome-reveal";

const Hero2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="hero hero__style-two bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="xb-hero-content wow text-center pos-rel">
                            <div className="xb-hero--img">
                                <Slide direction='up' triggerOnce={'false'} duration={1000}>
                                    <img src={hero1} alt="" />
                                </Slide>
                            </div>
                            <div className="xb-hero--holder">
                                <span className="xb-hero--subtitle">
                                    <Slide direction='up' triggerOnce={'false'} duration={1500}>
                                        <span><img src={shape1} alt="" />welcome to Visa Advisor<img src={shape1} alt="" /></span>
                                    </Slide>
                                </span>
                                <h1 className="xb-hero--title">
                                    <span>
                                        <Slide direction='left' triggerOnce={'false'} duration={1000}>
                                            Expert
                                        </Slide>
                                    </span>
                                    <span>
                                        <Slide direction='right' triggerOnce={'false'} duration={1000}>
                                            Student
                                        </Slide>
                                    </span>
                                </h1>
                                <h1 className="xb-hero--title2">Visa Help</h1>
                                <div className="xb-hero--btn">
                                    <Slide direction='up' triggerOnce={'false'} duration={1500}>
                                        <Link onClick={ClickHandler} className="grd-btn" to="/contact">Book Appintment today<span><img src={shape2} alt="" /></span></Link>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;