import React from 'react';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/jobseaker-visa.png'; // replace with your correct path
import { Link } from 'react-router-dom'

const Hero3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (


        <section className="hero5" style={{ backgroundImage: `url(${heroBg})` }} >
            <div className="hero5__overlay"></div>
            <div className="hero5__content">
                <h1>
                    Global Immigration <br />
                    <span>Visa Consulting </span>
                </h1>
                <p>
                    Expert Guidance for a Seamless Immigration Journey
                </p>
                <div className="btns">
                    <Link className="thm-btn thm-btn--white" to="/#">Get Free Consultation</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero3;
