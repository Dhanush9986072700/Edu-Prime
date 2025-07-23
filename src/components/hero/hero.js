import React from 'react';
import '../../sass/components/Hero5.scss';
import heroBg from '../../images/bg/home-page-globle-immigration.png'; // replace with your correct path
import { Link } from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons';


const Hero3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (


        <section className="hero5" style={{ backgroundImage: `url(${heroBg})` }} >
            <div className="hero5__overlay"></div>
            <div className="hero5__content">
                <h1>
                Edu Prime Overseas  <span>Your Trusted Visa Consultant </span>
                </h1>
                <p>
                Edu Prime Overseas is a global visa consulting firm simplifying visas for students, travelers, investors, and job seekers worldwide. 
                Our expert team provides complete support across study, tourist, job seeker, and investor visas with end-to-end guidance. 
                Get a Free Consultation today and explore customized solutions tailored to your international goals.</p>
                <div className="btns">
                    <Link className="thm-btn thm-btn--white" to="/#">Get Free Consultation</Link>
                </div>
            </div>
            <SocialIcons /> 
        </section>
    );
};

export default Hero3;
